import { Tag } from "@/components/tag/Tag";
import { LightEffect } from "@/components/lightEffect/LightEffect";

interface Link {
    display: string;
    href:string;
    target: "_self" | "_blank";
}
interface ArchiveInterface {
    year: string;
    project: string;
    tags: Array<string>;
    link?: Link;
}

const archiveList:Array<ArchiveInterface> = [
    {
        year: "2025",
        project: "Pallery : Pallery is a Pinterest-style web application for hosting images",
        tags: ["React", "TypeScript", "Express", "NodeJS", "Supabase", "TailwindCSS"],
        link: {
            display: "Github",
            href: "https://github.com/Roy-Bivash/Pallery",
            target: "_blank",
        },
    },
    {
        year: "2024",
        project: "Pulsar : Run the Microsoft Phi models locally on your machine",
        tags: ["python", "Vue.js", "TypeScript", "CSS", "Docker"],
        link: {
            display: "Github",
            href: "https://github.com/Roy-Bivash/pulsar",
            target: "_blank",
        },
    },
    {
        year: "2024",
        project: "Brightness : Adjust the the brightness in linux.",
        tags: ["Rust", "React", "Tauri", "Typescript"],
        link: {
            display: "Github",
            href: "https://github.com/Roy-Bivash/Brightness",
            target: "_blank",
        },
    },
    {
        year: "2024",
        project: "Rent A Bike : School project",
        tags: ["React", "NestJS", "MySQL"],
        link: {
            display: "Github",
            href: "https://github.com/Roy-Bivash/rentabike",
            target: "_blank",
        },
    },
    {
        year: "2023",
        project: "Aim Trainer",
        tags: ["HTML", "CSS", "JavaScript", "Pixi.js"],
        link: {
            display: "Github",
            href: "https://github.com/Roy-Bivash/aim-trainer",
            target: "_blank",
        },
    },
    {
        year: "2023",
        project: "TIC TAC TOE",
        tags: ["JavaScript"],
        link: {
            display: "TIC TAC TOE",
            href: "http://projects.rbivash.com/js-morpion/",
            target: "_blank"
        }
    },
    {
        year: "2022",
        project: "Windows Dashboard",
        tags: ["C#", ".NET Framework"],
    },
    {
        year: "2021",
        project: "Billing application",
        tags: ["PHP", "MySQL", "Bootstrap", "Javascript"],
    },
    {
        year: "2021",
        project: "NASA Rover Images",
        tags: ["NASA API", "JavaScript", "Bootstrap"],
        link: {
            display: "NASA Image",
            href: "http://projects.rbivash.com/nasa2/",
            target: "_blank"
        }
    },
];

export function Projects(){
    return(
        <main className="relative">
            <LightEffect />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-10">
                <div className="mt-6 mb-2">
                    <a href="/" className="transition group font-normal tracking-wide text-accent-text flex items-center gap-1">
                        <svg className="transition h-4 w-4 group-hover:-translate-x-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier">
                                <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                            </g>
                        </svg>
                        <span>ROY BIvash</span>
                    </a>
                </div>
                <h1 className="text-primary-text text-4xl sm:text-5xl font-bold tracking-wide">Projects</h1>
                <table className="mt-12 w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10 border-b border-secondary-background px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-primary-text">Year</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-primary-text">Project</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-primary-text lg:table-cell">Built with</th>
                            <th className="hidden py-4 pr-8 pl-4 text-sm font-semibold text-primary-text md:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    {archiveList.map((el, i) => (
                            <tr key={i} className="border-b border-secondary-background">
                                <td className="text-secondary-text">
                                    {el.year}
                                </td>
                                <td className="py-4 pr-4 align-top font-normal leading-snug text-primary-text">
                                    <span className="hidden md:block">{el.project}</span>
                                    <div className="md:hidden">
                                        <a href={el.link?.href} target={el.link?.target} className="flex items-end gap-1">
                                            <span>{el.project}</span>
                                            {el.link && (
                                                <span>
                                                    <svg className="h-4 w-4 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            )}
                                        </a>
                                    </div>
                                </td>
                                <td className="hidden lg:table-cell">
                                    <ul className="flex gap-2 -translate-y-1.5 flex-wrap">
                                        {el.tags.map((theTag, i) => (
                                            <Tag key={i} name={theTag} />
                                        ))}
                                    </ul>
                                </td>
                                <td className="py-4 pl-4 align-top hidden md:table-cell">
                                    {el.link && (
                                        <a href={el.link.href} target={el.link.target} className="group text-sm font-normal leading-tight text-secondary-text hover:text-accent-text flex items-end gap-1">
                                            <span>{el.link.display}</span>
                                            <span>
                                                <svg className="transition h-4 w-4 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

