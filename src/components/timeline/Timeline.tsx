import { ReactNode } from "react";

interface TimelineProps{
    children: ReactNode;
    className?: string;
}

export function Timeline({ children, className="" }:TimelineProps){
    return(
        <div className={`group/list ${className}`}>
            { children }
        </div>
    )
}


