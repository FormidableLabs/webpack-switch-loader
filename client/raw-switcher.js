/**
 * Raw file imports.
 *
 * **NOTE**: Must be relative to `client/`
 */
if (process.env.IS_WEBPACK) { /* WEBPACK */
  module.exports = function (filePath) {
    return require("raw!" + filePath);
  }
} else { /* NODE */
  module.exports = function (filePath) {
    var fs = require("fs");
    var path = require("path");
    return fs.readFileSync(path.join(__dirname, filePath)).toString();
  }
}
