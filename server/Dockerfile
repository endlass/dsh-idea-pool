# 灵感池自建云端后端（ideas-api v2 兼容）
# 纯 Python 标准库 + SQLite；非 root 运行；数据在 /data（compose 里映射到 ./data）。
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    IDEAS_HOST=0.0.0.0 \
    IDEAS_PORT=8794 \
    IDEAS_DATA_DIR=/data

WORKDIR /app
COPY ideas_api.py /app/ideas_api.py

# 非 root 用户（uid 10001）+ 数据目录；/data 是数据卷挂载点
RUN groupadd --system --gid 10001 ideas \
    && useradd --system --uid 10001 --gid ideas --home-dir /app --shell /usr/sbin/nologin ideas \
    && mkdir -p /data \
    && chown -R ideas:ideas /app /data

USER ideas
EXPOSE 8794
VOLUME ["/data"]

# 容器内健康检查走 loopback（服务端对 loopback 豁免 token，未配置 token 时也能过）
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD python3 -c "import os, sys, urllib.request; port = os.environ.get('IDEAS_PORT', '8794'); sys.exit(0 if urllib.request.urlopen('http://127.0.0.1:%s/api/health' % port, timeout=3).status == 200 else 1)"

CMD ["python3", "/app/ideas_api.py"]
