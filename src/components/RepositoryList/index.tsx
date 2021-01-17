import { Repository } from "./../../types";
import RepositoryCard from "./../RepositoryCard";

type Props = {
  repositories: Repository[];
};

const RepositoryList = ({ repositories }: Props) => {
  return (
    <div>
      {repositories.map((repository) => (
        <RepositoryCard repository={repository} />
      ))}
    </div>
  );
};

export default RepositoryList;
