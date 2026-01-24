/* eslint-disable @typescript-eslint/no-explicit-any */

import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
    name: string;
    email: string;
    subject: string;
    comment: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: RequestBody = await req.json();

        const emailAPI: any = new TransactionalEmailsApi();
        emailAPI.authentications.apiKey.apiKey = process.env.BREVO_API;

        const message = new SendSmtpEmail();
        message.sender = {
            name: "Portfolio Contact Form",
            email: process.env.SENDER_EMAIL,
        };
        message.to = [
            {
                email: process.env.RECIPIENT_EMAIL as string,
                name: process.env.RECIPIENT_NAME as string,
            },
        ];
        message.subject = body.subject;
        message.textContent = body.comment;
        message.replyTo = {
            email: body.email,
            name: body.name,
        };

        await emailAPI.sendTransacEmail(message);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 },
        );
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 },
        );
    }
}
