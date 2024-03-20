
import Image from "next/image";
import ProjectTitle from "./ProjectTitle";
import Images from "@/app/assets/aa.png";
import Link from "next/link";
;

export default function Projects() {



  return (
    <div>
      <div className="hover:line-through decoration-black ">
        <ProjectTitle text="Projects🔨" />
      </div>
      <div className="mt-12 ml-4 md:ml-12">
        <div className="border-b-2 border-l-2 border-t-[0.001vh] border-r-[0.001vh] border-white h-[50vh] md:h-[40vh] w-[80vw] md:w-[52vw]  flex flex-col md:flex-row items-center justify-center md:justify-start ">
          <div>
          <Link href="https://flavorsfusion.vercel.app">
            <Image
              src={Images.src}
              alt="Next.js"
              width={1280}
              height={1440}
              className=" md:ml-8 w-[60vw] h-[25vh] md:h-[200px] md:w-[26vw]  overflow-hidden text-opacity-0 opacity-100 placeholder:transition duration-700 ease-in-out hover:opacity-25 hover:text-opacity-100"
            />
            
          </Link>
          <div  className=" hidden md:block md:absolute md:ml-10 md:text-xl md:font-bold md:mt-[-48px] md:text-white md:opacity-100 md:transition md:duration-400 md:ease-in-out md:hover:opacity-50 ">
            Zn Agency
          </div>
          </div>
          <div className=" md:ml-12 flex-row md:flex-col  ">
            <div className="justify-center items-center md:mt-0 mt-4 mr-8 md:mr-0 flex md:justify-center text-xl md:text-3xl font-bold text-white opacity-100 transition duration-400 ease-in-out hover:opacity-50 ">
                Zn Agency
            </div>
            <br/>
            <div className=" p-[2vw] mt-1 text-white opacity-100 text-light flex justify-center items-center text-center md:justify-center md:text-center md:items-start transition duration-400 ease-in-out hover:opacity-50">
            Zn Agency is a Costume Website For an Agency X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
