import {
  DashboardOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={"/"}
        onClick={({ key }) => {
          if (key === "logout") {
            // handle logout here
          } else {
            navigate(key);
          }
        }}
        items={[
          { label: "Dashboard", key: "/", icon: <DashboardOutlined /> },
          {
            label: "Maternal MFL",
            key: "/maternal",
            icon: <UnorderedListOutlined />,
          },

          {
            label: "Non-Communicable MFL",
            key: "/ncd",
            icon: <UnorderedListOutlined />,
          },

          {
            label: "Logout",
            key: "logout",
            icon: <PoweroffOutlined />,
            danger: true,
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
