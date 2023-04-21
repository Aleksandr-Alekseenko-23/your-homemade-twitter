import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageGoBack, Button, TextButton } from "./ButtonGoBack.styled";

const ButtonGoBack: React.FC = () => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <>
      <Button onClick={() => navigation(location?.state?.from ?? "/")}>
        <ImageGoBack />
        <TextButton>Go back</TextButton>
      </Button>
    </>
  );
};

export default ButtonGoBack;
