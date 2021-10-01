// import { useRouter } from "next/router"
import React from "react"

const BookPage = ({ book }) => {
  // const router = useRouter()
  // const { id } = router.query
  // console.log(id)
  console.log(book?.title)
  return (
    <div>
      <h1>Sample slug page for books...{book.title}</h1>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
  )
  const book = await res.json()
  return {
    props: { book },
  }
}

export default BookPage
