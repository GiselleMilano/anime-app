import Category from "./category";

export default interface Anime {
  id: number;
  name: string;
  status: string;
  description: string | null;
  categories: Category[];
}
