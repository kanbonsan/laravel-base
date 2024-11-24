# Git clone後の作業(LaravelとLaravel Sail)

## Dockerにcomposerを作ってcomposer install作業を行う
```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

## .envの作成と設定

- `copy .env.example .env` で`.env`ファイルを作成する。
- `DB_CONNECTION=mysql`
- `DB_HOST=mysql` (これ重要)
- その他の環境変数の設定（API_KEYなど）

## Laravel環境の初期化
- `sail artisan key:generate`
- `sail artisan migrate`

うまくいかないことあり。Dockerのイメージを作り直したりする必要あり。
都度ググるしかない。

## npm install
`sail npm install`