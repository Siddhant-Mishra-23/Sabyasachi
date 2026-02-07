"use client";

import { motion } from "framer-motion";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Explore the Blogs by our team. We take pride in delivering exceptional solutions that drive success and innovation for our clients."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <motion.div
            className="-mx-4 flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogData.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8"
                variants={itemVariants}
                custom={index}
              >
                <SingleBlog blog={blog} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
