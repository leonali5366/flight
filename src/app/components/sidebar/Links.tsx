import { motion } from "framer-motion";
import { slide } from "./anime";
import Link from "next/link";

export default function Links({ data }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href}>
        <button className="text-white max-md:text-xl">{title}</button>
      </Link>
    </motion.div>
  );
}
