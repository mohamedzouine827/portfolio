
import Image from "next/image";
import ProjectTitle from "./ProjectTitle";
import Images from "@/app/assets/image_2024-03-13_233420172.jpg";
import Link from "next/link";
;

export default function Projects() {



  return (
    <div>
      <div className="hover:line-through decoration-black ">
        <ProjectTitle text="Projects🔨" />
      </div>
      <div className="mt-12 ml-4 md:ml-12">
        <div className="border-2 border-white h-[600px] w-[80vw] md:w-[56vw] md:h-[300px] flex flex-col md:flex-row items-center justify-center md:justify-start ">
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
            Flavours Fusion
          </div>
          </div>
          <div className=" ml-12 flex-row md:flex-col  ">
            <div className="justify-center items-center md:mt-0 mt-4 mr-8 md:mr-0 flex md:justify-start text-xl md:text-3xl font-bold text-white opacity-100 transition duration-400 ease-in-out hover:opacity-50 ">
                Flavours Fusion
            </div>
            <br/>
            <div className=" mt-1 text-white opacity-100 text-light flex justify-center items-center md:justify-start md:items-start transition duration-400 ease-in-out hover:opacity-50">
            This website lacks content and responsiveness due to the absence <br/> of a client. To prevent potential theft, I&apos;ve refrained from implementing<br/> responsiveness. However, I recognize the need to improve <br/> both aspects for a better user experience in the future
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
