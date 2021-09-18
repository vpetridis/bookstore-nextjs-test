import React from "react"
import axios from "axios"
import { useRouter } from "next/router"
const booksList = ({ posts }) => {
  const router = useRouter()
  // const { pid } = router.query
  console.log(posts)
  return (
    <div className="title">
      This is the Books List
      <style jsx>
        {`
          .title {
            color: ${router.asPath !== "/about"
              ? "red"
              : "black"};
          }
        `}
      </style>
    </div>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: "GET",
    url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/details",
    params: { asin: "B07ZPKR714", country: "US" },
    headers: {
      "x-rapidapi-host":
        "amazon-product-reviews-keywords.p.rapidapi.com",
      "x-rapidapi-key":
        "bc550237e8mshccad21bced7bf8bp11f7a2jsn68566ce37265",
    },
  }

  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    const posts =  res.json()
    return {
      props: { posts },
    }
  } catch (error) {
    console.error(error)
    return new Error("didn't get anything")
  }
}

export default booksList
