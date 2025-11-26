import { ChatBot } from "@/components/chatbot";
import { DashboardClientLayout } from "./dashboard-layout-client";
import Image from "next/image";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 z-[-1]">
                <Image
                    src="/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-20 dark:opacity-10"
                    priority
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
            </div>

            <DashboardClientLayout>
                {children}
                <ChatBot />
            </DashboardClientLayout>
        </>
    );
}
