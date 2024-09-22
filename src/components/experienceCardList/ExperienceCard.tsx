import { ReactNode } from "react";

interface ExperienceCardListProps{
    children?: ReactNode;
}
export function ExperienceCardList({ children }: ExperienceCardListProps){
    return(
        <div className="space-y-5 group/list">
            { children }
        </div>
    )
}