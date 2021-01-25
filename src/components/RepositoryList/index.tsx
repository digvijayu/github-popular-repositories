import styled from "styled-components";

import { Repository } from "./../../types";
import { MEDIA_QUERY, STANDARD_WIDTH } from "./../../constants/styles";
import RepositoryCard from "./../RepositoryCard";

type Props = {
  repositories: Repository[];
};

const RepositoryList = ({ repositories }: Props) => {
  return (
    <ListContainer>
      {repositories.map((repository) => (
        <RepositoryCard repository={repository} key={repository.id} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: auto;
  width: ${STANDARD_WIDTH.MEDIUM}px;
  ${MEDIA_QUERY.MOBILE} {
    width: 90%;
  }
`;

export default RepositoryList;
