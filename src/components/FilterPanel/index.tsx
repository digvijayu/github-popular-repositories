import styled from "styled-components";

import { Tabs } from "../../types";
import { FlexRow } from "../../utils/styled";
import { SPACE, COLORS } from "../../constants/styles";

type Props = {
  activeTab: Tabs;
  onActiveTabChange: (newTab: Tabs) => void;
};

const FilterPanel = (props: Props) => {
  return (
    <FilterContainer>
      <FlexRow>
        <TabItem
          onClick={() => props.onActiveTabChange("popular")}
          isActive={props.activeTab === "popular"}
        >
          Popular
        </TabItem>
        <TabItem
          onClick={() => props.onActiveTabChange("starred")}
          isActive={props.activeTab === "starred"}
        >
          Starred
        </TabItem>
      </FlexRow>
    </FilterContainer>
  );
};

const TabItem = styled.div<{ isActive: boolean }>`
  padding: ${SPACE.S}px;
  ${({ isActive }) =>
    isActive
      ? `
        background-color: ${COLORS.BACKGROUND.ACTIVE};
        color: ${COLORS.TEXT.TERTIARY};
      `
      : `background-color: ${COLORS.BACKGROUND.INACTIVE};`}
  cursor: pointer;
`;

const FilterContainer = styled.div`
  background-color: #999;
  padding: 0 ${SPACE.S}px;
`;

export default FilterPanel;
