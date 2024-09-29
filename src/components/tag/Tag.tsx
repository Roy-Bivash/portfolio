interface TagProps {
    name: string;
}

export function Tag({ name }: TagProps){
    return(
        <li className="bg-accent-background text-accent-text rounded-full px-3 py-1 text-xs">
            { name }
        </li>
    )
}