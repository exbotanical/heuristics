# heuristics

## Useful heuristics, type checks, and validation helpers for JavaScript and TypeScript

[![Continuous Deployment](https://github.com/MatthewZito/heuristics/actions/workflows/cd.yml/badge.svg)](https://github.com/MatthewZito/heuristics/actions/workflows/cd.yml)
[![Continuous Integration](https://github.com/MatthewZito/heuristics/actions/workflows/ci.yml/badge.svg)](https://github.com/MatthewZito/heuristics/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/heuristics.svg)](https://badge.fury.io/js/heuristics)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`heuristics` is a library of useful heuristics, type checks, and validation helpers for JavaScript and TypeScript. Instead of repeatedly validating types (here, we mean type guards, not annotations), evaluating whether or not an API response is null (or indeed an object, only entirely empty), you can depend on this tested, consistent library API to get the job done.

![Exquisite GIF of Hagrid](assets/urawiz.gif "the maintainer does not guarantee this will happen to you")

## Table of Contents

- [Install](#install)
  - [Supported Environments](#support)
- [Documentation](#docs)


## <a name="install"></a> Installation

```bash
npm install heuristics
```

OR

```bash
yarn add heuristics
```

### <a name="support"></a>  Supported Environments

`heuristics` currently supports UMD, CommonJS (node versions >= 10), and ESM build-targets

Commonjs:

```js
const { isDefined } = require('heuristics');
```

ESM:

```js
import { isDefined } from 'heuristics';
```

## <a name="docs"></a> Documentation

Full documentation can be found [here](https://matthewzito.github.io/heuristics/heuristics.html)
