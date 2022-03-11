import type Location from "./Location";
import type Episode from "./Episode";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  image: string;
  episode: Episode[];
  url: string;
  created: string;
};

export default Character;
