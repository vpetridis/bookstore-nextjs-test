import React from "react"

import { Layout, Menu, Typography } from "antd"
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"

import styles from "../styles/Layout.module.css"

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography
const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
        >
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
          >
            nav 1
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<VideoCameraOutlined />}
          >
            nav 2
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UploadOutlined />}
          >
            nav 3
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<UserOutlined />}
          >
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <Title
            level={3}
            className={styles.title}
          >
            Bookstore w/ NextJs
          </Title>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Vasiles Petrides ©2021 Created w/ Ant &
          NextJs
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
