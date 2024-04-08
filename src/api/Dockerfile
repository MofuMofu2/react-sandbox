# ベースイメージ
FROM openapitools/openapi-generator-cli

# 作業ディレクトリの設定
WORKDIR /app

# OpenAPI定義ファイルをイメージにコピー
COPY ./openapi.yaml /app/openapi.yaml

# コード生成コマンドの実行
# 実際の生成処理はコンテナの起動時に行われるため、ENTRYPOINTまたはCMDを使用します。
CMD ["generate", "-i", "/app/openapi.yaml", "-g", "typescript-fetch", "-o", "/app/output"]
