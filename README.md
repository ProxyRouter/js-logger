# ProxyRouter.net Logger

## Installation
```
npm install proxyrouter-logger
```

```js
const { debug, info, warn, error } = require('proxyrouter-logger');
```

## Usage
### Basic Usage
```js
debug("Test :)");
info("Test :)");
warn("Test :)");
error("Test :)");
```

### Embed Variables
```js
var text = "Test :)";

debug(`${text}`);
info(`${text}`);
warn(`${text}`);
error(`${text}`);
```