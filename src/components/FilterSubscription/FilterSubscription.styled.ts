import styled from "styled-components";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const StyledDropdownButton = styled(DropdownButton)`
  background-color: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  color: #333333;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #e5e5e5;
    color: #333333;
    border: none;
  }
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  background-color: #ffffff;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background-color: #f7f7f7;
    color: #333333;
  }
`;
