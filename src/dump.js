
const AWS = require('aws-sdk');

//initialise dynamoDB client
const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region:'ap-southeast-1',
    apiVersion:'2012-08-10'
});



exports.handler = async (event) => {

    console.log(event)
      //messages coming in from SQS are available on the 'Records' array property of the event object:
      const {Records} = event;
      //parse and extract the content of the message:
      const body = Records[0].body; // in this case, only one item is present in the Records array
      
      //logging the incoming message body (view in cloudwatch):
      console.log("Incoming message body from SQS :", body); 
      
      //configure params for writing data to dynamo DB:
      const params = {
          TableName:'cloudresume-skipper-contact-form',
          Item:{
              Name : body.name,
              Email : body.email,
              Message : body.message
          } 
      };
      console.log(params.Name);
      console.log(params.Email);
      console.log(params.Message);
 dynamoDB.put(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
};
      
      //success logging to cloudwatch: