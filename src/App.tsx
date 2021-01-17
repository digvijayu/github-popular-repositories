import React, { useEffect, useState } from "react";

import RepositoryList from "./components/RepositoryList";
import { getTrendingRepositories } from "./apis/trendingRepositories";
import { Repository } from "./types";

function App() {
  const [trendingRepositories, setTrendingRepositories] = useState<
    Repository[]
  >([]);
  useEffect(() => {
    getTrendingRepositories().then((res) => {
      setTrendingRepositories(res.data.items);
    });
  }, [setTrendingRepositories]);

  return (
    <div className="App">
      <RepositoryList repositories={trendingRepositories} />
    </div>
  );
}

export default App;
