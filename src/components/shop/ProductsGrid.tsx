
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    name: "Camiseta Eco-Algodón",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500",
    isEco: true,
    ecoReason: "Fabricada con algodón 100% orgánico y teñida con tintes naturales.",
  },
  {
    id: "2",
    name: "Jeans Reciclados",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500",
    isEco: true,
    ecoReason: "Elaborados con algodón reciclado y procesos que ahorran un 80% de agua.",
  },
  {
    id: "3",
    name: "Hoodie de Bambú",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=500",
    isEco: true,
    ecoReason: "Hecho con fibras de bambú sostenible, biodegradable y cultivado sin pesticidas.",
  },
  {
    id: "4",
    name: "Chaqueta Local",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500",
    isEco: true,
    ecoReason: "Fabricada localmente reduciendo la huella de carbono por transporte.",
  },
  {
    id: "5",
    name: "Vestido de Lino",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500",
    isEco: true,
    ecoReason: "El lino es una de las fibras más sostenibles, requiere poca agua y pesticidas.",
  },
  {
    id: "6",
    name: "Zapatillas Veganas",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500",
    isEco: true,
    ecoReason: "Fabricadas con materiales 100% veganos y suelas de caucho reciclado.",
  },
];

const ProductsGrid = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<typeof sampleProducts>([]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products-section">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Nuestra Colección Sostenible
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, index) => <ProductSkeleton key={index} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
