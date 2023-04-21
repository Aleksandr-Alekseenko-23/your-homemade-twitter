import styled from "styled-components";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export const ImageGoBack = styled(KeyboardDoubleArrowLeftIcon)`
  color: rgb(92, 211, 168);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 5%;
  margin-bottom: 25px;
  background: none;
`;

export const TextButton = styled.span`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  color: rgb(92, 211, 168);
`;
