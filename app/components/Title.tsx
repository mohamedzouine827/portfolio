export default function Title({ text }: { text: string }) {
    return (
      <div className="  group-hover:bg-black transition-all transform hover:translate-y-2">
        <h1 className=" flex flex-col justify-center items-center text-3xl font-bold hover:-rotate-6 duration-300 ease-in-out">
          {text}
          
        </h1>
      </div>
    );
  }
  