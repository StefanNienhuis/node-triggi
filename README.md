node-triggi
==============================

![node-triggi: Downloads](https://img.shields.io/npm/dt/node-triggi.svg?style=flat) ![node-triggi: Version](https://img.shields.io/npm/v/node-triggi.svg)

Use Triggi Connect in your Javascript projects!

Usage
------------------------------

```js
const Triggi = require('node-triggi');

const connector = new Triggi('YOUR CONNECT URL');

connector.setOn();
```

Methods
------------------------------

### Triggi.setOn();
Turns on the connector on the url that was initialized at the creation of the Triggi object.

### Triggi.setValue(val);
Sets an specific value for an connector.

Value must be a string.

### ~~Triggi.getValue();~~
~~Returns the stored value in an Triggi connector.~~

~~Returns a string~~
The Triggi connect service doesn't support that right now. Stay tuned for updates.
