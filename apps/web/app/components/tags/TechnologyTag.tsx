import {
  SiNextdotjs,
  SiSanity,
  SiSass,
  SiStrapi,
  SiThreedotjs,
  SiKeycloak,
  SiTypescript,
  SiReactquery,
  SiGitlab,
  SiAxios,
  SiFramer,
  SiD3,
  SiTldraw,
  SiI18next,
} from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";

const size = 18;

export const TechnologyTag = ({
  tag,
  children,
}: {
  tag: ReactNode;
  children: ReactNode;
}) => {
  return (
    <span className="flex items-center gap-1 rounded-full border-2 border-white/70 px-2 py-2 text-sm tracking-tighter">
      {tag}
      {children}
    </span>
  );
};

export const I18nTag = () => {
  return (
    <TechnologyTag
      tag={<SiI18next title="i18next" size={size} color="white" />}
    >
      i18next
    </TechnologyTag>
  );
};

export const NextTag = () => {
  return (
    <TechnologyTag tag={<SiNextdotjs title="Next" size={size} />}>
      Next
    </TechnologyTag>
  );
};

export const ThreeTag = () => {
  return (
    <TechnologyTag
      tag={<SiThreedotjs title="Three.js" size={size} color="white" />}
    >
      Three
    </TechnologyTag>
  );
};

export const SanityIOTag = () => {
  return (
    <TechnologyTag tag={<SiSanity title="Sanity.io" size={size} />}>
      Sanity.io
    </TechnologyTag>
  );
};

export const StrapiTag = () => {
  return (
    <TechnologyTag tag={<SiStrapi title="Strapi" size={size} />}>
      Strapi
    </TechnologyTag>
  );
};

export const SassTag = () => {
  return (
    <TechnologyTag tag={<SiSass title="Sass" size={size} />}>
      Sass
    </TechnologyTag>
  );
};

export const KeycloakTag = () => {
  return (
    <TechnologyTag tag={<SiKeycloak title="Keycloak" size={size} />}>
      Keycloak
    </TechnologyTag>
  );
};

export const TypeScriptTag = () => {
  return (
    <TechnologyTag tag={<SiTypescript title="TypeScript" size={size} />}>
      TypeScript
    </TechnologyTag>
  );
};

export const ReactQueryTag = () => {
  return (
    <TechnologyTag tag={<SiReactquery title="React Query" size={size} />}>
      React Query
    </TechnologyTag>
  );
};

export const GitLabTag = () => {
  return (
    <TechnologyTag tag={<SiGitlab title="GitLab" size={size} />}>
      GitLab
    </TechnologyTag>
  );
};

export const AxiosTag = () => {
  return (
    <TechnologyTag tag={<SiAxios title="Axios" size={size} />}>
      Axios
    </TechnologyTag>
  );
};

export const FramerTag = () => {
  return (
    <TechnologyTag tag={<SiFramer title="Framer Motion" size={size} />}>
      Framer Motion
    </TechnologyTag>
  );
};

export const TldrawTag = () => {
  return (
    <TechnologyTag tag={<SiTldraw title="tldraw" size={size} />}>
      tldraw
    </TechnologyTag>
  );
};

export const D3Tag = () => {
  return (
    <TechnologyTag tag={<SiD3 title="D3.js" size={size} />}>
      D3.js
    </TechnologyTag>
  );
};
