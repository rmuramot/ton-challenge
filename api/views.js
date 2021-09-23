'use strict';

const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const countapi = require('countapi-js');

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.increment = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'views increment endpoint',
            input: event,
        }),
    };
    
    callback(null, response);
};

module.exports.list = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'views list endpoint',
            input: event,
        }),
    };
    
    callback(null, response);
};