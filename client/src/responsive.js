import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-device-width: 240px) and (max-device-width: 380px) {
      ${props}
    }
  `;
};
