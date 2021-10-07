import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  background: ${COLORS.transparentGray15};
  border: 2px solid transparent;
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 10px 0px;
  padding-left: 16px;
  width: fit-content;

  &:focus-within {
    border: 2px solid #4374cb;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
`;

const IconWrapper = styled(Icon)`
  display: inline-block;
  margin-left: 24px;
  margin-right: 18px;
  padding-top: 6px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        {displayedValue}
        <IconWrapper size="20" strokeWidth="2" id="chevron-down" />
      </Wrapper>
    </>
  );
};

export default Select;
