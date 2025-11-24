import { AppSidebar } from "@/components/app-sidebar";
import { ChatBot } from "@/components/chatbot";
import Image from "next/image";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen text-foreground relative">
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

            <AppSidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <div className="flex-1 overflow-y-auto p-6 sm:p-10">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </div>
                <ChatBot />
            </main>
        </div>
    );
}
