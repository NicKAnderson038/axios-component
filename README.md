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

<br>

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

<br>

### Customize configuration [Example](https://cli.vuejs.org/config/).

### useFetch: composition [api Example](https://morioh.com/p/c64947bb64ad).

#

<br>

<img src="https://cdn.cjr.org/wp-content/uploads/2017/01/jim_vandehei_axios.png" width="400"/>
<img src="https://miro.medium.com/max/1200/1*D8V3z6kKx2AD-L68LgN96g.png" width="400"/>
