
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax-bg bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1518495973542-4542c06a5843")`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Moda Sostenible<br />para un Futuro Mejor
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Prendas eco-friendly que cuidan del planeta sin sacrificar estilo
        </p>
        <Button 
          onClick={() => window.location.href = "/shop"}
          className="px-8 py-6 text-lg group hover:scale-105 transition-transform duration-300 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Descubre la moda verde
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-indicator" onClick={scrollToProducts}>
        <ArrowDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
