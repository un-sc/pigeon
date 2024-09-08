import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Divider, Flex, Col, Row, Progress, Skeleton, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

const FeatureList = [
  {
    title: '英特尔酷睿14代i9物理机',
    Svg: require('@site/static/img/CPU-1.svg').default,
    description: (
      <>
        使用体质分100分的14900K处理器物理机开服，全核心频率5.8GHz。在R23压测1小时、TM5压测1小时后可以无故障通过。同时我们还使用AMD R5 5600G、Intel I5 9600KF进行群组分压。
      </>
    ),
  },
  {
    title: '鸽子林开发中心',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        从策划到美术，从美术到建筑，从建筑到程序，从程序到维护，我们拥有十余人的完善的服务器开发团队，共同创作服务器内容，为您带来高质量的游戏体验。
      </>
    ),
  },
  {
    title: '高质量服务器生态环境',
    Svg: require('@site/static/img/quality.svg').default,
    description: (
      <>
        服务器开启了正版验证，并且只有我们审核通过的玩家可以游玩服务器。我们致力于打造和谐共处、文明友善、多元发展的服务器游戏环境，抵制不友好的行为。
      </>
    ),
  },
];

const Feature = ({ Svg, title, description }) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

const ServerStatus = () => {
  const [loading, setLoading] = useState([]);
  const [cpu_usage, setCpuUsage] = useState([]);
  const [disk_usage, setDiskUsage] = useState([]);
  const [download_speed, setDownloadSpeed] = useState([]);
  const [upload_speed, setUploadSpeed] = useState([]);
  const [max_players, setMaxPlayers] = useState([]);
  const [online_players, setOnlinePlayers] = useState([]);
  const [memory_usage, setMemoryUsage] = useState([]);
  const [latency, setLatency] = useState([]);
  const [player_list, setPlayerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://p.viewcb.net:25560/');
        setCpuUsage(response.data.cpu_usage);
        setDiskUsage(response.data.disk_usage);
        setCpuUsage(response.data.cpu_usage);
        setDownloadSpeed(response.data.download_speed);
        setUploadSpeed(response.data.upload_speed);
        setMaxPlayers(response.data.max_players);
        setOnlinePlayers(response.data.online_players);
        setMemoryUsage(response.data.memory_usage);
        setPlayerList(response.data.player_list);
        setLatency(response.data.latency);
        setLoading(false);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 初次获取数据
    fetchData();

    // 设置周期性获取数据
    const intervalId = setInterval(fetchData, 5000); // 每5秒获取一次数据

    // 清理定时器
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <Flex justify='space-evenly'><h1>服务器状态</h1></Flex>

      <Row align="middle">
        <Col lg={{ flex: '20%' }} sm={{ flex: '20%' }} xs={{ flex: '50%' }}>
          <Flex vertical="true">
            <Flex justify='center'><Progress type="dashboard" percent={cpu_usage} strokeColor={conicColors} /></Flex>
            <Flex justify='center'>CPU利用率</Flex>
          </Flex>
        </Col>
        <Col lg={{ flex: '20%' }} sm={{ flex: '20%' }} xs={{ flex: '50%' }}>
          <Flex vertical="true">
            <Flex justify='center'><Progress type="dashboard" percent={memory_usage} strokeColor={conicColors} /></Flex>
            <Flex justify='center'>内存利用率</Flex>
          </Flex>
        </Col>
        <Col lg={{ flex: '20%' }} sm={{ flex: '20%' }} xs={{ flex: '50%' }}>
          <Flex vertical="true">
            <Flex justify='center'><Progress type="dashboard" percent={disk_usage} strokeColor={conicColors} /></Flex>
            <Flex justify='center'>硬盘利用率</Flex>
          </Flex>
        </Col>
        <Col lg={{ flex: '40%' }} sm={{ flex: '40%' }} xs={{ flex: '100%' }}>
          <Card style={{ width: '240px' }}>
            <Card style={{ width: 240, height: 90 }}>
              <Flex align="center" vertical="true">
                <p>
                  上行带宽：{upload_speed} Mbps <b className="bi bi-cloud-arrow-up" style={{ color: "green" }} /><br />
                  下行带宽：{download_speed} Mbps <b className="bi bi-cloud-arrow-down" style={{ color: "blue" }} />
                </p>
              </Flex>
            </Card>
            <Card style={{ width: 240, height: 70, marginTop: 5 }}>
              <Flex align="center" vertical="true">
                <p>当前在线：{online_players}/{max_players}</p>
              </Flex>
            </Card>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ServerStatus />

        <Divider />

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <Divider />

        <video width="100%" controls poster='https://vip.123pan.cn/1815896253/ImagesBed/vedioposter.png'>
          <source src='https://vip.123pan.cn/1815896253/ImagesBed/%E7%9A%87%E5%B8%9D%E9%99%9B%E4%B8%8B%E8%AF%A5%E4%B8%8A%E6%9C%9D%E4%BA%86.mp4' type="video/mp4"></source>
          你的浏览器不支持 Video 标签。
        </video>

        <Divider />
        
      </div>
    </section>
  );
}
