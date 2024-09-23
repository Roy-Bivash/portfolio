import './Header.css';
import { ListItem } from './listItem/ListItem';

interface HeaderProps{
    current:String | null;
}
interface NavLinks {
    name: string;
    link: string;
}

const navLinks:Array<NavLinks> = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "experience",
        link: "#experience"
    },
    {
        name: "projects",
        link: "#projects"
    }
];

const socialMedia = {
    email:"bivash.roy.pro@outlook.com",
    github: "https://github.com/Roy-Bivash",
    linkedin: "https://www.linkedin.com/in/bivash-roy15",
};

export function Header({ current } : HeaderProps) {
    return (
        <header className="lg:h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-10">
            <div>
                <h1 className="text-text text-4xl sm:text-6xl font-bold">Roy Bivash</h1>
                <h3 className="text-text mt-3 text-xl">Full-Stack Engineer</h3>
                <p className="text-textDescription mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
                
                <nav className='my-10 nav hidden lg:block'>
                    <ul className="">
                        {navLinks.map((el, i) => (
                            <ListItem
                                active={(el.link.substring(1) == current)} // Escape the # of the link for the compareson
                                name={el.name}
                                link={el.link}
                                key={i}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className='mt-8 flex items-center gap-5'>
                {socialMedia.github != "" && (
                    <li>
                        <a href={socialMedia.github} target='_blank' className='transition-all block text-textDescription hover:text-slate-200'>
                            <span className='sr-only'>GitHub</span>
                            <svg className="h-6 w-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> 
                                            </g> 
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                )}
                {socialMedia.linkedin != "" && (
                    <li>
                        <a href={socialMedia.linkedin} target='_blank' className='transition-all block text-textDescription hover:text-slate-200'>
                            <span className='sr-only'>LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512">
                                <g id="SVGRepo_iconCarrier"> 
                                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> 
                                </g>
                            </svg>
                        </a>
                    </li>
                )}
                {socialMedia.email != "" && (
                    <li>
                        <a href={`mailto:${socialMedia.email}`} target='_blank' className='transition-all block text-textDescription hover:text-slate-200'>
                            <span className='sr-only'>Email</span>
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="email" fill="currentColor"> 
                                    <path id="vector" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> 
                                    <path fill='none' id="vector_2" d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> 
                                </g> 
                            </svg>
                        </a>
                    </li>
                )}
            </ul>
        </header>
    )
}