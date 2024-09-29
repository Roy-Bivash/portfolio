import { useEffect, useState } from "react";

import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

import { LightEffect } from "@/components/lightEffect/LightEffect";

export function Home(){

    const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSectionId(entry.target.id);
                    // console.log(entry.target.id)
                }
                });
            },
            {
                threshold: 1,
            }
        );

        // Add the section traking
        document.querySelectorAll('section').forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            // Cleanup the event listener :
            document.querySelectorAll('section').forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return(
        <div className="relative">
            <LightEffect />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Header 
                        current={currentSectionId} 
                    />
                    <div className="lg:py-24 py-10 lg:w-2/3">
                        <Main />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}