"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Left: Social Icons */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sabyasachi-mishra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-body-color hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="https://twitter.com/sabyasachi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-body-color hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/sabyasachi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-body-color hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* Blogger */}
            <a
              href="https://sabyasachi.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blogger"
              className="text-body-color hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.026 0H22c1.1 0 2 .9 2 2.026V22c0 1.1-.926 2-2.024 2zM12.023 5.2c-3.6 0-6.522 2.922-6.522 6.522v.12c0 .163-.012.326-.012.488 0 3.6 2.922 6.47 6.522 6.47h.012c3.6 0 6.522-2.87 6.522-6.47 0-.162 0-.325-.012-.488v-.12c0-3.6-2.922-6.522-6.522-6.522h.012zm3.37 8.978H8.618c-.7 0-1.268-.568-1.268-1.268s.568-1.268 1.268-1.268h6.775c.7 0 1.268.568 1.268 1.268s-.568 1.268-1.268 1.268zm-2.366-3.81H8.618c-.7 0-1.268-.568-1.268-1.268s.568-1.268 1.268-1.268h4.41c.7 0 1.268.568 1.268 1.268s-.568 1.268-1.268 1.268z" />
              </svg>
            </a>
            {/* Maps */}
            <a
              href="https://maps.app.goo.gl/kgHYwdT85VkVb5Tm9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maps"
              className="text-body-color hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:hello@sabyasachi.com"
              aria-label="Email"
              className="text-body-color hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Center: Name only */}
          <div className="flex flex-col items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              Sabyasachi Mishra
            </Link>
          </div>

          {/* Right: Quick Links (reordered: About before Services) */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/#about" className="text-body-color hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#features" className="text-body-color hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/blog" className="text-body-color hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link href="/#contact-info" className="text-body-color hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
