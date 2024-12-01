---
title: 使用docker部署python3.10容器
description: 改进web服务器
pubDate: 2024 11 28
categories:
  - 学习
tags:
  - dockers
  - Python
image: https://www.llanjing.com/wp-content/uploads/2020/07/daisy-5383056_640.jpg
---

```python
# 从华为云的镜像仓库拉取一个特定版本的 Python 镜像
docker pull swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/python:3.10 
# 将拉取的镜像重新标记为 Docker Hub 上的标准 Python 镜像,重新标记镜像可以简化镜像路径
docker tag  swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/python:3.10  docker.io/library/python:3.10 
```

利用docker-compose.yml文件部署容器：它会自动拉取镜像并运行容器，并将容器的端口映射到主机上
所以并不需要上述的拉取镜像的操作

### 总结(创建一个容器,必须要有相应的服务)

- 其实上述的创建一个python容器的方式是**错误的**,因为拉取了一个python镜像,但是没有响应的服务,所以就算你,配置好了docker-compose.yml文件,也无法启动容器.
- **正确的**方式是进入到容器里面,然后安装python3.10,然后运行python代码.

```bash
docker exec -it <container_name> /bin/bash
apt-get update
apt-get install python3
python3 --version
```

然后你就可以在容器里面运行python代码了.
