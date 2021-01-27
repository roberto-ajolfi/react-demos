# Realizzare una libreria npm di componenti React 

Un package di npm è semplicemente un file o una directory descritta dal un file `package.json`.

Il package può essere pubblicato come _public_, _private_ o come _scoped_.

Un package _public_ è identificato dal solo nome es. `my-npm-package`.

Un package _scoped_ è identificato anche da un _namespace_ (che inizia con @) es. `@icubed/my-npm-package`. Uno scoped package è privato di default, ma è possibile utilizzare uno specifico flag per renderlo pubblico.

## Tecnologie utilizzate

- React
- TypeScript
- Sass

## Aspetti coperti

- Semantic versioning
- Package bundling
- Package testing
- Documentation

## Procedura

Procedura recuperata dal sito [Log Rocket](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/).

Questa procedura utilizza [Rollup](https://rollupjs.org/guide/en/) come module bundler, perchè è più semplice da utilizzare nel contesto della creazione di packages rispetto a Webpack.


### Setup iniziale
- creare un cartella es. `my-npm-package`
- lanciare il comando `npm init -y`  (inizializzazione di npm)
    - verrà creato il file `package.json` – descrittore del package (vedi modifiche da apportare in Appendice)
- creare nella cartella i seguenti file / cartelle
    - `src` – cartella per i codice React
    - `README.md` – documentazione del package
    - `rollup.config.js` – configurazione di Rollup (vedi Appendice)
    - `tsconfig.json` – configurazione di TypeScript (vedi Appendice)
    - *[Opzionale]* `.npmignore` – elenco dei file che npm deve ignorare quando viene creato il package
    - eventuali file extra dovuti alla gestione del progetto es. `.gitignore` se usiamo GIT (vedi Appendice)
- installare React e TypeScript
    - `npm i -D react react-dom typescript @types/react @types/react-dom`
- installare Rollup e tutti i moduli necessari
    - `npm i -D rollup rollup-plugin-typescript2 rollup-plugin-sass babel-core babel-runtime`

### Sviluppo
- sviluppare il file `index.ts` / `index.tsx` più altri eventuali file (es. SASS) all'interno della cartella `src`
- per evitare errori, quando si deve importare React occorre utilizzare la sintassi
  - `import * as React from 'react'`
- se devono essere esposti più elementi (es. più Component) si utilizza il __Barrel Exports Pattern__
    - si sviluppano gli elementi nei loro file
    - il file `index.ts` semplicemente importa e poi esporta tutti Component, es.
    ```
    import Counter from './Counter';
    import SurveyCard from './SurveyCard';

    export { Counter, SurveyCard }
    ```

### Testare il Pacchetto
- eseguire il comando `npm run build` per generare il codice nella cartella `dist`
- eseguire il comando `npm link` per rendere disponibile il package localmente
- eseguire il comando `npm link {nome del package}` in un progetto di test
  - es. `npm link my-npm-package`
- nel progetto di test posso ora importare il mio package
    - es. `import * from 'my-npm-package'`
- la rimozione dei link così creata viene fatta con il comando `npm unlink`
    - ***è importante farlo in ordine inverso rispetto a quello di attivazione***

## Pubblicazione

### Pubblicare su npm
- la pubblicazione richiede di seguire le direttive del **semantic versioning**. La gestione avviene tramite il comando `npm version [patch | minor | major]`
- eseguire il comando `npm run build` per generare il codice nella cartella `dist`
- loggarsi ad npm tramite il comando `npm login`, specificando username e password se richiesto
- **non serve utilizzare il comando `npm pack`** (che genera un file tgz con il contenuto della cartella `dist`)
- per pubblicare utilizzare il comando  `npm publish`
    - se il package è scoped ma lo si vuole rendere pubblico, utilizzare il comando `npm publish --access public`

### Pubblicare su Azure DevOps Artefacts

- la pubblicazione richiede di seguire le direttive del **semantic versioning**. La gestione avviene tramite il comando `npm version [patch | minor | major]`
- solitamente si utilizza una pipeline scatenata da un commit / pull request
- un esempio di pipeline si trova nel file `azure-pipelines.yml` nel progetto
    - riproduce in pratica tutti gli step di utilizzo di `npm` (install, package ...)
    - poi pubblica in un Feed

## Appendici

### File di configurazione di Typescript

```
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom", "es2016", "es2017"],
    "sourceMap": true,
    "allowJs": false,
    "jsx": "react",
    "declaration": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "example", "rollup.config.js"]
}
```

### File di configurazione di Rollup

```
import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  // input – tells Rollup which file is the root file
  input: 'src/index.tsx',
  // output – tells Rollup where to bundle your file to and in what format
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  // plugins – tells Rollup which plugins we want to use along with the configuration for each one
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true })
  ],
  // externals – tells Rollup which modules being used by the package should be supplied by the host environment
  external: ['react', 'react-dom']
}
```

### Modifiche al package.json

```
{
  // rememeber to add the namespace for scoped packages
  "name": "@icubed/glickon-lib",
  // ...
  // change the main
  "main": "dist/index.js",
  // ...
  // add the external dependencies
  "peerDependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  // specify the files to be deployed when npm install will be executed
  "files": [
    "dist"
  ],
  // script to be used in development with npm run
  "scripts": {
    "build": "rollup -c",
    "start": "rollup -c -w"
  },
  //...
}

```

### File .gitignore

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```