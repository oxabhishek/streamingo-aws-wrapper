



# Streamingo-AWS-Wrapper

Streamingo-AWS-Wrapper is a wrapper for the [aws-sdk](https://www.npmjs.com/package/aws-sdk) that provides the easiest way to interact with Amazon Web Services. It is only built to be used with S3 as of now but the package will get its upgrades for other services over time.

For Github, visit <https://github.com/oxabhishek/streamingo-aws-wrapper>
Branch `master` is current stable.

For reporting a bug, visit <https://github.com/oxabhishek/streamingo-aws-wrapper/issues>


- [Installation](#installation)
- [Setup](#setup)
- [s3](#indexing)
  - [Uploading an object](#uploading-an-object)
  - [Removing an object](#removing-an-object)
  - [Fetching an object](#fetching-an-object)

## Installation

The latest version of this package will work with as close as possible to the latest `aws-sdk` package.

```bash
npm install --save streamingo-aws-wrapper
```

## Setup

#### Credentials:
Please make sure you have the ~/.aws/credentials file placed in the home directory. It only supports this way of adding credentials as of now. Please follow the provided [documentation](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html).

#### Requiring the module:
```javascript
var SAW = require("streamingo-aws-wrapper");
```

## S3

### Uploading an object
Uploading an object is as simple as invoking the upload function from the SAW.s3 class.
```javascript
SAW.s3.upload(bucketName, s3FilePath, content, contentType, callback);
```
The following are the details of the parameters:
* bucketName - name of the S3 bucket where the file needs to be stored
* s3FilePath - the hierarchical storage location path of the file
* content - the actual content of the file
* contentType - contentType of the file which defaults to `binary/octet-stream` which makes it downloadable when requested with the S3 URL. This when not passed and replaced with a callback function, it will be set to the default value. Eg:
 ```javascript
 SAW.s3.upload(
	 "my-file-store",
	 "/path/to/file.pdf",
	 "<file content here>",
	 function (err, resp) {}
);
 ```
 Here we have'nt passed the contentType, hence it will default to `binary/octet-stream`
* callback - on upload response, the callback will be invoked.


### Removing an object
Deleting or removing an object is as simple as invoking the delete function from the SAW.s3 class.
```javascript
SAW.s3.delete(bucketName, s3FilePath, callback);
```
The following are the details of the parameters:
* bucketName - name of the S3 bucket where the file is stored
* s3FilePath - the hierarchical storage location path of the file.
 
 Example:
 ```javascript
 SAW.s3.delete(
	 "my-file-store",
	 "/path/to/file.pdf",
	 function (err, resp) {/* handle callback response */}
);
 ```


### Fetching an object
Fetching an object is as simple as invoking the fetch function from the SAW.s3 class.
```javascript
SAW.s3.fetch(bucketName, s3FilePath, callback);
```
The following are the details of the parameters:
* bucketName - name of the S3 bucket where the file is stored
* s3FilePath - the hierarchical storage location path of the file.
 
 Example:
 ```javascript
 SAW.s3.fetch(
	 "my-file-store",
	 "/path/to/file.pdf",
	 function (err, resp) {/* handle callback response */}
);
 ```
This is all the module supports for now. Upgrades will be added over time.
