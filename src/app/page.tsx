import BigText from "@/components/BigText";
import BackgroundVideo from "@/components/elements/BackgroundVideo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <BackgroundVideo webmVideoPath="/videos/background-1.webm">
        {/* Container to hold the title and text */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="font-black text-9xl text-amber-300 mix-blend-hard-light opacity-80">
            ll show
          </h1>
          
          {/* Paragraph */}
          <div className="mx-auto">
            <p className="font-medium text-amber-300 mix-blend-hard-light opacity-80">
              scroll down to see all the things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor eum debitis quia sit, itaque temporibus, nobis laudantium non id aperiam ut eveniet alias eos hic ex sapiente nostrum iure?
            </p>
            <p className="font-medium text-amber-300 mix-blend-hard-light opacity-80">
              scroll down to see all the things.
            </p>
            <div className="opacity-45 bg-red-600 h-6 w-10 ">/</div>
          </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div class="bg-red-800 bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-2xl">
            <h1 class="text-3xl font-bold mb-4 opacity-90">Translucent Overlay</h1>
            <p class="text-lg opacity-90">This is a slightly opaque translucent window on top of a looping video background.</p>
        </div>
    </div>
      </BackgroundVideo>
    
      <div className="mt-8 text-center">
        <h1>links below</h1>
        <p>links links</p>
      </div>
    </main>
  );
}