import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
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
          // defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
          >
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<VideoCameraOutlined />}
          >
            <Link href="/about">About</Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UploadOutlined />}
          >
            <Link href="/books-list">
              Books List
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<UserOutlined />}
          >
            <Link href="/throws-404">Nowhere</Link>
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
