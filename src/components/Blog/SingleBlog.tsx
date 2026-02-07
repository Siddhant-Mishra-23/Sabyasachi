"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, href } = blog;

  return (
    <motion.div
      className="blog-card group shadow-one hover:shadow-two relative overflow-hidden rounded-lg bg-white"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href={href} className="relative block aspect-37/22 w-full overflow-hidden">
        <motion.span
          className="bg-accent absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {tags[0]}
        </motion.span>
        <motion.div
          className="blog-card-image relative h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </Link>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={href}
            className="hover:text-primary mb-4 block text-xl font-bold text-black transition-colors duration-300 sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium line-clamp-3">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <motion.div
                className="relative h-10 w-10 overflow-hidden rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={author.image} alt={author.name} fill className="object-cover" />
              </motion.div>
            </div>
            <div className="w-full">
              <h4 className="text-dark mb-1 text-sm font-medium">
                By {author.name}
              </h4>
              <p className="text-body-color text-xs">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="text-dark mb-1 text-sm font-medium">
              Date
            </h4>
            <p className="text-body-color text-xs">{publishDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleBlog;
