import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";

import { Metadata } from "next";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabyasachi Mishra - Strategic Consultant & Leadership Coach",
  description:
    "Former CEO turned freelancer. I help businesses navigate growth challenges, build high-performing teams, and achieve sustainable success through strategic consulting and mentorship.",
  keywords: ["strategic consultant", "leadership coach", "business advisor", "executive coaching", "startup mentor"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://sabyasachi.com/",
  },
  openGraph: {
    title: "Sabyasachi Mishra - Strategic Consultant & Leadership Coach",
    description:
      "Former CEO turned freelancer. I help businesses navigate growth challenges and achieve sustainable success.",
    url: "https://sabyasachi.com/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sabyasachi Mishra - Strategic Consultant",
      },
    ],
    siteName: "Sabyasachi Mishra",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourname",
    creator: "@yourname",
    title: "Sabyasachi Mishra - Strategic Consultant & Leadership Coach",
    description:
      "Former CEO turned freelancer. I help businesses navigate growth challenges and achieve sustainable success.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <div className="isolate">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
