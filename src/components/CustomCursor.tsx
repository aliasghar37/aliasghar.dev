"use client";

import { useEffect, useRef } from "react";

const DOT_LERP = 0.85;
const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;
const CustomCursor = () => {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const canUseCustomCursor =
            window.matchMedia("(pointer: fine)").matches &&
            !window.matchMedia("(hover: none)").matches;

        if (!canUseCustomCursor) return;

        const html = document.documentElement;
        html.classList.add("has-custom-cursor");

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const dot = { x: mouse.x, y: mouse.y };

        let isVisible = false;
        let isPressed = false;
        let frameId = 0;

        const updateClasses = () => {
            root.classList.toggle("is-visible", isVisible);
            root.classList.toggle("is-pressed", isPressed);
        };

        const render = () => {
            dot.x = lerp(dot.x, mouse.x, DOT_LERP);
            dot.y = lerp(dot.y, mouse.y, DOT_LERP);

            root.style.setProperty("--cursor-dot-x", `${dot.x}px`);
            root.style.setProperty("--cursor-dot-y", `${dot.y}px`);

            frameId = window.requestAnimationFrame(render);
        };

        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") return;

            mouse.x = event.clientX;
            mouse.y = event.clientY;

            if (!isVisible) {
                isVisible = true;
                dot.x = mouse.x;
                dot.y = mouse.y;
                updateClasses();
            }
        };

        const onPointerDown = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") return;
            isPressed = true;
            updateClasses();
        };

        const onPointerUp = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") return;
            isPressed = false;
            updateClasses();
        };

        const onWindowLeave = () => {
            isVisible = false;
            isPressed = false;
            updateClasses();
        };

        const onWindowEnter = () => {
            isVisible = true;
            updateClasses();
        };

        window.addEventListener("pointermove", onPointerMove, {
            passive: true,
        });
        window.addEventListener("pointerdown", onPointerDown, {
            passive: true,
        });
        window.addEventListener("pointerup", onPointerUp, { passive: true });
        window.addEventListener("mouseleave", onWindowLeave);
        window.addEventListener("mouseenter", onWindowEnter);

        frameId = window.requestAnimationFrame(render);

        return () => {
            window.cancelAnimationFrame(frameId);
            html.classList.remove("has-custom-cursor");

            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("mouseleave", onWindowLeave);
            window.removeEventListener("mouseenter", onWindowEnter);
        };
    }, []);

    return (
        <div ref={rootRef} className="custom-cursor" aria-hidden="true">
            <span className="custom-cursor-dot  " role="presentation">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.8,9.4,4.87,2.18A2,2,0,0,0,2.18,4.87h0L9.4,20.8A2,2,0,0,0,11.27,22h.25a2.26,2.26,0,0,0,2-1.8l1.13-5.58,5.58-1.13a2.26,2.26,0,0,0,1.8-2A2,2,0,0,0,20.8,9.4Z" />
                </svg>
            </span>
        </div>
    );
};

export default CustomCursor;
