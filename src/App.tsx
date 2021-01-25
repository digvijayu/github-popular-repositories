import React, { useEffect, useState } from "react";

import RepositoryList from "./components/RepositoryList";
import FilterPanel from "./components/FilterPanel";
import { getTrendingRepositories } from "./apis/trendingRepositories";
import { Repository, Tabs } from "./types";
import useStarredRepositories from "./hooks/starredRepositories";

function App() {
  const [trendingRepositories, setTrendingRepositories] = useState<
    Repository[]
  >([]);

  const [activeTab, setActiveTab] = useState<Tabs>("popular");

  const [repositories] = useStarredRepositories();

  useEffect(() => {
    getTrendingRepositories().then((res) => {
      setTrendingRepositories(res.data.items);
    });
  }, [setTrendingRepositories]);

  return (
    <div className="App">
      <FilterPanel
        onActiveTabChange={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      />
      <RepositoryList
        repositories={
          activeTab === "popular" ? trendingRepositories : repositories
        }
      />
    </div>
  );
}

export default App;
