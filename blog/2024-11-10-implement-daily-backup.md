---
slug: implement-daily-backup
title: 全面落实服务器每日备份
authors: LiananProMax
tags: [daily-updates]
---

服务器现已落实全面每日备份
1.每天凌晨2:30，进行mariadb数据库自动备份，由宁波代理服务器节点使用MyDumper工具发起备份指令，整个过程大约持续5分钟后备份完成
![数据库定时备份](https://vip.123pan.cn/1815896253/ImagesBed/implement-daily-backup-01.png)
2.每天临晨3:06，宁波代理服务器进行整机硬盘备份，持续时间约3分钟
![数据库定时备份](https://vip.123pan.cn/1815896253/ImagesBed/implement-daily-backup-02.png)
<!-- truncate -->
3.每天凌晨5:00，通过ebackup插件对Minecraft服务器进行根目录备份，持续时间约10分钟
![数据库定时备份](https://vip.123pan.cn/1815896253/ImagesBed/implement-daily-backup-03.png)
4.每天凌晨5:30，通过windows计划任务将ebackup备份得到的zip压缩包上传至局域网内的微联通Nas进行二次备份保障
![数据库定时备份](https://vip.123pan.cn/1815896253/ImagesBed/implement-daily-backup-04.png)