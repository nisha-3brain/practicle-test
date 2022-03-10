import { Row, Card, Col, Tabs } from "antd";
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

export const StyledTabs = styled(Tabs)`
  &&& {
    width: 25rem;
    text-align: center;
  }
`;
