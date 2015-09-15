var fs = require("fs");
var path = require("path");
var text = fs.readFileSync(path.join(__dirname, "foo.text")).toString();

module.exports = text;
