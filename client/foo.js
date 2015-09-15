
if (process.env.IS_WEBPACK) { /* WEBPACK */
  module.exports = require("raw!./foo.text")
} else { /* NODE */
  var fs = require("fs");
  var path = require("path");
  module.exports = fs.readFileSync(path.join(__dirname, "foo.text")).toString();
}
