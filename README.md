## RM Components

This is a work in progress component library.

### Usage

```sh
# Using yarn
$ yarn add @xalgorithms/rm-components@latest

# Using npm
$ npm i @xalgorithms/rm-components@latest
```

Within your application, you can now import and use the components:

```js
import { Text, Input, Label } from "@xalgorithms/rm-components";

<Text variant={"heading"}>Slide Me!</Text>
<Input variant={"secondary"} type={"range"} />
```

### Development

```sh
# Install packages
yarn install

# View the styleguide (styleguidist)
yarn start

# Run testing React app
yarn react-start
```

You can also use `npx styleguidist server` to run styleguidist directly.

### Publishing

Contributors must request access to the `@xalgorithms` npm organization to publish the package.

```sh
npm login
npm publish --access public
```
