import { ReactNode } from "react";

interface ProjectCardListProps{
    children?: ReactNode;
}
export function ProjectCardList({ children }: ProjectCardListProps){
    return(
        <div className="space-y-5 group/list">
            { children }
        </div>
    )
}