interface TagProps {
    name: string;
}

export function Tag({ name }: TagProps){
    return(
        <li className="bg-emerald-400/20 text-emerald-900 rounded-full px-3 py-1 text-xs">
            { name }
        </li>
    )
}