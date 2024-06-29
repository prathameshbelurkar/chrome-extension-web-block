import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

import App from "./App.jsx";

const StyledHtml = styled.html`
  width: 400px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ced4da;
  background-color: #495057;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledHtml>
      <App />
    </StyledHtml>
  </React.StrictMode>
);
