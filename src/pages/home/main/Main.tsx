import { Timeline, TimelineContent, TimelineDate, TimelineItem } from "@/components/timeline";
import { ProjectList, Project } from "@/components/project";
import experiences from '@/data/experience-list.json';
import projects from "@/data/home-page-project-list.json";
import aboutData from '@/data/about.json';
import { Link } from "react-router-dom";

type Link = {
  href: string;
  text: string;
};

type Content = {
  text: string;
  link?: Link;
  afterText?: string;
};

type Paragraph = {
  id: number;
  content: Content[];
};

interface Experience {
    date: string;
    title: string;
    secondary_title: string;
    description: string;
    tags: Array<string>;
};

interface Project {
    img: string;
    title: string;
    href?: string;
    description: string;
    tags: Array<string>;
    target: string;
}

export function Main(){
    return(
        <main className="lg:grid lg:grid-cols-1 space-y-14 lg:space-y-28">
            <section id="about" className="lg:justify-self-end lg:bg-secondary-background lg:p-4 lg:w-4/5 lg:shadow-lg">
                <div className="sticky top-0 z-20 -mx-6 mb-4 bg-secondary-background px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-text lg:sr-only">About</h2>
                </div>
                <div className="space-y-5 leading-relaxed tracking-wide">
                    {aboutData.map((el: Paragraph) => (
                        <p key={el.id} className="text-secondary-text">
                            {el.content.map((chunk, i) => (
                                <span key={i}>
                                    {chunk.text}
                                    {chunk.link && (
                                        <a
                                            href={chunk.link.href}
                                            target={chunk.link.href.startsWith('http') ? '_blank' : undefined}
                                            className="text-primary-text hover:underline"
                                        >
                                            {chunk.link.text}
                                        </a>
                                    )}
                                    {chunk.afterText && chunk.afterText}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>
            </section>
            <section id="experience" className="pt-10">
                <div className="sticky top-0 z-20 -mx-6 mb-4 bg-secondary-background px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-text lg:sr-only">Experience</h2>
                </div>
                <Timeline>
                    {experiences.map((el: Experience, i) => (
                        <TimelineItem key={i}>
                            <TimelineDate
                                date={el.date}
                            />
                            <TimelineContent
                                title={el.title}
                                secondary_title={el.secondary_title}
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
                    {projects.map((el: Project, i) => (
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
                    <Link to="./projects" target="_self" className="transition w-fit group text-primary-text font-normal tracking-wide hover:text-accent-text flex items-center gap-1">
                        <span>Project list</span>
                        <svg className="transition h-4 w-4 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                            </g>
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    )
}