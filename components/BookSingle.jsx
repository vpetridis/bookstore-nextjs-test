import React from "react"
import { List, Avatar, Space } from "antd"
import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons"
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
const BookSingle = ({ item }) => {
  return (
    <List.Item
      key={item.title}
      actions={[
        <IconText
          icon={StarOutlined}
          text="156"
          key="list-vertical-star-o"
        />,
        <IconText
          icon={LikeOutlined}
          text="156"
          key="list-vertical-like-o"
        />,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
      extra={
        <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      }
    >
      <List.Item.Meta
        //   avatar={<Avatar src={item.avatar} />}
        title={<h2>{item.title}</h2>}
        description={item.body}
      />
      {item.content}
    </List.Item>
  )
}

export default BookSingle
