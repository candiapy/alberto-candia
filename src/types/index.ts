export interface NavLink {
  label: string;
  href: string;
}

export interface TechItem {
  label: string;
  icon?: string;
  color?: string;
  category: string;
  categoryColor?: string;
  description: string;
  highlights?: string[];
}

export interface ExperienceItem {
  type: "work" | "education" | "self-taught";
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: number;
  status: "live" | "open-code";
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl: string;
}

export interface ContactInfo {
  type: "email" | "linkedin" | "github" | "phone";
  label: string;
  value: string;
  href: string;
  icon: string;
  color: string;
}