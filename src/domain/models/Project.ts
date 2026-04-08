export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  repo?: string;
  alt?: string;
  type?: "image" | "video";
  manualLanguages?: Record<string, number>;
}
