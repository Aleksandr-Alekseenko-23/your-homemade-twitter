import styled from "styled-components";
import { DropdownButton as BootstrapDropdownButton } from "react-bootstrap";
import { Dropdown as BootstrapDropdown } from "react-bootstrap";

export const StyledDropdownButton = styled(BootstrapDropdownButton)`
  background-color: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  color: red;
  fill: red;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #e5e5e5;
    color: green;
    border: none;
  }
`;

export const StyledDropdownItem = styled(BootstrapDropdown.Item)`
  background-color: #ffffff;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background-color: #f7f7f7;
    color: #333333;
  }
`;
