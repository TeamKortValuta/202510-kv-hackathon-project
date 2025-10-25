FROM ruby:3.4.7-bookworm

ARG UID=1000
ARG GID=1000
ARG USERNAME=ruby

ENV LANG=C.UTF-8

# 基本パッケージのインストールとユーザー作成
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    sudo \
    tzdata \
    libpq-dev \
    build-essential \
    git \
    ca-certificates \
    openssh-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    # グループとユーザーの作成（Debian用コマンド）
    groupadd -g ${GID} ${USERNAME} && \
    useradd -m -u ${UID} -g ${USERNAME} -s /bin/bash ${USERNAME} && \
    # sudo権限の設定
    echo "${USERNAME} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/${USERNAME} && \
    chmod 0440 /etc/sudoers.d/${USERNAME}

USER ${USERNAME}

WORKDIR /workspace
