export interface ProjectsType {
  projects?: ProjectType[];
}
export interface ProjectType {
  name?: string;
  description?: string;
  iosLink?: string;
  androidLink?: string;
  webLink?: Websites;

  image?: Url;
}
export interface Websites {
  websites?: Website[];
}

export interface Website {
  url?: string;
  name?: string;
}
export interface Url {
  url?: string;
}
