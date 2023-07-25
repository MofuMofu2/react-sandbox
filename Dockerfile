# ビルド環境を構築する
FROM node:18.16.0-alpine3.18 as build
# アプリケーションディレクトリで作業
WORKDIR /app
# package.jsonとpackage-lock.jsonを両方コピーする
COPY package*.json ./
# 依存ライブラリをインストールする
RUN npm ci
# アプリケーションのソースをコピーする
COPY . ./
# アプリケーションをビルドする
RUN npm run build

# Nginxの最小構成をベースにする
FROM nginx:alpine
# ビルド結果をコピーする
COPY --from=build /app/build /usr/share/nginx/html
# Nginxの設定ファイルをコピーする
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Docker起動時に80番ポートを開放することを伝える
EXPOSE 80
# Nginxを起動する
CMD ["nginx", "-g", "daemon off;"]
