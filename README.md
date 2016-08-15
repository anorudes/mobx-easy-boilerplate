Mobx Easy Universal Boilerplate
=========================

Redux Easy Universal Boilerplate
=========================
[![bitHound Overall Score](https://www.bithound.io/github/anorudes/mobx-easy-boilerplate/badges/score.svg)](https://www.bithound.io/github/anorudes/mobx-easy-boilerplate)

---

## About

Really easy react universal boilerplate with many commentaries

## How it works

See commentaries in code

## Installation

Install [rimraf](https://github.com/isaacs/rimraf): ```$ npm install rimraf -g```<br />
Install [nodemon](https://github.com/remy/nodemon): ```$ npm install nodemon -g```<br />
Install [concurrently](https://github.com/kimmobrunfeldt/concurrently): ```$ npm install -g concurrently```

## Start development

```$ npm run api```

```$ npm run start```

after: open 'http://localhost:3000' in browser<br /><br />
hint: use this mode for development

## Start development (server-side-rendering)

```$ npm run api```

Don't forget install concurrently: `npm install -g concurrently`

```$ npm run start-ssr``` or ```$ sudo npm run start-ssr```

after: open 'http://localhost:3000' in browser<br /><br />
hint: use this mode for test server-side-rendering before build. <br />
doesn't have hot reload, but you can mannualy refresh page in browser.

## Start production

```$ npm run build```

```$ npm run api:prod```

```$ npm run start:prod```

after: open 'http://localhost' in browser<br /><br />
hint: use this mode for production on server (without server-side-rendering)

## Start production (server-side-rendering)

```$ npm run build```

```$ npm run api:prod```

```$ npm run start-ssr:prod```

after: open 'http://localhost' in browser<br /><br />
hint: use this mode for production on server

## Run tests

```$ npm run test```

## License

MIT