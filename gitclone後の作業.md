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

## .envの作成

## Laravel環境の初期化

## npm install
`sail npm install`