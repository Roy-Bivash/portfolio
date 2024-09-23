import { Tag } from "../tag/Tag";

interface ProjectCardProps {
  img: string;
  title: string;
  href?: string;
  description: string;
  tags: Array<string>;
  target: "_self" | "_blank";
}


export function ProjectCard({ img, title, href = "#", description, tags, target }: ProjectCardProps) {
    return (
        <a href={href} target={target} className="group/card transition flex flex-col md:flex-row rounded md:hover:bg-slate-800/50 md:p-4 gap-3 md:hover:shadow-lg lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="md:w-1/4 mb-1">
                <img src={img} alt="project-image" className="border-2 border-slate-200/10 transition group-hover/card:border-slate-200/30 w-1/2 md:w-full lg:max-h-24 object-cover" />
            </div>
            <div className="md:w-3/4">
                <h4 className="transition group-hover/card:text-teal-300 text-text font-medium flex items-end gap-1">
                    <span>{title}</span>
                    {href != "#" && (
                        <svg className="transition h-4 w-4 group-hover/card:scale-110 group-hover/card:translate-x-1 group-hover/card:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    )}
                </h4>
                <p className="text-textDescription text-sm pt-1">{description}</p>
                <ul className="mt-3 flex flex-row flex-wrap gap-2">
                    {tags.map((el, i) => (
                        <Tag name={el} key={i}/>
                    ))}
                </ul>
            </div>
        </a>
    )
}