"use client";
import { ReactNode } from "react";
import ThreeBackground from "../components/3DBackgound/ThreeBackground";
import CollectifTitle from "../components/CollectifTitle";
import {
  FramerTag,
  GitLabTag,
  I18nTag,
  KeycloakTag,
  NextTag,
  ReactQueryTag,
  SanityIOTag,
  SassTag,
  StrapiTag,
  ThreeTag,
  TldrawTag,
  TypeScriptTag,
} from "../components/tags/TechnologyTag";
import { Tldraw } from "tldraw";

export interface Section {
  id: string;
  title: ReactNode;
  image?: ReactNode;
  tags?: ReactNode;
  url?: string;
  githubUrl?: string;
  description?: string;
}

export const projects: Section[] = [
  {
    id: "sebkah-portfolio",
    url: "https://sebkah.com",
    tags: (
      <>
        <ThreeTag />
        <NextTag />
        <StrapiTag />
        <SassTag />
      </>
    ),
    title: (
      <h1 className="font-MaisonNeue sebkah-text text-7xl font-extrabold">
        Sebkah&apos;s Portfolio
      </h1>
    ),
    image: <ThreeBackground />,
    githubUrl: "https://github.com/Sebkah/sebkahnext",
  },
  {
    id: "collectif-99",
    url: "https://99degres.com",
    tags: (
      <>
        <NextTag />
        <SanityIOTag />
        <SassTag />
        <FramerTag />
      </>
    ),
    title: (
      <h1 className="font-rubik-mono-one text-7xl font-extrabold">
        Collectif 99°
      </h1>
    ),
    image: <CollectifTitle />,
    githubUrl: "https://github.com/Sebkah/99degresfront2023",
  },
  {
    id: "beink-dream",
    tags: (
      <>
        <NextTag />
        <ReactQueryTag />
        <KeycloakTag />
        <TldrawTag />
        <GitLabTag />
        <TypeScriptTag />
        <I18nTag />
      </>
    ),
    image: <Tldraw />,
    title: (
      <h1 className="font-londrina-sketch w-fit bg-gradient-to-r from-violet-500 to-green-600 bg-clip-text text-7xl font-bold text-transparent">
        Beink Dream
      </h1>
    ),
  },
];
