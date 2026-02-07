import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

export const metadata: Metadata = {
    title: "Forgiveness Unlimited | Sabyasachi Mishra",
    description: "A tribute to forgiveness and resilience.",
};

const BlogDetailsPage = () => {
    return <BlogDetailsClient />;
};

export default BlogDetailsPage;
