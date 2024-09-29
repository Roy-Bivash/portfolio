import { ReactNode } from "react";

interface TimelineItemProps{
    children: ReactNode;
}

export function TimelineItem({ children }:TimelineItemProps){
    return(
        <div className="transition relative lg:flex gap-x-3 group/item lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
            { children }
        </div>
    )
}