
import { useState } from "react";
import { Leaf, Droplet, Globe } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  category: string;
}

const FilterChips = () => {
  // Initial filters data
  const filterOptions: FilterOption[] = [
    { id: "organic", label: "Orgánico", icon: <Leaf size={16} />, category: "material" },
    { id: "recycled", label: "Reciclado", icon: <Leaf size={16} />, category: "material" },
    { id: "bamboo", label: "Bambú", icon: <Leaf size={16} />, category: "material" },
    { id: "low", label: "Huella Baja", icon: <Droplet size={16} />, category: "waterprint" },
    { id: "med", label: "Huella Media", icon: <Droplet size={16} />, category: "waterprint" },
    { id: "local", label: "Local", icon: <Globe size={16} />, category: "origin" },
    { id: "imported", label: "Importado", icon: <Globe size={16} />, category: "origin" },
  ];

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (id: string) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  return (
    <div className="w-full py-4">
      <h3 className="text-lg font-medium mb-3">Filtros Sostenibles</h3>
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => toggleFilter(option.id)}
            className={`eco-chip inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
              selectedFilters.includes(option.id)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border hover:border-primary/50"
            }`}
          >
            {option.icon && <span className="mr-1.5">{option.icon}</span>}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterChips;
