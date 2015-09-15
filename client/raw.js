/**
 * Raw file importer from node.
 *
 * **NOTE**: Must be relative to `client/`
 */

module.exports = function (filePath) {
  var fs = require("fs");
  var path = require("path");
  return fs.readFileSync(path.join(__dirname, filePath)).toString();
}
