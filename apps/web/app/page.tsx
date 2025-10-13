"use client";

import { Doto, Pattaya, Rubik_Mono_One } from "next/font/google";
import localFont from "next/font/local";
import "tldraw/tldraw.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const maisonNeue = localFont({
  src: "./fonts/MaisonNeue-Black.woff",
  variable: "--font-MaisonNeue",
});

const rubikMonoOne = Rubik_Mono_One({
  variable: "--font-rubik-mono-one",
  weight: "400",
});

const londrina = Pattaya({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div
      className={`${doto.variable} ${maisonNeue.variable} ${rubikMonoOne.variable} ${londrina.variable} /bg-[rgb(2,2,28)] /bg-linear-60 from bg-[rgb(20,20,20)] grid h-dvh grid-cols-[auto_1fr] /bg-[rgb(20,20,255)] from-[rgb(20,20,20)] from-70% to-[rgb(2,2,28)] p-4 antialiased`}
    >
      <Sidebar />
      <Content />
    </div>
  );
}
