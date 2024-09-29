import { Tag } from "../tag/Tag";

interface TimelineContentProps{
    title: string;
    description:string;
    tags: Array<string>;
}

export function TimelineContent({ title, description, tags }:TimelineContentProps){
    return(
        <div className="lg:w-4/6 lg:px-4 pt-1 pb-4 mb-8 lg:group-hover/item:bg-secondary-background">
            <h6 className="font-semibold text-primary-text lg:group-hover/item:text-accent-text">
                { title }
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
    )
}