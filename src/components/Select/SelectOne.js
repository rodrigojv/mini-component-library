import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const IconWrapper = styled(Icon)`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 12px;
  margin-right: 16px;
`;

const StyledSelect = styled.select`
  /** reset */
  border: none;
  margin: 0;
  appearance: none;

  position: relative;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  /* display: block; */
  /* width: var(--displayValueWidth); */
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <IconWrapper size="16" strokeWidth="2" id="chevron-down" />
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
