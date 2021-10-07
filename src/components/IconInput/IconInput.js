import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const TextInput = styled.input`
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.label`
  display: "block";
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const STYLES = {
  small: {
    borderThickness: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24,
  },
  large: {
    borderThickness: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": style.iconSize + "px" }}>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <TextInput
        style={{
          "--font-size": style.fontSize + "px",
          "--border-thickness": style.borderThickness + "px",
          "--height": style.height + "px",
          width: width,
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

export default IconInput;
