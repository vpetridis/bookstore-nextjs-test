import React, { useState } from "react"

import { List, Avatar, Space } from "antd"
import BookSingle from "../components/BookSingle"

const booksList = ({ posts }) => {
  const [size, setSize] = useState(10)
  return (
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: (page, pageSize) => {
          console.log(page, size)
          setSize(pageSize)
        },
        pageSize: size,
      }}
      dataSource={posts}
      footer={
        <div>
          <b>All books </b> for yourself...
        </div>
      }
      renderItem={(item) => (
        <BookSingle item={item} />
      )}
    />
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  )
  const posts = await res.json()
  return {
    props: { posts },
  }
}

export default booksList
