import { useEffect, useState } from "react";

import { Repository } from "./../types/index";

const STARRED_REPOSITORY_KEY = "STARRED_REPOSITORY_KEY";

function useStarredRepositories(): [Repository[], (rep: Repository) => void] {
  const [starredRepositories, setStarredRepository] = useState<Repository[]>(
    () => {
      try {
        const item = window.localStorage.getItem(STARRED_REPOSITORY_KEY);
        return item ? JSON.parse(item) : [];
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  );

  useEffect(() => {
    window.localStorage.setItem(
      STARRED_REPOSITORY_KEY,
      JSON.stringify(starredRepositories)
    );
  }, [starredRepositories]);

  const setToggleRepositoryStar = (repository: Repository) => {
    try {
      const index = starredRepositories.findIndex(
        (repo) => repo.id === repository.id
      );

      if (index >= 0) {
        setStarredRepository(starredRepositories.slice(index, index + 1));
      } else {
        setStarredRepository([...starredRepositories, repository]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [starredRepositories, setToggleRepositoryStar];
}

export default useStarredRepositories;
