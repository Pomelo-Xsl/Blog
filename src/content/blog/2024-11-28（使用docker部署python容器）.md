---
title: 使用docker部署python3.10容器
description: 改进web服务器
pubDate: 2024 11 28
categories:
  - 学习
tags:
  - dockers
  - python
image: https://www.llanjing.com/wp-content/uploads/2020/07/daisy-5383056_640.jpg
---

```python
# 从华为云的镜像仓库拉取一个特定版本的 Python 镜像
docker pull swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/python:3.10 
# 将拉取的镜像重新标记为 Docker Hub 上的标准 Python 镜像,重新标记镜像可以简化镜像路径
docker tag  swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/python:3.10  docker.io/library/python:3.10 
```
