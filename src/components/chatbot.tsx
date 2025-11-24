"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatBot() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState<{ text: string; isUser: boolean }[]>([
        { text: "Hi! How can I help you with your notes today?", isUser: false },
    ]);
    const [inputValue, setInputValue] = React.useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;
        setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
        setInputValue("");

        // Mock response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "I'm just a demo bot for now, but I look great!", isUser: false },
            ]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-16 right-0 w-80 sm:w-96 bg-popover border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col"
                        style={{ maxHeight: "500px", height: "calc(100vh - 100px)" }}
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
                            <div className="font-semibold">UniNotes Assistant</div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-primary-foreground/20 p-1 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "max-w-[80%] p-3 rounded-2xl text-sm",
                                        msg.isUser
                                            ? "bg-primary text-primary-foreground ml-auto rounded-br-none"
                                            : "bg-muted text-muted-foreground mr-auto rounded-bl-none"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-border bg-background">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-muted px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
                <MessageCircle className="w-6 h-6" />
            </motion.button>
        </div>
    );
}
