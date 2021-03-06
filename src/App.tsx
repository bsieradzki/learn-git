/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Header } from "./Header";
import { HomePage } from "./HomePage";

function App() {
  return (
    <div
      css={css`
        font-family: "Segoe UI", "Helvetica Neue", "sans-serif";
        font-size: 26px;
        color: #5c5a5a;
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
