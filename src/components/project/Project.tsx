import { Tag } from "../tag/Tag";

interface ProjectProps {
    img: any;
    title: string;
    href: string;
    description: string;
    tags: Array<string>;
    target: string;
}

export function Project({ title, href, description, tags, target, img }:ProjectProps){
    return(
        <a href={href} target={target} className="transition lg:group-hover/list:opacity-60 lg:hover:!opacity-100 group/project flex flex-col lg:flex-row gap-4 lg:w-5/6 lg:hover:bg-secondary-background px-4 py-4 border-r-2 border-transparent lg:hover:border-accent-text">
            <img src={img} alt="project image" className="lg:w-32 w-1/2 opacity-80 aspect-video object-contain" />
            <div className="border-b pb-5 border-accent-background lg:border-none lg:pb-0">
                <h6 className="flex items-end gap-1 group-hover/project:text-accent-text font-semibold text-primary-text lg:group-hover/item:text-accent-text">
                    <span>
                        { title }
                    </span>
                    <svg className="transition h-4 w-4 mb-1 group-hover/project:translate-x-1 group-hover/project:-translate-y-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_iconCarrier">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </h6>
                <p className="text-secondary-text py-2">
                    { description }
                </p>
                <ul className="mt-2 flex flex-row flex-wrap gap-y-3 gap-x-1">
                    {tags.map((el, i) => (
                        <Tag 
                            key={i}
                            name={el}
                        />
                    ))}
                </ul>
            </div>
        </a>
    )
}