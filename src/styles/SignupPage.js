import { Button, DatePicker } from "antd";
import styled from "styled-components";

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

export const StyledDatePicker = styled(DatePicker)`
  &&& {
    width: 100%;
  }
`;
