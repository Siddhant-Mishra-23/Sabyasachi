import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MasterAboutSection from "@/components/About/MasterAboutSection";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <MasterAboutSection />
      <Features />
      <Blog />
      <Contact />
    </>
  );
}
