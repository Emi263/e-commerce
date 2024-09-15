import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Input, Switch } from "antd";

import "./header.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Header() {
  const themeContext = useContext(ThemeContext);

  function onChange(checked) {
    if (checked) {
      themeContext.setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      themeContext.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <header
      style={{
        backgroundColor: themeContext.theme === "light" ? "white" : "black",
        color: themeContext.theme === "light" ? "black" : "white",
      }}
    >
      <img src="/logo.png" />
      <Input style={{ width: 300, padding: 12 }} placeholder="Search for a product" allowClear />
      <Switch
        style={{
          background: themeContext.theme === "dark" ? "green" : "blue",
        }}
        checkedChildren={<SunOutlined />}
        unCheckedChildren={<MoonOutlined />}
        defaultChecked={themeContext.theme === "light"}
        onChange={onChange}
      />
    </header>
  );
}

export default Header;
