import { ReactNode } from "react"

interface ProjectListProps {
    children: ReactNode;
}
export function ProjectList({ children }:ProjectListProps){
    return(
        <div className="group/list flex flex-col lg:items-end space-y-3">
            { children }
        </div>
    )
}