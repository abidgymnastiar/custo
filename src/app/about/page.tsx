import About from "@/components/about/about";
import AboutBlog from "@/components/about/blog";
import AboutHero from "@/components/about/hero";
import AboutQuote from "@/components/about/quote";
import AboutTeam from "@/components/about/team";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <About />
      <AboutQuote />
      <AboutTeam />
      <AboutBlog />
    </div>
  );
}
