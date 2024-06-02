import BigText from "@/components/BigText";
import BackgroundVideo from "@/components/elements/BackgroundVideo";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex items-center justify-center min-h-screen">
<main className="relative min-h-screen overflow-hidden">
<div className="fixed top-0 left-0 z-0 w-full h-full">
        <BackgroundVideo webmVideoPath="/videos/background-1.webm" />
      </div>

  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
    <div className="bg-zinc-900 bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-2xl">
      <h1 className="font-black text-5xl sm:text-7xl md:text-9xl text-amber-300 mix-blend-hard-light opacity-90">ll show</h1>
    </div>
  </div>

  <div className="relative z-10 flex flex-col items-center gap-8 min-h-screen mt-8 pt-8">
    <div className="bg-zinc-900 bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-2xl m-4">
      <h1 className="font-black text-3xl text-amber-300 mix-blend-hard-light opacity-90">many other things</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="bg-zinc-900 bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-2xl m-4">
      <h1 className="font-black text-3xl text-amber-300 mix-blend-hard-light opacity-90">and more</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="bg-zinc-900 bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-2xl m-4">
      <h1 className="font-black text-3xl text-amber-300 mix-blend-hard-light opacity-90">and more</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</main>
  );
}