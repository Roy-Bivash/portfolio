export function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="text-background-text text-sm mt-16 lg:mt-28">
            <p>
                &copy; {currentYear} <a href="https://rbivash.com/" target="_self" className="transition text-primary-text hover:underline hover:text-accent-text">ROY Bivash.</a> No rights reserved. Free to <a href="https://github.com/Roy-Bivash/portfolio" target="_blank" className="transition text-primary-text hover:underline hover:text-accent-text">use and modify.</a> 
            </p>
            <p className="my-2">
                Inspired by <a href="https://brittanychiang.com/" target="_blank" className="transition text-primary-text hover:underline hover:text-accent-text">Brittany Chiang</a>.
            </p>
            <p>
                SVG by <a href="https://www.svgrepo.com/" target="_blank" className="transition text-primary-text hover:underline hover:text-accent-text">SVGRepo</a>
            </p>
            <p className="">
                Built with <a href="https://reactjs.org/" target="_blank" className="transition text-primary-text hover:underline hover:text-accent-text">React</a> and <a href="https://tailwindcss.com/" target="_blank" className="transition text-primary-text hover:underline hover:text-accent-text">TailwindCSS</a>.
            </p>
        </footer>

    )
}