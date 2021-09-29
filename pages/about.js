import React from "react"
import Head from "next/Head"
import styles from "../styles/About.module.css"
import {
  Typography,
  Card,
  Row,
  Col,
  Collapse,
  Timeline,
  Divider,
} from "antd"
const About = () => {
  const { Title, Paragraph, Text, Link } =
    Typography
  const { Panel } = Collapse
  return (
    <div className="site-card-border-less-wrapper">
      <Row
        justify="start"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {" "}
        <Head>
          <title>About</title>
        </Head>
        <Col>
          <Card style={{ width: 400 }}>
            <Title level={2}>Ponder about</Title>
            <Divider />
            <Paragraph>
              I have done minimal work here. I am
              just testing the {`<Timeline />`}{" "}
              components from{" "}
              <strong>ant-d</strong>.
            </Paragraph>
          </Card>
        </Col>
        <Col>
          <Card>
            <Title level={3}>
              Learning trip...
            </Title>
            <br />
            <Timeline pending="Learn more...">
              <Timeline.Item color="green">
                Init project with{" "}
                <Link href="https://nextjs.org/">
                  NextJs
                </Link>{" "}
              </Timeline.Item>
              <Timeline.Item color="green">
                Find out how to use css modules{" "}
              </Timeline.Item>
              <Timeline.Item color="green">
                List books with getStaticProps
              </Timeline.Item>
              <Timeline.Item color="green">
                Create pagination for all books{" "}
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>
                  Learn how to use
                  getServerSideProps{" "}
                </p>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>
                  Learn when to use getStaticPaths
                </p>
              </Timeline.Item>
              <Timeline.Item color="gray">
                Technical testing 1
              </Timeline.Item>
              <Timeline.Item color="gray">
                Technical testing 1
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default About
