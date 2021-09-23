'use strict';

const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.increment = (event, context, callback) => {};

module.exports.list = (event, context, callback) => {};