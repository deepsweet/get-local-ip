# get-local-ip

[![npm](http://img.shields.io/npm/v/get-local-ip.svg?style=flat-square)](https://www.npmjs.org/package/get-local-ip)
[![travis](http://img.shields.io/travis/deepsweet/get-local-ip.svg?style=flat-square)](https://travis-ci.org/deepsweet/get-local-ip)
[![climate](http://img.shields.io/codeclimate/github/deepsweet/get-local-ip.svg?style=flat-square)](https://codeclimate.com/github/deepsweet/get-local-ip/code)
[![deps](http://img.shields.io/david/deepsweet/get-local-ip.svg?style=flat-square)](https://david-dm.org/deepsweet/get-local-ip)
[![gratipay](http://img.shields.io/gratipay/deepsweet.svg?style=flat-square)](https://gratipay.com/deepsweet/)

Get a local IP address from a specified network range.

## Install

```sh
$ npm i -S get-local-ip
```

## Usage

```js
var getLocalIP = require('get-local-ip');

console.log(getLocalIP('192.168.0.0/24'));
```

It will loop through all of your network interfaces and return the first matched IPv4 address.

See [IP Calculator](http://jodies.de/ipcalc) for the further help.

## License
[WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-strip.jpg)
