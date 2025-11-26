"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Library, GraduationCap, IndianRupee, User, Smartphone, Download, FileCode, Smile } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export function WhyUs() {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Why Choose UniNotes?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide more than just notes. We provide a complete ecosystem for your academic success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={IndianRupee}
                        title="COMPLETELY FREE !!!"
                        description="There is no mandatory fee for the students, they can freely use most of our services without paying even a single rupee to us."
                    />
                    <FeatureCard
                        icon={User}
                        title="NO REGISTRATION!"
                        description="You don't have to register for most of the services we provide. Mostly everything is available freely for the students without any condition or restriction."
                    />
                    {/* <FeatureCard
                        icon={Smartphone}
                        title="MOBILE FIRST DESIGN"
                        description="We try our best for providing the best possible user experience to our users. All of our web and mobile apps are built with the mobile-first approach in mind."
                    /> */}
                    {/* <FeatureCard
                        icon={Download}
                        title="ULTRA FAST DOWNLOAD"
                        description="All the study material is just one click away, with just a single click you can either view or download study material from our ultra-fast servers."
                    /> */}
                    {/* <FeatureCard
                        icon={FileCode}
                        title="COOL PROJECTS"
                        description="We are blessed with a team of curious and creative people, they always trying to come up with creative solutions to make your file easy & hassle-free."
                    /> */}
                    <FeatureCard
                        icon={Smile}
                        title="AWESOME SUPPORT TEAM"
                        description="Although we try our best to make everything as simple as possible but still if you ever need any help, please feel free to contact us. we would love to help you."
                    />
                </div>
            </div>
        </section>
    );
}
