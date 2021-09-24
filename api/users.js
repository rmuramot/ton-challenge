'use strict';

const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.submit = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    const fullname = requestBody.fullname;
    const email = requestBody.email;
    const phone = requestBody.phone;

    if (typeof fullname !== 'string' || typeof email !== 'string' || typeof phone !== 'number'){
        console.error('Validation Failed');
        callback(new Error('Couldn\'t submit user, check if the fields were correctly filled.'))
        return;
    }

    submitUsers(userInfo(fullname, email, phone))
        .then(res => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'User sucessfully registered. User ID ' + res.id
                })
            });
        })
        .catch(err => {
            console.log(err);
            callback(null,{
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Couldn\'t submit user.'
                })
            })
        });
};

module.exports.get = (event, context, callback) => {
    const params = {
        TableName: process.env.USERS_TABLE,
        Key: {
            id: event.pathParameters.id,
        },
    };

    dynamoDb.get(params).promise()
        .then(result => {
            const response ={
                statusCode: 200,
                body: JSON.stringify(result.Item),
            };
            callback(null, response);
        })
        .catch(error => {
            console.error(error);
            callback(new Error('Couldn\'t found user.'));
            return;
        });
};

const submitUsers = user =>{
    console.log('Submitting user');
    const userInfo = {
        TableName: process.env.USERS_TABLE,
        Item: user,
    };
    return dynamoDb.put(userInfo).promise()
        .then(res => user);
};

const userInfo = (fullname, email, phone) => {
    const timestamp = new Date().getTime();
    return {
        id: uuidv4(),
        fullname: fullname,
        email: email,
        phone: phone,
        submittedAt: timestamp,
        updatedAt: timestamp,
    };
};