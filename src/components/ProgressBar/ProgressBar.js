/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
  background: rgba(128, 128, 128, 0.15);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
  border-radius: 4px 0px 0px 4px;
`;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const restrictedValue = React.useMemo(() => {
    if (!value) {
      return 0;
    }
    return value > 100 ? 100 : value;
  }, [value]);
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuenow={restrictedValue}
      aria-valuemax="100"
      style={{
        "--radius": STYLES[size].radius + "px",
        "--padding": STYLES[size].padding + "px",
      }}
    >
      <BarWrapper>
        <Bar
          style={{
            "--width": `${restrictedValue}%`,
            "--height": STYLES[size].height + "px",
          }}
        />
      </BarWrapper>
      <VisuallyHidden>{restrictedValue} %</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
