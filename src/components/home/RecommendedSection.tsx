
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../shop/ProductCard";
import { Button } from "@/components/ui/button";

// Sample recommended products
const recommendedProducts = [
  {
    id: "7",
    name: "Suéter de Alpaca",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500",
    isEco: true,
    ecoReason: "La alpaca es una fibra natural que requiere menos agua que otras y es muy duradera.",
  },
  {
    id: "8",
    name: "Pantalones de Cáñamo",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1509551388413-e18d05f56b06?q=80&w=500",
    isEco: true,
    ecoReason: "El cáñamo requiere menos pesticidas y agua que el algodón convencional.",
  },
  {
    id: "9",
    name: "Chaqueta de Algodón Orgánico",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=500",
    isEco: true,
    ecoReason: "Cultivado sin químicos nocivos y con prácticas que mantienen la salud del suelo.",
  },
  {
    id: "10",
    name: "Top de Tencel",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500",
    isEco: true,
    ecoReason: "El Tencel se fabrica en un sistema de circuito cerrado que reutiliza el 99% del agua y solventes.",
  },
];

const RecommendedSection = () => {
  const [activeTab, setActiveTab] = useState("highly");
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Para Ti
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveTab("highly")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === "highly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent hover:bg-muted"
              }`}
            >
              ✅ Altamente Recomendado
            </button>
            <button
              onClick={() => setActiveTab("recommended")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === "recommended"
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent hover:bg-muted"
              }`}
            >
              🔹 Recomendado
            </button>
          </div>
        </div>

        <div className="relative">
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 shadow-md opacity-80 hover:opacity-100 md:flex hidden"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={20} />
          </Button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 py-4 px-1 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {recommendedProducts.map((product) => (
              <div key={product.id} className="min-w-[280px] max-w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 shadow-md opacity-80 hover:opacity-100 md:flex hidden"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
