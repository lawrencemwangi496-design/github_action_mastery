import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface FilterSectionProps {
  selectedCategory: string;
  selectedSubCategory: string;
  selectedLevel: string;
  selectedCertificate: string;
  selectedProvider: string;
  onCategoryChange: (value: string) => void;
  onSubCategoryChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onCertificateChange: (value: string) => void;
  onProviderChange: (value: string) => void;
  onClearFilters: () => void;
  categories: string[];
  subCategories: string[];
  providers: string[];
}

export function FilterSection({
  selectedCategory,
  selectedSubCategory,
  selectedLevel,
  selectedCertificate,
  selectedProvider,
  onCategoryChange,
  onSubCategoryChange,
  onLevelChange,
  onCertificateChange,
  onProviderChange,
  onClearFilters,
  categories,
  subCategories,
  providers,
}: FilterSectionProps) {
  const hasActiveFilters = selectedCategory !== "all" || selectedSubCategory !== "all" || 
                          selectedLevel !== "all" || selectedCertificate !== "all" || selectedProvider !== "all";

  return (
    <div className="bg-gradient-card p-6 rounded-xl shadow-card mb-8 border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filter Courses</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="hover:bg-accent/20">
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Sub-Category</label>
          <Select value={selectedSubCategory} onValueChange={onSubCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Sub-Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sub-Categories</SelectItem>
              {subCategories.map((sub) => (
                <SelectItem key={sub} value={sub}>
                  {sub}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Level</label>
          <Select value={selectedLevel} onValueChange={onLevelChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Certificate</label>
          <Select value={selectedCertificate} onValueChange={onCertificateChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any Certificate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Certificate</SelectItem>
              <SelectItem value="Free">Free Certificate</SelectItem>
              <SelectItem value="Paid">Paid Certificate</SelectItem>
              <SelectItem value="None">No Certificate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Provider</label>
          <Select value={selectedProvider} onValueChange={onProviderChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              {providers.map((provider) => (
                <SelectItem key={provider} value={provider}>
                  {provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
