import { motion } from "framer-motion";
import { slide } from "./anime";
import Link from "next/link";

interface LinkData {
  title: string;
  href: string;
  index: number;
}

export default function Links({ data }: { data: LinkData }) {
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
