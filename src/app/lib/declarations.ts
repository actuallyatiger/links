import { IconType } from "react-icons";

export type TileSet = {
  title: string;
  tiles: Tile[];
};

export type Tile = {
  name: string;
  url: string;
  icon: IconType;
};
