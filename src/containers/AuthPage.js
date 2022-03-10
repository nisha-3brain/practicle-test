import React, { useEffect } from "react";
import { Tabs } from "antd";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  StyledCard,
  StyledCol,
  StyledRow,
  StyledTabs,
} from "../styles/authPage";

function AuthPage() {
  const { TabPane } = Tabs;

  useEffect(() => {
    localStorage.removeItem("loggedIn");
  }, []);

  return (
    <>
      <StyledRow>
        <StyledCol span={24}>
          <StyledCard>
            <StyledTabs defaultActiveKey="1" centered>
              <TabPane tab="Log In" key="1">
                <Login />
              </TabPane>
              <TabPane tab="Sign Up" key="2">
                <SignUp />
              </TabPane>
            </StyledTabs>
          </StyledCard>
        </StyledCol>
      </StyledRow>
    </>
  );
}

export default AuthPage;
