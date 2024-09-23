import { ExperienceCardList } from "@/components/experienceCardList/ExperienceCardList";
import { ExperienceCard } from "@/components/experienceCard/ExperienceCard";
import { ProjectCardList } from "@/components/projectCardList/ProjectCardList";
import { ProjectCard } from "@/components/projectCard/ProjectCard";
import imgProject1 from "@/assets/img/projects/chat.png";
import imgProject2 from "@/assets/img/projects/brightness.png";
import imgProject3 from "@/assets/img/projects/aim-trainer.png";


interface Experience {
    date: string;
    title: string;
    href: string;
    description: string;
    tags: Array<string>;
};
interface Project {
    img: any;
    title: string;
    href: string;
    description: string;
    tags: Array<string>;
}

const experienceList:Array<Experience> = [
    {
        date: "2023 - Present",
        title: "Full stack developer apprenticeship at Public Finance",
        href: "#",
        description: "Designed, developed, presented, and maintained a Project Management Dashboard application in collaboration with a team.",
        tags: ["Vue.js", "Java Spring", "PostgreSQL", "TypeScript", "HTML", "CSS"],
    },
    {
        date: "2022 - 2023",
        title: "Full stack developer apprenticeship at Public Finance for 1 year",
        href: "#",
        description: "Configured and managed a Rocky Linux server for PHP applications with PostgreSQL, developed server admin tools, and migrated applications from PHP 5 to PHP 8.",
        tags: ["PHP", "PostgreSQL", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        date: "May 2021",
        title: "Designed and implemented a web application facilitating rapid note sharing among office staff members.",
        href: "#",
        description: "Configured and managed a Rocky Linux server for PHP applications with PostgreSQL, developed server admin tools, and migrated applications from PHP 5 to PHP 8.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
    
    
];

const projectList:Array<Project> = [
    {
        img: imgProject1,
        title: "Pulsar",
        href: "https://github.com/Roy-Bivash/pulsar",
        description: "Run the Microsoft Phi models locally on your machine",
        tags: ["python", "Vue.js", "TypeScript", "CSS", "Docker"],
    },
    {
        img: imgProject2,
        title: "Brightness",
        href: "https://github.com/Roy-Bivash/Brightness",
        description: "Adjust the the brightness of individual monitors in linux.",
        tags: ["Rust", "React", "Tauri", "Typescript"],
    },
    {
        img: imgProject3,
        title: "Aim Trainer",
        href: "https://github.com/Roy-Bivash/aim-trainer",
        description: "A simple aim trainer using the pixi.js library",
        tags: ["HTML", "CSS", "JavaScript", "Pixi.js"],
    }, 
];

export function Main(){
    return (
        <main className="lg:py-24 py-10 lg:w-1/2 space-y-24">
            <section id="about">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                </div>
                <div className="space-y-5 leading-relaxed tracking-wide">
                    <p className="text-textDescription">
                        Back in 2020, I decided to dive into coding by creating small <a href="#projects" className="text-text hover:underline">projects</a> and exploring the world of programming. What started as a curiosity quickly turned into a passion. 
                        <br />After completing a two-year technical degree in IT, where I sharpened my skills, I'm now pursuing a Computer Engineering degree at <a href="https://www.cnam.fr/" target="_blank" className="text-text hover:underline">CNAM University.</a>
                    </p>
                    <p className="text-textDescription">
                        These days, my focus is on becoming a better developer and deepening my expertise in full-stack development. 
                        <br />
                        I'm constantly seeking opportunities to grow, with the long-term goal of moving into a leadership role where I can manage and guide teams toward building innovative solutions.
                    </p>
                </div>
            </section>
            <section id="experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <ExperienceCardList>
                    {experienceList.map((el, i) => (
                        <ExperienceCard 
                            key={i}
                            date={el.date}
                            title={el.title}
                            href={el.href}
                            description={el.description}
                            tags={el.tags}
                        />
                    ))}
                </ExperienceCardList>
                <div className="mt-6">
                    <a href="#" className="transition group text-text font-normal tracking-wide hover:text-teal-300 flex items-end gap-1">
                        <span>View Full Résumé</span>
                        <svg className="transition h-4 w-4 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </section>
            <section id="projects">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                </div>
                <ProjectCardList>
                    {projectList.map((el, i) => (
                        <ProjectCard
                            key={i}
                            img={el.img}
                            title={el.title}
                            href={el.href}
                            description={el.description}
                            tags={el.tags}
                        />
                    ))}
                </ProjectCardList>
            </section>
        </main>
    )
}