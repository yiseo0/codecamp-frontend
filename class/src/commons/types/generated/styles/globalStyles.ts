import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;
