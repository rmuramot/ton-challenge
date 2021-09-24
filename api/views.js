'use strict';

const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const countapi = require('countapi-js');

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.increment = (event, context, callback) => {
    countapi.hit('no45v3mkxa.execute-api.us-east-1.amazonaws.com', 'dev', 'v1', 'views')
        .then(res => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Sucessfully incremented'
            })
        });
    })
    .catch(err => {
        console.log(err);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Unable to increment'
            })
        })
    });
};

module.exports.list = (event, context, callback) => {
    countapi.get('no45v3mkxa.execute-api.us-east-1.amazonaws.com', 'dev', 'v1', 'views')
        .then(res => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: JSON.stringify(res) 
            })
        });
    })
    .catch(err => {
        console.log(err);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Unable to get the views.'
            })
        })
    });
};
