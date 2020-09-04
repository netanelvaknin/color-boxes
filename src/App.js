import React from "react";
import "./App.css";
import styled from "styled-components/macro";

import colors from './colors';
import Box from "./components/box/Box";

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

function App() {
  const generateBgColor = () => {
    const randNumber = Math.floor(Math.random() * colors.length);
    return colors[randNumber];
  };

  return (
    <div className="App">
      <BoxContainer>
        {colors.map((color, index) => {
          return (
            <Box
              key={index}
              bgColor={generateBgColor()} // Generating random bg color every render
              genrateBackground={generateBgColor}
            />
          );
        })}
      </BoxContainer>
    </div>
  );
}

export default App;