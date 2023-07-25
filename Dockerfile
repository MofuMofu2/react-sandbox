# Nginxの最小構成をベースにする
FROM nginx:alpine
# ビルド結果をコピーする
COPY build/ /usr/share/nginx/html
# Nginxの設定ファイルをコピーする
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
# Docker起動時に80番ポートを開放することを伝える
EXPOSE 80
# Nginxを起動する
CMD ["nginx", "-g", "daemon off;"]
