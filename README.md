# Klivo Web Starter
Boilerplate for web based applications at Klivo

## Stack

### Runtime
- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [styled-components](https://styled-components.com/)

### Infrastructure
- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [testing-library](https://testing-library.com/)
- [eslint](https://eslint.org/)

### Automation
- Github Actions
- [Vercel](https://vercel.com/)

### Design Doc
- [Storybook](https://storybook.js.org/)

***

## Running the application

### Requirements
 - Node
 - Yarn

### Development
Firtly install the dependencies by running:
```bash
yarn
```

We restrict to use only `yarn` so `package-lock.json` won't be generated.

To make sure everything is working fine run:
```bash
yarn lint && yarn prettier --check ./src ./stories
```

#### Env file
In root you'll find a `.env.example` file with all env keys but not filled. You should ask another dev to get the values and create an `.env.local` file in root.

Finally, run:
```bash
yarn dev
```

The application will be available at `http://localhost:3000/`.