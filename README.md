<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.ibb.co/y0ZWXPR/zero.png" width="320" alt="ZeroNest Logo" /></a>
</p>

  <p align="center">A batteries included <a href="http://nestjs.com" target="_blank">Nest.js</a> boilerplate.</p>

## Description

ZeroNest is a boilerplate that has most of the common web-dev features built-in.

## Installation

Clone the repo and run

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn dev

# enable debugger
$ yarn start:debug

# production mode
$ yarn start:prod

# migrations
$ npx prisma migrate

# generating migrations from schema.prisma
$ npx prisma migrate:generate
```

### Access queue monitoring web UI

Go to `/bull-board` path. Login with username `admin` and password set in `.env` in the variable `BULL_BOARD_PASSWORD`.

## Built with

- [Nest.js](https://nestjs.com)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com)
- [Webpack](https://webpack.js.org/)

### Features

- [x] Modular architecture
- [x] Progressive build tooling
- [x] Authentication with JWT
- [x] Session invalidation support
- [x] Heroku ready
- [x] Queues/Workers
- [x] Queue monitoring using [bull-board](https://www.npmjs.com/package/bull-board)
- [ ] Component library
- [ ] Mailers
- [ ] Billing & subscription with Stripe
- [ ] Teams & roles
- [ ] Plans & feature toggles
