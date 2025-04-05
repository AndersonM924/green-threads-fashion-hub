
import { useState } from "react";
import { Info, ShoppingBag, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    isEco: boolean;
    ecoReason?: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="product-card bg-white dark:bg-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md group">
      {/* Product Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="product-card-overlay absolute inset-0 bg-black/40 flex items-center justify-center">
          <Button
            variant="secondary"
            className="bg-white/90 dark:bg-background/90 hover:bg-white dark:hover:bg-background"
          >
            Ver detalles
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg">{product.name}</h3>
          {product.isEco && (
            <div className="relative">
              <span
                className="eco-badge bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <Leaf size={12} />
                Eco-Friendly
              </span>
              {showTooltip && product.ecoReason && (
                <div className="absolute z-10 right-0 mt-1 p-2 bg-white dark:bg-muted border border-border rounded shadow-lg text-xs w-48 animate-fade-in">
                  {product.ecoReason}
                </div>
              )}
            </div>
          )}
        </div>
        <p className="text-muted-foreground my-2">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center mt-3">
          <Button size="sm" variant="outline" className="w-full flex items-center gap-2">
            <ShoppingBag size={16} />
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
