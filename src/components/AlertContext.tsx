"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AlertType = "success" | "error";

interface AlertContextType {
    showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [alert, setAlert] = useState<{
        message: string;
        type: AlertType;
    } | null>(null);

    const showAlert = (message: string, type: AlertType = "success") => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 3000);
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {alert && (
                <div
                    className={`fixed bottom-4 right-0 -translate-x-4 z-100 p-4 text-lg rounded-full shadow-lg ${
                        alert.type === "success"
                            ? "text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300"
                            : "text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300"
                    }`}
                    role="alert"
                >
                    <span className="font-medium">
                        {alert.type === "success" ? "Success!" : "Error!"}
                    </span>{" "}
                    {alert.message}
                </div>
            )}
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context)
        throw new Error("useAlert must be used within an AlertProvider");
    return context;
};
