import { ReactNode } from "react";

interface ProjectCardListProps{
    children?: ReactNode;
}
export function ProjectCardList({ children }: ProjectCardListProps){
    return(
        <div className="lg:space-y-5 space-y-12 group/list">
            { children }
        </div>
    )
}