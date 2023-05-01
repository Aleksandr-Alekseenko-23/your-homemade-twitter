import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const Text = styled.span`
  position: absolute;
  top: 150px;
  left: 385px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 22px;
  text-transform: uppercase;
  color: #4611ba;
`;

export const Wrapper = styled.div`
  background-color: #1ca2eb;
  background-image: url(${background});
  width: 698px;
  height: 620px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
