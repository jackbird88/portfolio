import Hero from "@/components/Hero";
import Quote1 from "@/components/Quote1";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote1 />
      <About />
      <Projects />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
