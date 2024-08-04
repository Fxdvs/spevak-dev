"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

export function DevGrid() {
  return (
    <div className="size-full grid grid-cols-2 grid-rows-7 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:grid-rows-5 lg:grid-rows-4 xl:grid-rows-3 w-[80%] gap-x-8 mt-10 gap-y-8">
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [251,146,60], // 400 orange
                [249,115,22], // 500 orange
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="html5"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          HTML5
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [56,189,2480], // 400 sky
                [14,165,233], // 500 sky
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="css3"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          CSS3
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [253,224,71], // 300 yellow
                [250,204,21], // 400 yellow
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="javascript"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          JavaScript
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [59,130,246], // 300 blue
                [37,99,235], // 400 blue
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="typescript"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          TypeScript
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [125,211,252], // 300 sky
                [56,189,248], // 400 sky
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="react"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          React
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [64,64,64], // 700 neutral
                [38,38,38], // 800 neutral
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="nextjs"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          Next.js
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [34,197,94], // 500 green
                [22,163,74], // 600 green
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="nodejs"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          NodeJS
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [167,139,250], // 400 violet
                [139,92,246], // 500 violet
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
          alt="php"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          PHP
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [163,163,163], // 400 neutral
                [115,115,115], // 500 neutral
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
          alt="wordpress"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          WordPress
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [125,211,252], // 300 sky
                [56,189,248], // 400 sky
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="tailwindcss"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          TailwindCSS
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [2,132,199], // 600 sky
                [3,105,161], // 700 sky
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          alt="mysql"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          MySQL
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [250,204,21], // 400 yellow
                [251,146,60], // 400 orange
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          alt="firebase"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          Firebase
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [250,204,21], // 400 yellow
                [59,130,246], // 500 blue
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="python"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          Python
        </h1>
      </div>
      <div className="bg-black flex items-center justify-center group">
        <AnimatePresence>
          <div className="h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-white dark:bg-black"
              colors={[
                [96,165,250], // 400 blue
                [59,130,246], // 500 blue
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        <Image
          className="absolute group-hover:-translate-y-5 transition-all duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
          alt="c"
          width={48}
          height={48}
        ></Image>
        <h1 className="absolute translate-y-10 opacity-0 group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300">
          C
        </h1>
      </div>
    </div>
  );
}
