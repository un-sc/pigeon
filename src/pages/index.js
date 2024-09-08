import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Flex, Row, Col, Typography, Carousel } from 'antd';
const { Title } = Typography;


const contentStyle = {
  color: '#fff',
  height: '100%',
  background: '#364d79',
};

const titleTextStyle = {
  color: "white",textShadow: '4px 4px 10px rgba(0, 0, 0, 1)'
}

const image1 = {
  backgroundImage: "url('https://vip.123pan.cn/1815896253/ImagesBed/gzg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

const image2 = {
  backgroundImage: "url('https://vip.123pan.cn/1815896253/ImagesBed/ymy5.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

const image3 = {
  backgroundImage: "url('https://vip.123pan.cn/1815896253/ImagesBed/ymy7_1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (

    <Carousel autoplay arrows dotPosition="left" infinite={false}>
      <Row>
        <div style={{ height: "95vh" }}>
          <Col span={24} style={contentStyle}>
            <Flex style={image3} gap="middle" vertical justify="center" align="center">
              <Title level={1} style={titleTextStyle}>{siteConfig.title}服务器</Title>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                前往服务器wiki
              </Link>
            </Flex>
          </Col>
        </div>
      </Row>
      <Row>
        <div style={{ height: "95vh" }}>
          <Col span={24} style={contentStyle}>
            <Flex style={image1} gap="middle" vertical justify="center" align="center">
              <Title level={1} style={titleTextStyle}>{siteConfig.title}服务器</Title>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                前往服务器wiki
              </Link>
            </Flex>
          </Col>
        </div>
      </Row>
      <Row>
        <div style={{ height: "95vh" }}>
          <Col span={24} style={contentStyle}>
            <Flex style={image2} gap="middle" vertical justify="center" align="center">
              <Title level={1} style={titleTextStyle}>{siteConfig.title}服务器</Title>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                前往服务器wiki
              </Link>
            </Flex>
          </Col>
        </div>
      </Row>
    </Carousel>
    // <header className={clsx('hero', styles.heroBanner)}>
    //   <div className="container">
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         前往服务器wiki
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
