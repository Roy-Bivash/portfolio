interface TagProps {
    name: string;
}

export function Tag({ name }: TagProps){
    return(
        <li className="bg-teal-400/10 text-teal-300 rounded-full px-3 py-1 text-xs">
            { name }
        </li>
    )
}