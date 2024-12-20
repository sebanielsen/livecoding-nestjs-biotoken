# API CHALLENGE SPEC
## Check Smart Contract Decimals

```bash
# First install dependencies
$ npm install

# Install ether.js (Note that for RPCProviders with ether.js you must specify version 5 when install)
$ npm install ethers@5.6.1 --save

# Run API
$ nest start
```
if everything went ok you will see a log like this:
```bash
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [NestFactory] Starting Nest application...
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +35ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [InstanceLoader] PriceModule dependencies initialized +0ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [InstanceLoader] ContractModule dependencies initialized +0ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [RoutesResolver] AppController {/}: +17ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [RouterExplorer] Mapped {/, GET} route +7ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [RoutesResolver] PriceController {/price}: +0ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [RouterExplorer] Mapped {/price/matic, GET} route +2ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [RoutesResolver] ContractController {/contract}: +0ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [RouterExplorer] Mapped {/contract/value, GET} route +1ms
[Nest] 29880  - 12/20/2024, 2:32:00 PM     LOG [NestApplication] Nest application successfully started +2ms
```
1. To check Smart contract decimal values open a web navigator and open:
   http://localhost:3000/contract/value

2. To check Matic token price in USDT open:
       http://localhost:3000/price/matic



   
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

