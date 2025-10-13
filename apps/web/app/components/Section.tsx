"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/components/navigation";

/**
 * Props for the Section component
 */
type SectionProps = Readonly<{
  /** Unique identifier for the section */
  id: string;
  /** Title content (can be JSX or text) */
  title: ReactNode;
  /** Optional image content */
  image?: ReactNode;
  /** Optional tags content */
  tags?: ReactNode;
  /** Optional URL for the main project link */
  url?: string;
  /** Optional GitHub repository URL */
  githubUrl?: string;
}>;

/**
 * Section component representing a portfolio project item
 * Displays project image, title, tags, description and action links
 */
const Section = ({ title, image, tags, url, githubUrl, id }: SectionProps) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="grid w-full grid-cols-[1fr_40vw] gap-8 border-b border-white/70 pb-8">
      {/* Project Image  */}
      <motion.a
        className="aspect-[16/9] overflow-hidden rounded-xl border-white"
        href={url}
        target="_blank"
      >
        {showImage && (
          <motion.div
            className="h-full w-full"
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {image}
          </motion.div>
        )}
      </motion.a>

      {/* HEADER */}
      <div className="flex flex-col justify-between">
        <motion.div className="flex flex-col gap-4" layoutId={id}>
          <div className="">
            <div className="py-4">{title}</div>
            {tags && <div className="flex gap-2">{tags}</div>}
            <div className="pt-4 font-thin leading-5 tracking-tight text-white/90">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              unde accusantium ratione. Et esse, in inventore voluptatibus nam
              doloribus mollitia iure sint est. Rerum hic deleniti maxime
              laudantium nemo sunt? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Consequatur dolor quidem ipsum in ab ipsam
              officia cumque adipisci eum, labore quo doloribus, soluta
              inventore perferendis? Blanditiis tenetur error facere culpa! Quos
              nihil nulla animi sed et temporibus aut, repudiandae optio, ex
              dolore ad id. <br></br>Tempore harum explicabo, odit nesciunt qui
              vero animi et eligendi blanditiis velit dolore incidunt optio
              modi! Odio sapiente expedita iste nesciunt fugit perferendis
              doloribus accusamus quo consequuntur est quia sit, ea veritatis,
              atque quibusdam, voluptates earum animi quidem accusantium officia
              dolores ipsam. Commodi harum neque labore. Ut optio culpa
              consectetur nesciunt quaerat quae, maxime blanditiis ad doloribus
              ducimus eveniet nemo dolore dolor at totam non magni dolorum
              praesentium esse! Sapiente minus voluptatibus eum doloribus at
              dolorum? Porro suscipit voluptates
            </div>
          </div>
        </motion.div>
        <div className="flex items-center gap-4 self-end">
          <Link
            className="flex w-fit items-center gap-1 rounded-full border-2 border-white/80 p-2 font-thin leading-5"
            href={id}
          >
            Voir
            <FontAwesomeIcon icon={faPlus} />
          </Link>
          {githubUrl && (
            <a className="" href={githubUrl} target="_blank">
              <SiGithub size={38} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
