import {
  Avatar,
  Typography,
  Card,
  Row,
  Col,
  Collapse,
  Button,
  notification,
  Popover,
  Divider,
} from "antd"

import Image from "next/image"
import Typewriter from "typewriter-effect"
import billyAvatar from "../public/svg/billy_avatar.svg"

export default function Home() {
  const { Title, Paragraph, Text, Link } =
    Typography
  const { Panel } = Collapse

  const openNotification = () => {
    notification.open({
      message: "And this is what I said...",
      description: `Hey! Why not use some other design system (look: ant-d) that I've never put my hands on?`,
      onClick: () => {
        console.log(
          "Notification Clicked! I know how to console.log stuff"
        )
      },
    })
  }

  const popoverContent = (
    <div>
      <p>
        I know I could have used HTML character
        codes for brackets, like so:{" "}
        <ul>
          <li>
            Left Curly Brace &#123;{" "}
            <li>Right Curly Brace &#125;</li>
          </li>
        </ul>
      </p>
      <p>
        But template literals from ES6 look
        fancier:
        <ul>
          {" "}
          <li>eg: {`{{}}`}</li>
        </ul>
      </p>
    </div>
  )
  return (
    <Row
      justify="start"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <Col>
        {" "}
        <div className="site-card-border-less-wrapper">
          <Card
            // title="No reason card"
            bordered={false}
            style={{
              height: 300,
            }}
          >
            {" "}
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              src={<Image src={billyAvatar} />}
            />
            <Title>Hi there!</Title>{" "}
            <Title level={3}>
              <Popover
                content={popoverContent}
                title="Escaping brackets"
              >
                <Button className="animate__animated animate__bounce animate__delay-1s">
                  <Title
                    level={5}
                  >{`{pointless}`}</Title>
                </Button>
              </Popover>{" "}
              app lovers!
            </Title>{" "}
          </Card>
        </div>
      </Col>
      <Col>
        {" "}
        <div className="site-card-border-less-wrapper">
          <Card bordered={false}>
            <Title level={3}>
              Info here and there
            </Title>
            <Collapse accordion>
              <Panel header="What's this?" key="1">
                <p>
                  Some random guy figuring out how
                  to use this
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://nextjs.org/"
                  >
                    {" "}
                    NextJs
                  </a>{" "}
                  stuff.
                </p>{" "}
              </Panel>
              <Panel
                header="Why are you doing this?"
                key="2"
              >
                <p>
                  Wanted to find out how to use
                  Static Site Generation for
                  starters but{" "}
                  <Button
                    type="primary"
                    onClick={openNotification}
                  >
                    then I said{" "}
                  </Button>
                </p>
              </Panel>
              <Panel
                header="Is this something useful?"
                key="3"
              >
                <p>
                  This is by no means useful. Even
                  fallen tree branches surpass this
                  site in usefulness.
                </p>{" "}
              </Panel>
            </Collapse>
          </Card>
        </div>
      </Col>
      <Row>
        <Card style={{ width: "400px" }}>
          <Title>Github</Title>
          <Divider />
          <Paragraph>
            {" "}
            You are probably here because you are
            on a quest for a front-end dev.
            It&apos;s okay. I can make stuff right
            away. I will reach out to the docs and
            find out what you want to build.
          </Paragraph>
          <Title level={4}>
            {" "}
            <Popover
              title="Some popovers are meaningless"
              content={
                <p>
                  Just imagine a word without the
                  extra info. <br /> Wanna drive a
                  car? Figure it out by yourself...
                  <br /> This is why popovers where
                  built for
                </p>
              }
            >
              <a href="https://github.com/vpetridis">
                where you came from
              </a>
            </Popover>
          </Title>
        </Card>{" "}
      </Row>{" "}
      <Col
        span={12}
        style={{
          margin: "100px 0px",
        }}
      >
        <Title>
          <Typewriter
            options={{
              strings: [
                "Front-end,",
                "React, NextJS, Strapi",

                "...and many more",
                "I love making stuff online!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Title>
      </Col>
    </Row>
  )
}
