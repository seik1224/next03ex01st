import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Section01 = () => {
  return (
    <div className="h-[800vh] relative bg-yellow-400">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas>
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 w-full h-[800vh] pointer-events-none">
        <div className="w-full h-[200vh] flex items-start justify-center pt-[10vh]">
          <h2 className="text-2xl font-bold">
            <img
              className="max-w-[600px] w-full px-10"
              src="/logo.svg"
              alt="로고"
            />
          </h2>
        </div>
        <div className="w-full h-[200vh] flex items-center justify-center"></div>
        <div className="w-full h-[200vh] flex items-center justify-center px-[30px]">
          <div className="w-[400px]"></div>
          <div className="w-[400px] text-left">
            <h2 className="text-2xl font-bold mb-4">Volt Tackle</h2>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs">위력</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index < 5 ? "bg-yellow-950" : "bg-gray-50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">PP</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index < 3 ? "bg-yellow-950" : "bg-gray-50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs">
              전기를 한데 모아 돌진한다. 자신도 대상에게 준 피해의 1/3만큼 반동
              피해를 받는다. 10% 확률로 상대를 마비 상태로 만든다.
            </p>
          </div>
        </div>
        <div className="w-full h-[200vh] flex items-center justify-center px-[30px]">
          <div className="w-[400px] text-left">
            <h2 className="text-2xl font-bold mb-4">Faint</h2>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs">위력</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index < 3 ? "bg-yellow-950" : "bg-gray-50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">PP</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index < 2 ? "bg-yellow-950" : "bg-gray-50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs">
              방어나 판별 등을 하고 있는 상대에게 공격할 수 있다. 방어 효과를
              해제시킨다.
            </p>
          </div>
          <div className="w-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Section01;

useGLTF.preload("/models/Pikachu.glb");
