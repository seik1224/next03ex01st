import React from "react";
import { Canvas } from "@react-three/fiber";

const Section02 = () => {
  return (
    <section className="h-[300vh] relative ">
      <div className="sticky top-0 h-screen  w-full overflow-hidden">
        <Canvas>
          <ambientLight intensity={2} />
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 w-full h-[300vh] pointer-events-none">
        <div className="w-full h-screen flex items-center justify-center border-4 border-green-500 pt-[60vh]">
          <div className="flex flex-col justify-center items-center text-center max-w-[400px] px-4 pt-4 pb-6 rounded-3xl border border-green-300 bg-green-900 text-white">
            <h2 className="text-2xl font-bold mb-4">이상해씨</h2>
            <p className="mb-2 text-green-300">
              이상해씨 - 이상해풀 - 이상해꽃
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              velit quidem saepe dignissimos provident enim eligendi voluptates,
              quo id expedita,
            </p>
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center border-4 border-blue-500 pt-[60vh]">
          <div className="flex flex-col justify-center items-center text-center max-w-[400px] px-4 pt-4 pb-6 rounded-3xl border border-blue-300 bg-blue-950 text-white">
            <h2 className="text-2xl font-bold mb-4">꼬부기</h2>
            <p className="mb-2 text-blue-300">꼬부기 - 어니부기 - 거북왕</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              velit quidem saepe dignissimos provident enim eligendi voluptates,
              quo id expedita,
            </p>
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center border-4 border-red-500 pt-[60vh]">
          <div className="flex flex-col justify-center items-center text-center max-w-[400px] px-4 pt-4 pb-6 rounded-3xl border border-red-300 bg-red-950 text-white">
            <h2 className="text-2xl font-bold mb-4">파이리</h2>
            <p className="mb-2 text-red-300">파이리 - 리자드 - 리자몽</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              velit quidem saepe dignissimos provident enim eligendi voluptates,
              quo id expedita,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
