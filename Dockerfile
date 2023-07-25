# Nginxの最小構成をベースにする
FROM nginx:alpine
# ビルド結果をコピーする
COPY build/ /usr/share/nginx/html
# Nginxの設定ファイルをコピーする
COPY nginx.conf /etc/nginx/conf.d/default.conf
# ポート80を公開する
EXPOSE 80
# Nginxを起動する
CMD ["nginx", "-g", "daemon off;"]
