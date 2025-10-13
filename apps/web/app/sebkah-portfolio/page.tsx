"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Portfolio() {
  const { title, tags, id } = projects[0];

  return (
    <div className="flex justify-end">
      <motion.div className="z-100 w-[40vw]" layoutId={id}>
        <div className="py-4">{title}</div>
        {tags && <div className="flex gap-2">{tags}</div>}
        <div className="pt-4 font-thin leading-5 tracking-tight text-white/90">
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
      </motion.div>
    </div>
  );
}
