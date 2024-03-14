import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from 'next/link';



export default function Navbar() {
    const socials = [
        {
            link : "https://www.linkedin.com/in/mohamed-zouine-01aab6281/",
            name : "Linkdin",
            icon: SiLinkedin
        },
        {
            link : "https://github.com/mohamedzouine827",
            name : "Github",
            icon: SiGithub
        },
    ]

  return (
    <nav className="py-10 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-grey -rotate-2 hover:rotate-0 transition-all">Mohamed Zouine 🎮</h1>
        <div className="flex items-center gap-5">
            {socials.map((social, index) =>{
                const Icons = social.icon
                return <Link href={social.link} key={index} arial-label={social.name}>
                    <Icons className="w-5 h-5 hover:scale-125 transition-all" />
                </Link>
            })}
        </div>
    </nav>
  )
}
