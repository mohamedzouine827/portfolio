
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
      <div className="mt-12 ml-12">
        <div className="border-2 border-white w-[56vw] h-[300px] flex items-center justify-start ">
          <div>
          <Link href="https://flavorsfusion.vercel.app">
            <Image
              src={Images.src}
              alt="Next.js"
              width={1280}
              height={1440}
              className="ml-8 h-[200px] w-[26vw]  overflow-hidden text-opacity-0 opacity-100 placeholder:transition duration-700 ease-in-out hover:opacity-25 hover:text-opacity-100"
            />
            
          </Link>
          <div  className=" absolute ml-10 text-xl font-bold mt-[-48px] text-white opacity-100 transition duration-400 ease-in-out hover:opacity-50 ">
            Flavours Fusion
          </div>
          </div>
          <div className=" ml-12  flex-col  ">
            <div className="text-3xl font-bold text-white opacity-100 transition duration-400 ease-in-out hover:opacity-50 ">
                Flavours Fusion
            </div>
            <br/>
            <div className=" mt-1 text-white opacity-100 transition duration-400 ease-in-out hover:opacity-50">
            This website lacks content and responsiveness due to the absence of a client.<br/> To prevent potential theft, I&apos;ve refrained from implementing<br/> responsiveness. However, I recognize the need to improve both aspects<br/> for a better user experience in the future
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
