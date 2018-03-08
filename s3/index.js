(function () {
  "use strict";
  var s3Operations = require("./operations");

  module.exports = {
    upload: s3Operations.uploadObject,
    fetch: s3Operations.fetchObject,
    delete: s3Operations.deleteObject
  };
})();
