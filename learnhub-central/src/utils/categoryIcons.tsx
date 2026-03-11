import { Code2, Brain, Briefcase, Palette, LucideIcon } from "lucide-react";

export const categoryIcons: Record<string, LucideIcon> = {
  "Computer Science & IT": Code2,
  "Data Science & AI": Brain,
  "Business & Professional Skills": Briefcase,
  "Design & Creativity": Palette,
};

export const getCategoryIcon = (category: string): LucideIcon => {
  return categoryIcons[category] || Code2;
};
