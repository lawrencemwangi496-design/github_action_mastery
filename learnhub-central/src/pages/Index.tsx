import { useState, useMemo } from "react";
import { CourseCard } from "@/components/CourseCard";
import { FilterSection } from "@/components/FilterSection";
import { coursesData } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCertificate, setSelectedCertificate] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState("all");

  // Extract unique values for filters
  const categories = useMemo(
    () => Array.from(new Set(coursesData.map((c) => c.category))),
    []
  );

  const subCategories = useMemo(() => {
    if (selectedCategory === "all") {
      return Array.from(new Set(coursesData.map((c) => c.subCategory)));
    }
    return Array.from(
      new Set(
        coursesData
          .filter((c) => c.category === selectedCategory)
          .map((c) => c.subCategory)
      )
    );
  }, [selectedCategory]);

  const providers = useMemo(
    () => Array.from(new Set(coursesData.map((c) => c.provider))).sort(),
    []
  );

  // Featured courses (first 3 with free certificates)
  const featuredCourses = useMemo(
    () => coursesData.filter((c) => c.certificate === "Free").slice(0, 3),
    []
  );

  // Filter courses based on all criteria
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subCategory.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      const matchesSubCategory =
        selectedSubCategory === "all" || course.subCategory === selectedSubCategory;

      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;

      const matchesCertificate =
        selectedCertificate === "all" || course.certificate === selectedCertificate;

      const matchesProvider =
        selectedProvider === "all" || course.provider === selectedProvider;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubCategory &&
        matchesLevel &&
        matchesCertificate &&
        matchesProvider
      );
    });
  }, [searchQuery, selectedCategory, selectedSubCategory, selectedLevel, selectedCertificate, selectedProvider]);

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedSubCategory("all");
    setSelectedLevel("all");
    setSelectedCertificate("all");
    setSelectedProvider("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-hero text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Free Course Directory
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover thousands of free online courses from top universities and institutions.
              Start learning today!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search courses, providers, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card text-foreground shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 py-12">
        {/* Featured Courses */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-6 w-6 text-accent fill-accent" />
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Badge variant="secondary" className="ml-2">Free Certificates</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <div key={course.id} className="shadow-featured rounded-xl">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <FilterSection
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          selectedLevel={selectedLevel}
          selectedCertificate={selectedCertificate}
          selectedProvider={selectedProvider}
          onCategoryChange={(val) => {
            setSelectedCategory(val);
            setSelectedSubCategory("all");
          }}
          onSubCategoryChange={setSelectedSubCategory}
          onLevelChange={setSelectedLevel}
          onCertificateChange={setSelectedCertificate}
          onProviderChange={setSelectedProvider}
          onClearFilters={handleClearFilters}
          categories={categories}
          subCategories={subCategories}
          providers={providers}
        />

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">
            {filteredCourses.length} {filteredCourses.length === 1 ? "Course" : "Courses"} Found
          </h2>
          {searchQuery && (
            <p className="text-muted-foreground mt-1">
              Showing results for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search query to find what you're looking for.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16 py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-muted-foreground">
          <p>© 2025 Free Course Directory. Empowering learners worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
