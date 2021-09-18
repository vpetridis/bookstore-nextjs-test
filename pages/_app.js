import Layout from "../components/LayoutComp"
import "../styles/globals.css"
import "antd/dist/antd.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
