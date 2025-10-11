"use client";

import {
  Doto,
  Londrina_Sketch,
  Pattaya,
  Plus_Jakarta_Sans,
  Praise,
  Rubik_Mono_One,
} from "next/font/google";
import localFont from "next/font/local";
import { title } from "process";
import ThreeBackground from "./components/3DBackgound/ThreeBackground";
import React, { ReactNode } from "react";
import {
  FramerTag,
  GitLabTag,
  KeycloakTag,
  NextTag,
  ReactQueryTag,
  SanityIOTag,
  SassTag,
  StrapiTag,
  ThreeTag,
  TldrawTag,
  TypeScriptTag,
} from "./components/tags/TechnologyTag";
import CollectifTitle from "./components/CollectifTitle";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

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

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const londrina = Pattaya({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div
      className={`h-dvh /bg-[rgb(2,2,28)]  bg-[rgb(20,20,20)]  /bg-[rgb(20,20,255)] /bg-linear-60  from-70% from-[rgb(20,20,20)] to-[rgb(2,2,28)] from  antialiased grid grid-cols-[auto_1fr] p-4`}
    >
      <aside className="tracking-tighter  text-white border-r-2 border-r-white p-8 flex h-full flex-col gap-1  items-start w-fit">
        <h1 className="font-doto text-3xl font-bold">Sébastien K. </h1>
        <h2 className="font-doto text-1xl font-semibold leading-0.5">
          Frontend Dev
        </h2>
      </aside>
      <main className="text-white flex flex-col gap-8 overflow-y-auto">
        <h1 className="font-doto text-3xl font-bold w-full border-b bg-[rgb(20,20,20)]   border-white p-8 pb-4 border-dashed sticky top-0  z-100">
          Portfolio
        </h1>
        <div className="px-8 grid gap-4">
          <Section
            url="https://sebkah.com"
            tags={
              <>
                <ThreeTag />
                <NextTag />
                <StrapiTag />
                <SassTag />
              </>
            }
            title={
              <h1 className="font-MaisonNeue font-extrabold text-7xl sebkah-text">
                Sebkah&apos;s Portfolio
              </h1>
            }
            image={<ThreeBackground />}
          />

          <Section
            url="https://99degrees.com"
            tags={
              <>
                <NextTag />
                <SanityIOTag />
                <SassTag />
                <FramerTag />
              </>
            }
            title={
              <h1 className="font-rubik-mono-one font-extrabold text-7xl ">
                Collectif 99°
              </h1>
            }
            image={<CollectifTitle />}
          />

          <Section
            tags={
              <>
                <NextTag />
                <ReactQueryTag />
                <KeycloakTag />

                <TldrawTag />
                <GitLabTag />
                <TypeScriptTag />
              </>
            }
            image={<Tldraw />}
            title={
              <h1 className="font-londrina-sketch font-bold text-7xl bg-gradient-to-r from-violet-500 to-green-600 bg-clip-text text-transparent w-fit">
                Beink Dream
              </h1>
            }
          />
        </div>
      </main>
    </div>
  );
}

type SectionProps = Readonly<{
  title: ReactNode;
  image?: ReactNode;
  tags?: ReactNode;
  url?: string;
}>;

const Section = ({ title, image, tags, url }: SectionProps) => {
  return (
    <section className="grid grid-cols-[1fr_1fr] gap-8 w-full border-b border-white/70 pb-8">
      <a
        className="aspect-[16/9] border-white rounded-xl overflow-hidden "
        href={url}
        target="_blank"
      >
        {image}
      </a>

      <div className="">
        <div className="py-4">{title}</div>
        {tags && <div className="flex gap-2">{tags}</div>}
        <div className="pt-4 text-white/90 leading-5 tracking-tight font-thin ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi unde
          accusantium ratione. Et esse, in inventore voluptatibus nam doloribus
          mollitia iure sint est. Rerum hic deleniti maxime laudantium nemo
          sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequatur dolor quidem ipsum in ab ipsam officia cumque adipisci
          eum, labore quo doloribus, soluta inventore perferendis? Blanditiis
          tenetur error facere culpa! Quos nihil nulla animi sed et temporibus
          aut, repudiandae optio, ex dolore ad id. <br></br>Tempore harum
          explicabo, odit nesciunt qui vero animi et eligendi blanditiis velit
          dolore incidunt optio modi! Odio sapiente expedita iste nesciunt fugit
          perferendis doloribus accusamus quo consequuntur est quia sit, ea
          veritatis, atque quibusdam, voluptates earum animi quidem accusantium
          officia dolores ipsam. Commodi harum neque labore. Ut optio culpa
          consectetur nesciunt quaerat quae, maxime blanditiis ad doloribus
          ducimus eveniet nemo dolore dolor at totam non magni dolorum
          praesentium esse! Sapiente minus voluptatibus eum doloribus at
          dolorum? Porro suscipit voluptates
        </div>
      </div>
    </section>
  );
};
