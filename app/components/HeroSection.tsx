import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-4 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Welcome To The Portfolio
          <br />
          <span className="tracking-wide text-shadow-lg">
            Looking For Website?
          </span>
        </h1>
        <p>
          With my experience and creativity i can garuante you
          <br /> a cool, goodlooking website.
        </p>
        <div className="border-solid border-1 border-sky-500 ">
          <Link
            href={"mailto:mohamedzouine82o@gmail.com"}
            className="inline-block"
          >
            <div className="group-hover:bg-black transition-all transform hover:scale-500">
              <h1 className="text-3xl font-bold  hover:-rotate-2  duration-300 ease-in-out">
                Contact me 🤝
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 space-between lg:flex-row items-left items-center ">
          <div className="w-8 h-2 bg-indigo-500 rounded-full"></div>
          <div className="w-12 h-2 bg-indigo-300 rounded-full -translate-y-1 rotate-2 transition duration-300 ease-in-out hover:translate-y-1"></div>
          <div className="w-2 h-2 bg-indigo-200 rounded-full"></div>
          <div className="w-14 h-2 bg-indigo-100 rounded-full translate-y-1 -rotate-2 transition duration-300 ease-in-out hover:-translate-y-1"></div>
        </div>
      </div>
      <div className="w-72 h-72"></div>
    </div>
  );
}
