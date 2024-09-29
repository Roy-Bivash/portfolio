interface TimelineDateProps{
    date:string;
}
export function TimelineDate({ date }:TimelineDateProps){
    return(
        <>
            <div className="pt-1 lg:w-1/6 lg:text-end text-secondary-text lg:group-hover/item:text-primary-text">
                { date }
            </div>
            <div className="hidden lg:block relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-secondary-text ">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="transition size-4 rotate-45 bg-secondary-text group-hover/item:bg-transparent border-2 border-transparent group-hover/item:border-accent-text"></div>
                </div>
            </div>
        </>
    )
}
