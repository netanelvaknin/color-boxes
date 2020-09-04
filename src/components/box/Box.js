import React, { useState } from "react";
import styled from "styled-components/macro";

const BoxStyle = styled.div`
  width: calc(100% / 7);
  height: calc(100% / 3);
  background: ${({ bgColor }) => bgColor};
`;

const Box = ({ bgColor, genrateBackground }) => {
  const [color, setColor] = useState(bgColor);
  
  return (
    <BoxStyle bgColor={color} onClick={() => setColor(genrateBackground())} />
  );
};

export default Box;