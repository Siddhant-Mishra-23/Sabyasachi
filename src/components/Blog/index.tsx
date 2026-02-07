"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Blog = () => {
  const [randomBlogs, setRandomBlogs] = useState<typeof blogData>([]);

  useEffect(() => {
    setRandomBlogs(
      [...blogData]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    );
  }, []);

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="Latest Blogs"
            paragraph="Thoughts on leadership, strategy, and building successful businesses."
            center
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {randomBlogs.map((blog) => (
            <motion.div key={blog.id} className="w-full" variants={itemVariants}>
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
