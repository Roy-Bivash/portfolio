import { Timeline, TimelineContent, TimelineDate, TimelineItem } from "@/components/timeline";
import { ProjectList, Project } from "@/components/project";
import imgProject1 from "@/assets/img/projects/chat.png";
import imgProject2 from "@/assets/img/projects/brightness.png";
import imgProject3 from "@/assets/img/projects/aim-trainer.png";

interface Experience {
    date: string;
    title: string;
    description: string;
    tags: Array<string>;
};
interface Project {
    img: any;
    title: string;
    href: string;
    description: string;
    tags: Array<string>;
    target: "_self" | "_blank";
}

const experienceList:Array<Experience> = [
    {
        date: "2023 - Present",
        title: "Full stack developer apprenticeship at Public Finance",
        description: "Designed, developed, presented, and maintained a Project Management Dashboard application in collaboration with a team.",
        tags: ["Vue.js", "Java Spring", "Figma", "PostgreSQL", "TypeScript", "GitLab"],
    },
    {
        date: "2022 - 2023",
        title: "Full stack developer apprenticeship at Public Finance for 1 year",
        description: "Configured and managed a Rocky Linux server for PHP applications with PostgreSQL, developed server admin tools, and migrated applications from PHP 5 to PHP 8.",
        tags: ["PHP", "PostgreSQL", "JavaScript", "Tailwind CSS", "Git", "REST API"],
    },
    {
        date: "May 2021",
        title: "Designed and implemented a web application facilitating rapid note sharing among office staff members.",
        description: "Configured and managed a Rocky Linux server for PHP applications with PostgreSQL, developed server admin tools, and migrated applications from PHP 5 to PHP 8.",
        tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    },
];

const projectList:Array<Project> = [
    {
        img: imgProject1,
        title: "Pulsar",
        href: "https://github.com/Roy-Bivash/pulsar",
        description: "Run the Microsoft Phi models locally on your machine",
        tags: ["python", "Vue.js", "TypeScript", "CSS", "Docker", "Git"],
        target: "_blank",
    },
    {
        img: imgProject2,
        title: "Brightness",
        href: "https://github.com/Roy-Bivash/Brightness",
        description: "Adjust the the brightness of individual monitors in linux.",
        tags: ["Rust", "React", "Tauri", "Typescript", "Git"],
        target: "_blank",
    },
    {
        img: imgProject3,
        title: "Aim Trainer",
        href: "https://github.com/Roy-Bivash/aim-trainer",
        description: "A simple aim trainer using the pixi.js library",
        tags: ["HTML", "CSS", "JavaScript", "Pixi.js"],
        target: "_blank",
    }, 
];

export function Main(){
    return(
        <main className="lg:grid lg:grid-cols-1 space-y-14 lg:space-y-28">
            <section id="about" className="lg:justify-self-end lg:bg-secondary-background lg:p-4 lg:w-4/5 lg:shadow-lg">
                <div className="sticky top-0 z-20 -mx-6 mb-4 bg-secondary-background px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-text lg:sr-only">About</h2>
                </div>
                <div className="space-y-5 leading-relaxed tracking-wide">
                    <p className="text-secondary-text">
                        Back in 2020, I decided to dive into coding by creating small <a href="#projects" className="text-primary-text hover:underline">projects</a> and exploring the world of programming. What started as a curiosity quickly turned into a passion. 
                        <br />After completing a two-year technical degree in IT, where I sharpened my skills, I'm now pursuing a Computer Engineering degree at <a href="https://www.cnam.fr/" target="_blank" className="text-primary-text hover:underline">CNAM University.</a>
                    </p>
                    <p className="text-secondary-text">
                        These days, my focus is on becoming a better developer and deepening my expertise in full-stack development. 
                        <br />
                        I'm constantly seeking opportunities to grow, with the long-term goal of moving into a leadership role where I can manage and guide teams toward building innovative solutions.
                    </p>
                </div>
            </section>
            <section id="experience" className="pt-10">
                <div className="sticky top-0 z-20 -mx-6 mb-4 bg-secondary-background px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-text lg:sr-only">Experience</h2>
                </div>
                <Timeline>
                    {experienceList.map((el, i) => (
                        <TimelineItem key={i}>
                            <TimelineDate
                                date={el.date}
                            />
                            <TimelineContent
                                title={el.title}
                                description={el.description}
                                tags={el.tags}
                            />
                        </TimelineItem>
                    ))}
                    
                </Timeline>
                <div className="mt-6 lg:flex lg:justify-end">
                    <a href="./resume.pdf" target="_blank" className="transition w-fit group text-primary-text font-normal tracking-wide hover:text-accent-text flex items-end gap-1">
                        <span>View Full Résumé</span>
                        <svg className="transition h-4 w-4 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </section>
            <section id="projects">
                <div className="sticky top-0 z-20 -mx-6 mb-4 bg-secondary-background px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-text lg:sr-only">Projects</h2>
                </div>
                <ProjectList>
                    {projectList.map((el, i) => (
                        <Project 
                            key={i}
                            img={el.img}
                            title={el.title}
                            href={el.href}
                            description={el.description}
                            target={el.target}
                            tags={el.tags}
                        />
                    ))}
                </ProjectList>
                <div className="mt-6 lg:flex lg:justify-end">
                    <a href="./projects" target="_self" className="transition w-fit group text-primary-text font-normal tracking-wide hover:text-accent-text flex items-center gap-1">
                        <span>Project list</span>
                        <svg className="transition h-4 w-4 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                            </g>
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    )
}