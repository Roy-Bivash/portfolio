import { Header } from "@/pages/home/header/Header";
import { Main } from "./main/Main";
import { useEffect, useState } from "react";

export default function Home() {
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

        document.querySelectorAll('section').forEach(section => {
            if (section) observer.observe(section);
        });
        return () => {
            document.querySelectorAll('section').forEach(section => {
              if (section) observer.unobserve(section);
            });
          };
      
    }, []);

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <Header 
                    current={currentSectionId}
                />
                <Main />
            </div>
        </div>
    )
}