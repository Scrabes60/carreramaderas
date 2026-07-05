import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Categories from "./sections/Categories";
import WhyChoose from "./sections/WhyChoose";
import Process from "./sections/Process";
import Brands from "./sections/Brands";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Categories />
      <WhyChoose />
      <Process />
      <Brands />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}