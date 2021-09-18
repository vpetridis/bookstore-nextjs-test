import React from "react"
import { useRouter } from "next/router"

const booksList = () => {
  const router = useRouter()
  // const { pid } = router.query
  console.log(router.asPath)
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

export default booksList
