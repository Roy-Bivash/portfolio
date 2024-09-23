import { ReactNode } from "react";

interface ExperienceCardListProps{
    children?: ReactNode;
}
export function ExperienceCardList({ children }: ExperienceCardListProps){
    return(
        <div className="lg:space-y-5 space-y-12 group/list">
            { children }
        </div>
    )
}