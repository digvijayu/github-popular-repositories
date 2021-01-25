import styled from "styled-components";

import { Repository } from "./../../types";
import { H3, Subtitle } from "./../Text";
import { SPACE, COLORS, BORDER_RADIUS } from "./../../constants/styles";
import { FlexRow, Icon, Spacer } from "../../utils/styled";
import useStarredRepositories from "./../../hooks/starredRepositories";

type Props = {
  repository: Repository;
};

const GithubCard = ({ repository }: Props) => {
  const [repositories, setToggleRepositoryStar] = useStarredRepositories();

  return (
    <Card>
      <LeftPanel>
        <FlexRow>
          <Icon className="far fa-cube" size="M" marginRight="XS" />
          <H3>{repository.full_name}</H3>
        </FlexRow>
        <Spacer size="XS" />
        <div>
          <Subtitle type="secondary">{repository.description}</Subtitle>
        </div>
        <Spacer size="XXS" />
        <FlexRow>
          <FlexRow centered title="Stargazers">
            <Icon className="far fa-star-o" size="S" marginRight="XXS" />
            <Subtitle type="secondary">{repository.stargazers_count}</Subtitle>
          </FlexRow>
          <Spacer size="S" horizontal />
          <FlexRow centered title="Forks count">
            <Icon className="far fa-copy" size="S" marginRight="XXS" />
            <Subtitle type="secondary">{repository.forks_count}</Subtitle>
          </FlexRow>
        </FlexRow>
      </LeftPanel>
      <Spacer size="S" />
      <StarButton
        title="Bookmarks for you in local storage"
        onClick={() => setToggleRepositoryStar(repository)}
      >
        <Icon
          className={
            repositories.findIndex((rep) => rep.id === repository.id) >= 0
              ? "far fa-star"
              : "far fa-star-o"
          }
          size="M"
          marginRight="XXS"
        />
        <Subtitle>Star</Subtitle>
      </StarButton>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid ${COLORS.BORDER};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${SPACE.M}px;
  margin: ${SPACE.M}px 0;
  border-radius: ${BORDER_RADIUS}px;
`;

const LeftPanel = styled.div`
  flex: 1;
`;

const StarButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${SPACE.XXS}px;
`;

export default GithubCard;
