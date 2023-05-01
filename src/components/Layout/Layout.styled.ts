import styled from "styled-components";
import { PropsStyledMain } from "../../utils/types/types";

export const Main = styled.main<PropsStyledMain>`
  ${(props) => {
    if (props.location === "") {
      return `
        background-color: #1ca2eb;
      `;
    } else if (props.location === "tweets") {
      return `
        background-color: #FFFFFF;
      `;
    } else {
      return `
        background-color: #1ca2eb;
      `;
    }
  }}
  flex: 1 1 auto;
`;
