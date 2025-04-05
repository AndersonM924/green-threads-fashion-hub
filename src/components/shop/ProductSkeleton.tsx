
import { Card } from "@/components/ui/card";

const ProductSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="h-64 shimmer animate-shimmer bg-gray-200 dark:bg-gray-700"></div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <div className="h-6 shimmer animate-shimmer bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-6 shimmer animate-shimmer bg-gray-200 dark:bg-gray-700 rounded w-1/5"></div>
        </div>
        <div className="h-4 shimmer animate-shimmer bg-gray-200 dark:bg-gray-700 rounded w-1/4 mt-2"></div>
        <div className="h-9 shimmer animate-shimmer bg-gray-200 dark:bg-gray-700 rounded w-full mt-4"></div>
      </div>
    </Card>
  );
};

export default ProductSkeleton;
