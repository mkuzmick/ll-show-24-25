"use client"

import Head from "next/head";
import Draggable from "react-draggable";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>Next.js Tailwind Draggable Page</title>
        <meta name="description" content="A draggable page with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center space-y-8">
        <Draggable>
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-80 max-w-full cursor-move">
            <h2 className="text-2xl font-semibold">Rounded Rect 1</h2>
            <p>This is the first rounded rectangle with a drop shadow.</p>
          </div>
        </Draggable>
        
        <Draggable>
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-80 max-w-full cursor-move">
            <h2 className="text-2xl font-semibold">Rounded Rect 2</h2>
            <p>This is the second rounded rectangle with a drop shadow.</p>
          </div>
        </Draggable>
      </main>
    </div>
  );
}