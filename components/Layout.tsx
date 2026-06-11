import React from "react";
import { Sora } from "next/font/google";
import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import { contentEn as content } from "../src/data";
// setup fonts
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`relative min-h-screen w-full bg-primary text-white font-sans ${sora.variable}`}
    >
      {/* metadata */}
      <Head>
        <title>{content.seo.title}</title>
        <meta
          name="description"
          content={content.seo.description}
        />
        <meta
          name="keywords"
          content={content.seo.keywords.join(", ")}
        />
        <meta name="author" content="Hassan Zaki" />
        <meta name="theme-color" content="#FBBF24" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {/* main content */}
      {children}
    </div>
  );
};
export default Layout;
