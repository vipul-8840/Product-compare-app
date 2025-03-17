import React, { useState, createContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Typography, Avatar, Spin } from "antd";
import "antd/dist/reset.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export const ProductContext = createContext();

const ProductDetails = lazy(() => import("./components/ProductDetails"));
const CompareProducts = lazy(() => import("./components/CompareProducts"));

const App = () => {
  const [compareList, setCompareList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [menuKey, setMenuKey] = useState("1"); 

  const handleMenuClick = ({ key }) => {
    setMenuKey(key);
  };

  return (
    <ProductContext.Provider value={{ compareList, setCompareList, productList, setProductList }}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider theme="dark" style={{backgroundColor:"#282c34"}}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <Title level={4} style={{ color: "white" }}>
                My Product App
              </Title>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[menuKey]}
              onClick={handleMenuClick}
              style={{backgroundColor:"#282c34"}}
            >
              <Menu.Item key="1" style={{backgroundColor: menuKey === "1" ? "#383e4a" : "transparent"}}>
                <Link to="/">Product Details</Link>
              </Menu.Item>
              <Menu.Item key="2" style={{backgroundColor: menuKey === "2" ? "#383e4a" : "transparent"}}>
                <Link to="/compare">Compare Products</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#383e4a", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Title level={2} style={{ margin: 0, color:"white" }}>
                Product Comparison
              </Title>
              <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
            </Header>
            <Content style={{ margin: "20px", padding: "24px", background: "#f0f2f5", minHeight: 280 }}>
              <Suspense fallback={<div style={{textAlign:"center", marginTop:"50px"}}><Spin size="large"/></div>}>
                <Routes>
                  <Route path="/" element={<ProductDetails />} />
                  <Route path="/compare" element={<CompareProducts />} />
                </Routes>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;