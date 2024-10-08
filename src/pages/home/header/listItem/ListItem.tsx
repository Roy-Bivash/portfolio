interface ListItemProps {
    active:boolean;
    name: string;
    link: string;
}

export function ListItem({ active, name, link } : ListItemProps){
    return(
        <li className="group" data-current={(active) ? "true" : "false"}>
            <a href={link} className="flex items-center gap-4 py-3">
                <span className='
                    transition-all border-b h-min
                    group-data-[current=false]:w-8 group-data-[current=false]:group-hover:w-16 group-data-[current=false]:group-hover:border-text group-data-[current=false]:border-background-text 
                    group-data-[current=true]:border-primary-text group-data-[current=true]:w-16
                    '
                ></span>
                <span className='
                    uppercase text-xs font-semibold 
                    group-data-[current=false]:text-background-text group-data-[current=false]:group-hover:text-primary-text
                    group-data-[current=true]:text-primary-text
                    '
                >
                    { name }
                </span>
            </a>
        </li>
    )
}