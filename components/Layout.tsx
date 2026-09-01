import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import ScrollProgress from "./ScrollProgress";
import { contentEn as content } from "../src/data";

// Setup High-Precision DeepTech Typography Stack
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic"],
  weight: ["400", "500", "600"],
});

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-primary text-white font-sans ${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
    >
      {/* kinetic scroll progress indicator */}
      <ScrollProgress />

      {/* metadata */}
      <Head>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.description} />
        <meta name="keywords" content={content.seo.keywords.join(", ")} />
        <meta name="author" content="Hassan Zaki" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
