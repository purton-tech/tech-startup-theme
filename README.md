# tech-startup-theme

Zola theme to get a tech startup up and running

```
git submodule add https://github.com/purton-tech/tech-startup-theme path_to_your_themeds_folder
```

## Development

```sh
npm install
```

Run Zola in watch mode

```sh
zs
```

Watch Tailwind

```sh
npm run tailwind
```

The `sass` folder is automatically compiled by zola

## Primer Design System

Ideally I'd like all the components from [https://primer.style/brand/](https://primer.style/brand/)

## Build the Asset Pipeline

```sh
npm install --prefix /workspace/assets/
npm run release --prefix /workspace/assets/
```
