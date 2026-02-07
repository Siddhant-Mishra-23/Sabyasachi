import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

export const metadata: Metadata = {
    title: "Came to the World Crying.. | Sabyasachi Mishra",
    description: "Reflections on happiness as a state of mind.",
};

const BlogDetailsPage = () => {
    return <BlogDetailsClient />;
};

export default BlogDetailsPage;
