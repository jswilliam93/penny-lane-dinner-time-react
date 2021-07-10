import { Layout, Menu, Breadcrumb } from "antd";

import "./App.css";
import Recipes from "./Components/Recipes";

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
            <Menu.Item key="0">Penny Lane Dinner Time</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} />
          <div className="site-layout-content">
            <Recipes />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Penny Lane ©2021 Created by Joseph William
        </Footer>
      </Layout>
      ,
    </div>
  );
}

export default App;
