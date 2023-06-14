# pnpm boilerplate

## About

- Node.js, pnpm のセットアップ
- prettier, commitizen, lint-staged, husky のセットアップ

## 前提ツール

- nodenv
- direnv

## Usage

```bash
$ git clone git@github.com:d-kimuson/pnpm-boilerplate.git your-project-name
$ cd your-project-name
$ ./scripts/setup_repository.sh
```

## 調整

- ワークスペースを使わない:
  - pnpm-workspace.yaml を削除する
  - .npmrc を調整する
- Node.js のバージョン
  - Node.js v18 以上をサポートするので適切なバージョンに変更しましょう
  - 2023 年 6 月現在で v20 は LTS ではなく CURRENT です
- その他:
  - .npmrc はプロジェクト構成に併せて調整する

## TODO

- README に options について書く
- options の追加
  - aspida
