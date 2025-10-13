import { projects } from "../data/projects";
import Section from "./Section";

/**
 * Content component for the portfolio
 * Displays the main content area with portfolio sections
 */
const Content = () => {
  return (
    <main className="flex flex-col gap-8 overflow-y-auto text-white">
      <h1 className="font-doto z-100 sticky top-0 w-full border-b border-dashed border-white bg-[rgb(20,20,20)] p-8 pb-4 text-3xl font-bold">
        Portfolio
      </h1>
      <div className="grid gap-4 px-8">
        {projects.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            image={section.image}
            tags={section.tags}
            url={section.url}
            githubUrl={section.githubUrl}
            id={section.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Content;
