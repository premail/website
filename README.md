# Premail.dev website

This is the code for <https://premail.dev> -- if you're looking for the `premail` repo itself, visit <https://github.com/premail/premail/>.

The Premail website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. Code is hosted in the `main` branch, and the rendered site in [`gh-pages`](https://github.com/premail/website/tree/gh-pages), where it is unsurprisingly hosted on GitHub Pages.

Changes to the `main` branch trigger the website to be rebuilt and deployed automatically.

## Development

### Prerequisites

- Node >= 14.x (which can be checked by running `node -v`). Note`premail` itself uses Node 12.x; We recommend using [n](https://github.com/tj/n) or
[nvm](https://github.com/nvm-sh/nvm) if you're managing multiple versions of
Node.
- Yarn version >= 1.5 (which can be checked by running `yarn --version`). Yarn is a performant package manager for JavaScript and replaces the npm client. It is not strictly necessary but highly encouraged.

### Installation

```sh
yarn
```

### Local development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Test build

```sh
yarn build
```

This command generates static content into the `build` directory. It's generally unnecessary to run this locally, since it's run automatically during deployment, but if issues arise this will show you exactly what Docusaurus is creating.

### Deployment

Merge a PR or push changes to the `main` branch and the website will be automatically rebuilt and deployed.

You can also deploy manually with:

```sh
GIT_USER=<username> USE_SSH=true yarn deploy
```
