import { Url } from "./project";

export interface TechStacks {
  technologyStacks?: Stack[];
}
export interface Stack {
  title?: string;
  image?: Url;
}
