import { Button, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
export default function Navbar() {
  const [active, setActive] = useState(true);
  const [sceenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (sceenSize < 768) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [sceenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src="/crypto.jpg" size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoControl </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActive(!active)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {active && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}
