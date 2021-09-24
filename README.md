# ton-challenge

This is an API built with serverless archtecture (API Gateway + Lambda + DynamoDB).
Ton-challenge were built to:
 - Count the number of pageviews
 - List the number of pageviews
 - Create a user account
 - List user details

 #How to use

 Use the following endpoints:
 - To increment pageview:
    POST - https://no45v3mkxa.execute-api.us-east-1.amazonaws.com/dev/v1/views

    Result may look like:
    > {
    >   "message": "Sucessfully incremented"
    > }
#

 - To list the nubmer of pageviews:
    GET - https://no45v3mkxa.execute-api.us-east-1.amazonaws.com/dev/v1/views

    Result may look like:
    > {
    >   "message": "This website has been visited 6 times."
    > }
#

 - To create an user account:
    POST - https://no45v3mkxa.execute-api.us-east-1.amazonaws.com/dev/v1/users

    The body must contain:
    //phone: only numbers
    > {
    >   "fullname": "",
    >   "email": "",
    >   "phone": 
    > }

    Example:
    > {
    >   "fullname": "Huberson Poirtas",
    >   "email": "huberpoirtas@gmail.com",
    >   "phone": 21987685544
    > }

    Result may look like:
    > {
    >   "message": "User sucessfully registered. User ID 0587ed3f-809f-4f1c-bbfb-5b0be7e32b0b"
    > }
#

 - To list an user account:
    GET - https://no45v3mkxa.execute-api.us-east-1.amazonaws.com/dev/v1/users/{id}

    Result may look like:
    > {
    >   "updatedAt": 1632505406461,
    >   "id": "618ba62b-13c1-4251-b86f-46ac8efd7eed",
    >   "email": "huberpoirtas@gmail.com",
    >   "fullname": "Huberson Poirtas",
    >   "phone": 21987685544,
    >   "submittedAt": 1632505406461
    > }