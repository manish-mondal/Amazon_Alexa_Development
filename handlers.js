const Alexa1 = require('ask-sdk')
//const Send = require('./sns_publishtotopic')
Send = () => {


} 
exports.LaunchRequestHandler = {

    canHandle(handlerInput)
    {
        return Alexa1.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'

    },

    handle(handlerInput)
    {
        const speechText = 'Welcome to the developlemt launcher. Ask me do something.'

        return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
    }


}
 
exports.DeployIntent = {
    canHandle(handlerInput){

        return Alexa1.getRequestType(handlerInput.requestEnvelope)  === 'IntentRequest' &&
        Alexa1.getIntentName(handlerInput.requestEnvelope) === 'DeployIntent'

    },

 async handle(handlerInput)
    {
       // const deployText =   Alexa1.geten(handlerInput.requestEnvelope.requst.intent.slots.environment.value)
        
/*
        var sns = new Alexa1.SNS();
        var params = {
            Message: "This is a  SNS From AWS Lambda.", 
            Subject: "Alexa",
            TopicArn: "arn:aws:sns:us-east-1:253773740391:AlexaTrigger"
        };

        sns.publish(params).promise();

*/
var snsSendMessage  = 'done';
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

// Create publish parameters
var params = {
  Message: 'This is a  SNS From AWS Lambda.', /* required */
  TopicArn: 'arn:aws:sns:us-east-1:253773740391:AlexaTrigger'
};

// Create promise and SNS service object
var publishTextPromise = await new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    snsSendMessage =  `Message sent to the topic `;
  //  console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    //console.error(err, err.stack);
    snsSendMessage = 'not send';

});


        const speechText =  "i am sending email to your outlook through aws lambda and aws sns service"
        return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse()
     }

}


exports.HelpIntentHandeler = {

    canHandle(handlerInput){

        return  Alexa1.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
        Alexa1.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'

    },

    handle(handlerInput)
    {
        const speechText = 'use deployment manish command for deployment intent'

        return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse()
    }


}

exports.CancleAndStopIntentHandler = {
    canHandle(handlerInput){

        return Alexa1.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
        Alexa1.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' || 

        Alexa1.getIntentName(handlerInput.requestEnvelope)=== 'AMAZON.StopIntent'

    },


    handle(handlerInput)
    {
        const speechText = 'it was a great time taking with you'

        return handlerInput.responseBuilder
                .speak(speechText)
                .withShouldEndSession(true)
                .getResponse()
    }


}
