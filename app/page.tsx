"use client";
import * as React from "react";
import Navbar from "@/components/navbar";
import { Globe } from "@/components/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { DevGrid } from "@/components/devgrid";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Spotlight } from "@/components/ui/spotlight";
import Spline from "@splinetool/react-spline/next";
import { PulseBeams } from "@/components/ui/pulsebeam";

export default function Page() {
  const handleScroll = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const words = [
    {
      text: "Študent,",
    },
    {
      text: "Tvorca",
    },
    {
      text: "webových",
      className: "text-green-500 dark:text-green-500",
    },
    {
      text: "stránok,",
    },
    {
      text: "aplikácii",
    },
    {
      text: "a",
    },
    {
      text: "správca",
    },
    {
      text: "serverov",
    },
    {
      text: "a",
    },
    {
      text: "sieti.",
    },
  ];
  return (
    <>
      <SparklesCore
        id="1"
        background="transparent"
        minSize={0.4}
        maxSize={0.9}
        particleDensity={40}
        className="size-full absolute h-[3078px] -z-10"
        particleColor="#FFFFFF"
      />
      <section className="h-screen w-full flex flex-col items-center">
        <Navbar></Navbar>

        <div className="absolute ">
          <Globe></Globe>
        </div>
        <div className="h-screen w-full bg-white dark:bg-black absolute flex flex-col justify-center items-center bg-opacity-50 dark:bg-opacity-50 pt-3">
          <div className="flex justify-center items-center">
            <div className="size-16 bg-green-500 absolute rounded-full blur-2xl"></div>
            <h1 className="text-9xl font-whisper text-green-500">S</h1>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-black dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent">
            Ladislav Spevák
          </h1>
          <TypewriterEffectSmooth
            className="my-5 text-xs md:text-2xl lg:text-3xl xl:text-3xl font-semibold md:font-medium lg:font-medium xl:font-medium antialiased"
            words={words}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 animate-bounce mt-5 cursor-pointer text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-200"
            onClick={() => handleScroll("about")}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>

      <section className="h-min z-10 bg-gradient-to-b from-transparent to-75% to-white dark:to-black ">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center" id="about">
              <div className="flex justify-center items-center">
                <div className="bg-green-500 size-20 rounded-full blur-2xl absolute"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-24 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                </svg>
              </div>
              <h1 className="text-9xl font-bold text-black dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent">
                O mne
              </h1>
            </div>
          }
        >
          <div className="bg-grid-black/[0.15] dark:bg-grid-white/[0.05] size-full">
            <div className="size-full bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-transparent to-50% dark:to-70% to-white/80 dark:to-black/95 flex flex-col items-center justify-center">
              <h1 className="text-md md:text-2xl lg:text-2xl xl:text-2xl w-4/5 z-10 antialiased text-black dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent">
                Momentálne som študentom strednej priemyselnej školy
                elektrotechniky v Bratislave a vo voľnom čase sa venujem rôznym
                aspektom tvorby webových stránok, dizajnu a správe sietí. Mám
                pomerne široké spektrum skúseností, ktoré zahŕňajú programovanie
                v rôznych jazykoch, diagnostiku a navrhovanie efektívnych
                riešení pre technické problémy. Navyše som schopný individuálne
                prispôsobiť webové stránky a aplikácie podľa požiadavok a
                zároveň ponúknuť atraktívne a moderné dizajnové koncepty.
              </h1>
              <h1 className="text-3xl font-whisper mt-3 text-green-500">S</h1>
            </div>
          </div>
        </ContainerScroll>
      </section>
      <section className="bg-white dark:bg-black h-[150vh] md:h-[120vh] lg:h-[120vh] xl:h-[120vh] bg-grid-black/[0.08] dark:bg-grid-white/[0.03]">
        <div className="size-full bg-gradient-to-b from-white dark:from-black via-transparent dark:via-transparent to-white dark:to-black/95 flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-black dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent py-5">
            Technológie s ktorými pracujem
          </h1>
          <div className="h-[110vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] w-full flex justify-center">
            <DevGrid></DevGrid>
          </div>
        </div>
      </section>
      <section className="dark:bg-grid-white/[0.05]" id="my-work">
        <div className="bg-gradient-to-b from-white dark:from-black via-transparent dark:via-transparent to-white dark:to-black/95">
          <HeroParallax products={work} />
        </div>
      </section>
      <section
        className="h-[150vh] flex flex-col items-center justify-center bg-white dark:bg-transparent relative"
        id="contact"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <Spotlight
            className="mt-96 lg:left-72 xl:left-96 "
            fill="white"
          />
          <div className="w-3/6 h-3/6 dark:bg-grid-white/[0.05] absolute -z-10 bottom-1/2">
            <div className="size-full bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-transparent to-50% dark:to-70% to-white/80 dark:to-black"></div>
          </div>
          {/* <div className="h-96 w-96 bg-green-500/20 blur-3xl absolute bottom-0 rounded-full animate-pulse"></div> */}
          <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-black dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent py-0 md:py-2 lg:py-5 xl:py-5">
            Potrebujete webovú stránku?
          </h1>
          <h1 className="mt-3 text-xl md:text-2xl lg:text-2xl xl:text-2xl text-black dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent">
            Potrebujete navrhnúť počítačovú sieť alebo spravovať servery, alebo
            čokoľvek iné, čo súvisí s IT?
          </h1>
          <PulseBeams></PulseBeams>
        </div>
      </section>
      <footer className="flex flex-col items-center bg-white dark:bg-black dark:bg-grid-white/[0.008] bg-grid-black/[0.035]">
        <div className="w-full h-36 bg-gradient-to-b from-white dark:from-black from-50% to-transparent">
          <div className="w-[80%] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center mx-auto gap-y-8">
            <div className="flex gap-4 items-center">
              <h1 className="text-5xl font-whisper text-green-500">S</h1>
              <p className="xs:text-3xl text-md dark:bg-gradient-to-tr dark:from-neutral-400 dark:to-white dark:bg-clip-text dark:text-transparent font-semibold">
                &copy; 2024 Spevak.dev — Všetky práva vyhradené.
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <a href="https://www.instagram.com/___spevak___/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="size-5 text-neutral-900 hover:text-neutral-800 duration-200 transition-all cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
              <a href="https://github.com/Fxdvs " target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="size-5 text-neutral-900 hover:text-neutral-800 duration-200 transition-all cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a href="https://t.me/ls  pevak" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="size-5 text-neutral-900 hover:text-neutral-800 duration-200 transition-all cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-[4rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] bg-gradient-to-t bg-clip-text text-transparent from-white to-neutral-200 dark:from-black dark:to-neutral-950 cursor-default ">
          SPEVAK DEV
        </h1>
      </footer>
    </>
  );
}

export const work = [
  {
    title: "Ubytovanie Lozorno",
    link: "https://ubytovanielozorno.sk/",
    thumbnail:
      "/images/ul.png",
  },
  {
    title: "Peter Kolek Photography",
    link: "https://peterkolek.com/",
    thumbnail:
      "/images/pkp.png",
  },
  {
    title: "Až na Dno",
    link: "https://dasatoinak.sk/",
    thumbnail:
      "/images/aznd.png",
  },
]
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
