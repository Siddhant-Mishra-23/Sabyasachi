import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

export const metadata: Metadata = {
    title: "The Vibrant Lady in Seat 1E | Sabyasachi Mishra",
    description: "A chance encounter on a flight that turned into an enlightening conversation.",
};

const BlogDetailsPage = () => {
    return <BlogDetailsClient />;
};

export default BlogDetailsPage;
