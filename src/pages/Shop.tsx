
import MainLayout from "@/components/layout/MainLayout";
import FilterChips from "@/components/shop/FilterChips";
import ProductsGrid from "@/components/shop/ProductsGrid";

const Shop = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tienda</h1>
          <p className="text-muted-foreground">
            Explora nuestra colección de moda sostenible, diseñada para minimizar
            el impacto ambiental sin comprometer el estilo.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <FilterChips />
      </div>
      <ProductsGrid />
    </MainLayout>
  );
};

export default Shop;
