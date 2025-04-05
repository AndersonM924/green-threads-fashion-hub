
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FilterChips from "@/components/shop/FilterChips";
import ProductsGrid from "@/components/shop/ProductsGrid";
import RecommendedSection from "@/components/home/RecommendedSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <FilterChips />
      </div>
      <ProductsGrid />
      <RecommendedSection />
    </MainLayout>
  );
};

export default Index;
