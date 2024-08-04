"use client";
import * as React from "react";
import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";

export default function Navbar() {
  const handleScroll = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  return (
    <div className="bg-neutral-100/50 dark:bg-neutral-950/30 h-[55px] w-4/4 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 rounded-xl flex justify-between items-center px-5 z-20 mt-3">
      <Link href="" className="font-whisper text-green-500 text-4xl hidden sm:block md:block lg:block xl:block">S</Link>
      <div className="flex justify-center gap-x-16 font-semibold text-md">
        <a className="cursor-pointer text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-200 transition-all duration-200" onClick={() => handleScroll('about')}>O mne</a>
        <a className="cursor-pointer text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-200 transition-all duration-200" onClick={() => handleScroll('my-work')}>Moja práca</a>
        <a className="cursor-pointer text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-200 transition-all duration-200" onClick={() => handleScroll('contact')}>Kontakt</a>
      </div>
      <ThemeToggler></ThemeToggler>
    </div>
  );
}
