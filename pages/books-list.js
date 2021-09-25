import React from "react"
import axios from "axios"
import { useRouter } from "next/router"

import { List, Avatar, Space } from "antd"
import BookSingle from "../components/BookSingle"

const booksList = ({ posts }) => {
  const router = useRouter()

  return (
    
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 3,
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

export async function getStaticProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
  console.log(res)
  const posts = await res.json()
  return {
    props: { posts },
  }
}

export default booksList
