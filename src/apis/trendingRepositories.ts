import axios, { AxiosResponse } from "axios";

import { GithubApiResponse } from "./../types";

export const getTrendingRepositories = (): Promise<
  AxiosResponse<GithubApiResponse>
> => axios.get("https://api.github.com/search/repositories?q=created:");
