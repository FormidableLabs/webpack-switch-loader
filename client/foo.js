module.exports = process.env.IS_WEBPACK ?
  require("raw!./foo.text") :   // NOTE: Paths relative "like normal".
  require("./raw")("foo.text"); // NOTE: Paths relative to `client/`
