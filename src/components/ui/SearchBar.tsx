
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  isMobile?: boolean;
}

const SearchBar = ({ isMobile = false }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchFocus = () => {
    setIsExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsExpanded(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        if (!searchQuery) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchQuery]);

  const baseClasses = "relative flex items-center";
  const desktopClasses = isMobile
    ? "w-full"
    : `transition-all duration-300 ${
        isExpanded ? "w-64" : "w-10 cursor-pointer"
      }`;

  return (
    <div
      ref={searchRef}
      className={`${baseClasses} ${desktopClasses}`}
      onClick={() => !isExpanded && !isMobile && handleSearchFocus()}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search
          size={18}
          className="text-muted-foreground"
        />
      </div>
      <input
        type="text"
        className={`block pl-10 pr-8 py-2 border rounded-full bg-muted/40 hover:bg-muted/60 focus:bg-muted/80 focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all duration-300 ${
          isMobile ? "w-full" : isExpanded ? "opacity-100" : "opacity-0 cursor-pointer"
        }`}
        placeholder="Encuentra hoodies, jeans..."
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {(isExpanded || isMobile) && searchQuery && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
          onClick={handleClearSearch}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
