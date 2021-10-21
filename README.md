# heuristics

## Useful heuristics, type checks, and validation helpers for JavaScript and TypeScript

[![Build Status](https://travis-ci.com/MatthewZito/heuristics.svg?branch=master)](https://travis-ci.com/MatthewZito/heuristics)
[![npm version](https://badge.fury.io/js/heuristics.svg)](https://badge.fury.io/js/heuristics)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`heuristics` is a library of useful heuristics, type checks, and validation helpers for JavaScript and TypeScript. Instead of repeatedly validating types (here, we mean type guards, not annotations), evaluating whether or not an API response is null (or indeed an object, only entirely empty), you can depend on this tested, consistent library API to get the job done.

## Installation

```bash
npm install heuristics
```

OR

```bash
yarn add heuristics
```

## Supported Environments

`heuristics` currently supports UMD, CommonJS (node versions >= 10), and ESM build-targets

Commonjs:

```js
const { } = require('heuristics');
```

ESM:

```js
import { } from 'heuristics';
```
