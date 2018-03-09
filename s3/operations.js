(function () {
  "use strict";
  var s3Operations = function () {},
    AWS = require("aws-sdk"),
    S3 = new AWS.S3();

  s3Operations.uploadObject = function (bucketName, s3FilePath, content, contentType, callback) {

    // if contentType is not present and instead callback is passed
    callback = typeof contentType === "function" ? contentType : callback;
    if (callback === contentType) {
      contentType = "binary/octet-stream";
    }

    typeof callback === "function" || (callback = function () {});

    if (typeof bucketName !== "string" || !bucketName.length) {
      return callback("INVALID_BUCKET_NAME", null);
    }

    if (typeof s3FilePath !== "string" || !s3FilePath.length) {
      return callback("INVALID_S3_FILE_PATH", null);
    }

    if (!content) {
      return callback("INVALID_CONTENT", null);
    }

    return S3.putObject({
      Bucket: bucketName,
      Key: s3FilePath,
      Body: content,
      ContentType: contentType
    }, callback);
  };

  s3Operations.fetchObject = function (bucketName, s3FilePath, callback) {

    typeof callback === "function" || (callback = function () {});

    if (typeof bucketName !== "string" || !bucketName.length) {
      return callback("INVALID_BUCKET_NAME", null);
    }

    if (typeof s3FilePath !== "string" || !s3FilePath.length) {
      return callback("INVALID_S3_FILE_PATH", null);
    }

    return S3.getObject({
      Bucket: bucketName,
      Key: s3FilePath
    }, callback);
  };

  s3Operations.deleteObject = function (bucketName, s3FilePath, callback) {

    typeof callback === "function" || (callback = function () {});

    if (typeof bucketName !== "string" || !bucketName.length) {
      return callback("INVALID_BUCKET_NAME", null);
    }

    if (typeof s3FilePath !== "string" || !s3FilePath.length) {
      return callback("INVALID_S3_FILE_PATH", null);
    }

    return S3.deleteObject({
      Bucket: bucketName,
      Key: s3FilePath
    }, callback);
  };

  module.exports = s3Operations;

})();
