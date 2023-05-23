import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    font-size: 30px;
    box-sizing: border-box;

    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;
