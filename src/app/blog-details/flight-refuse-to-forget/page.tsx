import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

export const metadata: Metadata = {
    title: "The Flight that I Refuse to Forget | Sabyasachi Mishra",
    description: "A personal saga of loss, delay, and humanity.",
};

const BlogDetailsPage = () => {
    return <BlogDetailsClient />;
};

export default BlogDetailsPage;
