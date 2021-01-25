import React from "react";
import styled, { css } from "styled-components";

import { COLORS, SPACE } from "./../../constants/styles";

type TextType = "primary" | "secondary";

type TextCommonProps = {
  children: React.ReactNode;
  type?: TextType;
};

const commonCss = css<{ type?: TextType }>`
  color: ${({ type }) =>
    type !== "secondary" ? COLORS.TEXT.PRIMARY : COLORS.TEXT.SECONDARY};
`;

const StyledH3 = styled.div<{ type?: TextType }>`
  ${commonCss};
  font-size: ${SPACE.M}px;
  font-weight: bold;
`;
export const H3 = ({ children, type }: TextCommonProps) => {
  return <StyledH3 type={type}>{children}</StyledH3>;
};

const StyledSubtitle = styled.div<{ type?: TextType }>`
  ${commonCss}
  font-size: ${SPACE.S}px;
`;
export const Subtitle = ({ children, type }: TextCommonProps) => {
  return <StyledSubtitle type={type}>{children}</StyledSubtitle>;
};
