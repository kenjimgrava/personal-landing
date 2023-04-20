import request from "graphql-request";
import useSWR from "swr";
import { ProjectsType } from "../@customTypes/project";
import { TechStacks } from "../@customTypes/stack";

export const getTechnologyStack = () => {
  const NEXT_PUBLIC_GRAPHCMS_URL: any =
    "https://api-ap-northeast-1.hygraph.com/v2/clgm6190k4l8z01tg8dvwhew0/master";
  const fetcher = (query: any) => request(NEXT_PUBLIC_GRAPHCMS_URL, query);

  const query = useSWR(
    `
      {
        technologyStacks(first: 20) {
            title
            image {
              url
            }
          }
      }
        `,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (query.data || {
    technologyStacks: [
      {
        name: "",
        image: { url: "" },
      },
    ],
  }) as TechStacks;
};

export const getProjects = () => {
  const NEXT_PUBLIC_GRAPHCMS_URL: any =
    "https://ap-northeast-1.cdn.hygraph.com/content/clgm6190k4l8z01tg8dvwhew0/master";
  const fetcher = (query: any) => request(NEXT_PUBLIC_GRAPHCMS_URL, query);

  const query = useSWR(
    `
      {
        projects {
          image {
            url
          }
          name
          webLink
          iosLink
          androidLink
          description
        }
      }
        `,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (query.data || {
    projects: [
      {
        name: "",
        androidLink: "",
        iosLink: "",
        description: "",
        webLink: { websites: [{ url: "", name: "" }] },
        images: { url: "" },
      },
    ],
  }) as ProjectsType;
};
