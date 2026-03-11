import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ExternalLink, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryIcon } from "@/utils/categoryIcons";

export interface Course {
  id: string;
  title: string;
  url: string;
  provider: string;
  category: string;
  subCategory: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  certificate: "Free" | "Paid" | "None";
}

interface CourseCardProps {
  course: Course;
}

const levelColors = {
  Beginner: "bg-success/20 text-success-foreground border-success/30",
  Intermediate: "bg-primary/20 text-primary-foreground border-primary/30",
  Advanced: "bg-accent/20 text-accent-foreground border-accent/30",
};

export function CourseCard({ course }: CourseCardProps) {
  const CategoryIcon = getCategoryIcon(course.category);
  
  return (
    <Card className="h-full flex flex-col bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10">
              <CategoryIcon className="h-4 w-4 text-primary" />
            </div>
            <Badge variant="outline" className="text-xs border-primary/30">
              {course.category}
            </Badge>
          </div>
          <Badge variant="outline" className={`text-xs ${levelColors[course.level]}`}>
            {course.level}
          </Badge>
        </div>
        <CardTitle className="text-xl line-clamp-2 font-semibold">{course.title}</CardTitle>
        <CardDescription className="text-sm flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5" />
          {course.provider}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {course.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-primary/60" />
            <span>{course.subCategory}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary/60" />
            <span>{course.duration}</span>
          </div>
          
          {course.certificate !== "None" && (
            <Badge variant="secondary" className="text-xs">
              Certificate: {course.certificate}
            </Badge>
          )}
        </div>

        <Button asChild className="w-full mt-auto">
          <a href={course.url} target="_blank" rel="noopener noreferrer">
            View Course
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
