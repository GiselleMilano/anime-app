export default interface Anime {
  id: number | null;
  name: string;
  description: string | null;
  status: number;
  categories: number[];
}
