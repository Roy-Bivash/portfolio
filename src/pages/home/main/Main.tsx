import { ExperienceCardList } from "@/components/experienceCardList/ExperienceCard";
import { ExperienceCard } from "@/components/experienceCard/ExperienceCard";
import { ProjectCardList } from "@/components/projectCardList/ProjectCardList";
import { ProjectCard } from "@/components/projectCard/ProjectCard";

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
                    <ExperienceCard 
                        date="2023 - Present"
                        title="Software Engineer at Example Company"
                        href="https://www.examplecompany.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        tags={["React", "Node.js", "JavaScript","React", "Node.js", "JavaScript","React", "Node.js", "JavaScript"]}
                    />
                    <ExperienceCard 
                        date="2020 - 2023"
                        title="Software Engineer at Example Company"
                        href="https://www.examplecompany.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        tags={["React", "Node.js", "JavaScript"]}
                    />
                    <ExperienceCard 
                        date="2019 - 2020"
                        title="Software Engineer at Example Company"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        
                    />
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
                    <ProjectCard
                        img="https://randompicturegenerator.com/img/cat-generator/gd289075a1c87a119496d8238bd50090bdb1e5c0d58db00f62ffa1b445aeeaa78424d38a473da6018ae4ab94fcab66d1f_640.jpg"
                        title="Software Engineer at Example Company"
                        href="https://www.examplecompany.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        tags={["React", "Node.js", "JavaScript"]}
                    />
                    <ProjectCard
                        img="https://randompicturegenerator.com/img/cat-generator/ga66c1874a1157afff5e0f4929f258841d987b032cb591f5f1f99c33de7d556c8c1738e7d7741da933787e434de36fe56_640.jpg"
                        title="Software Engineer at Example Company"
                        href="https://www.examplecompany.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        tags={["React", "Node.js", "JavaScript"]}
                    />
                </ProjectCardList>
            </section>
        </main>
    )
}