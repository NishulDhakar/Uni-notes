"use client";

import React from "react";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { WhyUs } from "@/components/landing/why-us";
import { Services } from "@/components/landing/services";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export function LandingPage() {
    return (
        <div className="min-h-screen text-gray-900 selection:bg-primary selection:text-white font-sans">


            <main className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <React.Suspense fallback={null}>
                    <Hero />
                </React.Suspense>
                <About />
                <WhyUs />
                {/* <Services /> */}
                <Testimonials />
                <FAQ />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}