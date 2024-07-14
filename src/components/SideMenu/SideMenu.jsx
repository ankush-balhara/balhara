import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "inventory",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/Orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/Customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
