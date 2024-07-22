
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript repository for Books

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

###
Image optimization:

- using an alpine (light) version of node
- removing the unused files after the build by using multi-stage builds

Security:
- custom user instead of root
- separate user-based directory for the app