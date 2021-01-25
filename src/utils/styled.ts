import styled from "styled-components";
import { SPACE } from "../constants/styles";
import { Space } from "../types/styles";

type LayoutProps = {
  centered?: boolean;
};

export const FlexRow = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  align-items: ${({ centered }) => (centered ? "center" : "initial")};
`;

export const FlexColumn = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ centered }) => (centered ? "center" : "initial")};
`;

type IconProps = {
  size: Space;
  marginRight?: Space;
};
export const Icon = styled.i<IconProps>`
  font-family: "FontAwesome";
  font-style: normal;
  font-size: ${({ size }) => SPACE[size]}px;
  margin-right: ${({ marginRight }) =>
    marginRight ? SPACE[marginRight] + "px" : "auto"};
`;

type SpacerProps = {
  size: Space;
  horizontal?: boolean;
};
export const Spacer = styled.div<SpacerProps>`
  ${({ horizontal, size }) =>
    horizontal ? `width: ${SPACE[size]}px;` : `height: ${SPACE[size]}px;`};
`;
