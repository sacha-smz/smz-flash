# Flash data for Express.js

Express middleware that allows you to store data in the session that will be available only for the next request

## Usage

```sh
npm i smz-flash
```

```js
// index.js

const express = require("express");
const session = require("express-session");
const flash = require("smz-flash");

const app = express();

app.use(
  session({
    // options
  })
);

app.use(flash);

// ...
```

```js
// controller.js

controller.doSmth = (req, res) => {
  if (sthBadHappens) {
    req.flash.error = "Something bad happened";
    res.redirect("back");
  }
};
```

```js
// next-request-controller.js

controller.showSmth = (_, res) => {
  res.render("myView");
};
```

```js
// myView.ejs

<% if(locals.error) { %>
  <p><%= error %></p>
} %>
```
