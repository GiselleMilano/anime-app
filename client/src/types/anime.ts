import Category from "./category";

export default interface Anime {
  id: number;
  name: string;
  description: string | null;
  status: number;
  categories: number[];
}
