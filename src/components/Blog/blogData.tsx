import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Vibrant Lady in Seat 1E",
    paragraph:
      "We all travel for work but sometimes the travel becomes much more interesting and sometimes enlightening...",
    image: "/images/blog/Project-01.png",
    href: "/blog-details/vibrant-lady-seat-1e",
    author: {
      name: "Sabyasachi Mishra",
      image: "/images/blog/sabyasachi_blogpic.jpeg",
      designation: "Strategic Consultant",
    },
    tags: ["Travel", "Life Lessons"],
    publishDate: "Oct 18, 2024",
  },
  {
    id: 2,
    title: "The Flight that I Refuse to Forget",
    paragraph:
      "Tall, thin, always tucked in with cotton formal clothes, simple yet graceful, was the characteristic of that Man !!",
    image: "/images/blog/Project-02.jpg",
    href: "/blog-details/flight-refuse-to-forget",
    author: {
      name: "Sabyasachi Mishra",
      image: "/images/blog/sabyasachi_blogpic.jpeg",
      designation: "Personal",
    },
    tags: ["Personal", "Family"],
    publishDate: "Oct 18, 2024",
  },
  {
    id: 3,
    title: "Came to the World Crying..",
    paragraph:
      "I came to the world crying but I promise, would go out rejoicing !!",
    image: "/images/blog/Project-03.jpg",
    href: "/blog-details/came-to-world-crying",
    author: {
      name: "Sabyasachi Mishra",
      image: "/images/blog/sabyasachi_blogpic.jpeg",
      designation: "Philosophy",
    },
    tags: ["Philosophy", "Happiness"],
    publishDate: "Oct 21, 2024",
  },
  {
    id: 4,
    title: "Forgiveness Unlimited",
    paragraph:
      "A quiet village near Konark, Odisha full of neighbourhood and green cover...",
    image: "/images/blog/Project-01.png",
    href: "/blog-details/forgiveness-unlimited",
    author: {
      name: "Sabyasachi Mishra",
      image: "/images/blog/sabyasachi_blogpic.jpeg",
      designation: "Personal",
    },
    tags: ["Personal", "Tribute"],
    publishDate: "Dec 10, 2024",
  },
];

export default blogData;
