import React from "react";
import { PageHeader, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={true}
        title="To Dos"
        extra={[
          <Button key="1" type="primary" onClick={() => navigate("/ToDo/Add")}>
            Add Todo
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
}

export default Header;
