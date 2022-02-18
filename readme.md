# snake-camel-switch

This is my third npm package 🐙

## How to use

In your terminal write: `npm install snake-camel-switch`

## Example

    const change = require('snake-camel-switch')

    const object = { an_bn_cn: 0, an_an: 0 }

    console.log(change.toCamel(object)); // { anBnCn: 0, anAn: 0 }

    const object2 = { anBnCn: 0, anAn: 0 }

    console.log(change.toSnake(object2)) // { an_bn_cn: 0, an_an: 0 }
