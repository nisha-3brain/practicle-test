import { Row, Card, Col, Button, Form } from "antd";
import styled from "styled-components";
import { theme } from "../lib/constant";

export const StyledRow = styled(Row)`
  &&& {
    height: 100vh;
    background-color: ${theme.colors.OFFWHITE};
  }
`;

export const StyledCol = styled(Col)``;

export const StyledCard = styled(Card)`
  &&& {
    margin-left: 33%;
    margin-top: 5%;
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    width: 100%;
    border-radius: 5px;
  }
`;

export const StyledResetButton = styled(StyledButton)`
  &&& {
    margin-top: 10px;
  }
`;

export const StyledForm = styled(Form)`
  &&& {
    width: 25rem;
  }
`;
