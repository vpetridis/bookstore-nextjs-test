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
      size="small"
      pagination={{
        onChange: (page) => {
          console.log(page)
          getStaticProps({ page })
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

export async function getStaticProps({ page }) {
  console.log("page is", page)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  )
  const posts = await res.json()
  return {
    props: { posts },
  }
}

export default booksList
