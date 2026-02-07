"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import ThemeToggler from "../ThemeToggler";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleSticky = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  // Scroll spy for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "features", "contact-info"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/" && activeSection === "home";
    if (path === "/#about") return activeSection === "about";
    if (path === "/#features") return activeSection === "features";
    if (path === "/#contact-info") return activeSection === "contact-info";
    if (path === "/blog") return pathname.startsWith("/blog");
    return pathname === path;
  };

  return (
    <>
      {/* Desktop Floating Island Navigation */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block transition-all duration-300 ${sticky ? "top-4" : "top-6"
          }`}
      >
        <nav
          className={`flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${sticky
            ? "bg-white/90 shadow-lg"
            : "bg-white/70 shadow-md"
            }`}
        >
          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {menuData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors ${isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-primary/70 hover:text-primary"
                    }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggler */}
          <ThemeToggler />
        </nav>
      </header>

      {/* Mobile Floating Hamburger */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Mobile Menu"
          className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md transition-all duration-300 ${navbarOpen
            ? "bg-primary text-white"
            : "bg-white/90 shadow-lg text-primary"
            }`}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${navbarOpen ? "translate-y-[6px] rotate-45 bg-white" : "bg-primary"
                }`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${navbarOpen ? "opacity-0" : "bg-primary"
                }`}
            />
            <span
              className={`block h-0.5 w-5 transition-all duration-300 ${navbarOpen ? "-translate-y-[6px] -rotate-45 bg-white" : "bg-primary"
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Theme Toggler */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center">
          <ThemeToggler />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <nav
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${navbarOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setNavbarOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${navbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="pt-20 px-6">
            <ul className="flex flex-col space-y-6">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    onClick={() => setNavbarOpen(false)}
                    className={`block text-lg font-medium ${isActive(item.path)
                      ? "text-primary"
                      : "text-primary/80 hover:text-primary"
                      }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
