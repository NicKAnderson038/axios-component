# axios-component

### Deploying to GitHub [Pages](https://nickanderson038.github.io/axios-component/).

1. Follow <a href="https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd" target="_blank">instructions</a> on deployment.
2. Make sure to add the `--no-verify` flag to end of the `git commit` step.
3. command steps:

```bash
npm run build || yarn build

git add dist && git commit -m "Initial dist subtree commit" --no-verify

# First time creation: git subtree push -u --prefix dist origin gh-pages
git subtree push --prefix dist origin gh-pages
```

#

## Project setup

```
npm install || yarn
```

### Compiles and hot-reloads for development

```
npm run serve || yarn serve
```

### Compiles and minifies for production

```
npm run build || yarn build
```

### Run your unit tests

```
npm run test:unit || yarn test:unit
```

### Run your end-to-end tests

```
npm run test:e2e || yarn test:e2e
```

### Lints and fixes files

```
npm run lint || yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

#

<br>

<img src="https://cdn.cjr.org/wp-content/uploads/2017/01/jim_vandehei_axios.png" width="400"/>
<img src="https://ultimateqa.com/wp-content/uploads/2020/03/jsonplaceholder.png" width="400"/>
