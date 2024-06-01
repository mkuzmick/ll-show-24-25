"use client";

import Head from "next/head";
import { useState } from "react";
import DraggableBox from "@/components/boxes/DraggableBox";

export default function Home() {
  const [boxes, setBoxes] = useState([
    { id: 1, title: "Rounded Rect 1", content: "This is the first rounded rectangle with a drop shadow.", zIndex: 1 },
    { id: 2, title: "Rounded Rect 2", content: "This is the second rounded rectangle with a drop shadow.", zIndex: 2 },
  ]);

  const addBox = () => {
    const nextBoxNum = boxes.length + 1;
    const currentMaxZIndex = Math.max(...boxes.map(box => box.zIndex));
    const newBox = {
      id: nextBoxNum,
      title: `Rounded Rect ${nextBoxNum}`,
      content: `This is rounded rectangle number ${nextBoxNum}.`,
      zIndex: currentMaxZIndex + 1,
    };
    setBoxes([...boxes, newBox]);
  };

  const bringToFront = (id: number) => {
    setBoxes((prevBoxes) => {
      const currentMaxZIndex = Math.max(...prevBoxes.map(box => box.zIndex));
      return prevBoxes.map(box =>
        box.id === id ? { ...box, zIndex: currentMaxZIndex + 1 } : box
      );
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative" style={{ height: "100vh" }}>
      <Head>
        <title>Next.js Tailwind Draggable Page</title>
        <meta name="description" content="A draggable page with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        onClick={addBox}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add Draggable Box
      </button>

      <main className="flex items-center justify-center relative w-full h-full">
        {boxes.map((box) => (
          <DraggableBox
            key={box.id}
            title={box.title}
            content={box.content}
            zIndex={box.zIndex}
            onClick={() => bringToFront(box.id)}
          />
        ))}
      </main>
    </div>
  );
}