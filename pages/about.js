import React from "react"
import Head from "next/Head"
import styles from "../styles/About.module.css"
const about = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      
      </Head>
      <h1>about page</h1>
    </div>
  )
}

export default about