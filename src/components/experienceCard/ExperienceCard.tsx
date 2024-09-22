import { Tag } from "../tag/Tag";

interface ExperienceCardProps {
  date: string;
  title: string;
  href: string;
  description: string;
  tags: Array<string>;
}


export function ExperienceCard({ date, title, href, description, tags }: ExperienceCardProps) {
    return (
        <a href={href} className="group/card transition flex flex-col md:flex-row rounded md:hover:bg-slate-800/50 md:p-4 gap-2 md:hover:shadow-lg">
            <div className="md:w-1/4 mb-1">
                <p className="text-textDescription text-xs font-semibold uppercase tracking-widest">{ date }</p>
            </div>
            <div className="md:w-3/4">
                <h4 className="transition group-hover/card:text-teal-300 text-text font-medium">{title}</h4>
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