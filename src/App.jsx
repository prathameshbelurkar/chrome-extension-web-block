import styled from "styled-components";

import Header from "./components/header/Header";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 12px;
  text-transform: uppercase;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

function App() {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  );
}

export default App;
