import { Repository } from "./../../types";

type Props = {
  repository: Repository;
};

const GithubCard = ({ repository }: Props) => {
  return <div>{repository.full_name}</div>;
};

export default GithubCard;
