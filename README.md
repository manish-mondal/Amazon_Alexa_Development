# Amazon_Alexa_Development
New custom alexa skill with node js. and AWS Lambda
Project Alexa

Automated appropriate customized reply from Amazon Alexa using AWS lambda service and Send Email to a person basis of the Amazon Alexa command using AWS Lambda.

Tasks and Steps:
•	IAM Role: 
1.	Creation: Created an IAM user to access the Lambda function and SNS service.
2.	Policy: created a new policy for the above services
3.	Permission to the policy: Given AWS Lambda and Cloud watch and Amazon SNS services full access to the IAM role.

•	AWS Lambda Function: 
1.	Function creation: From AWS Lambda dashboard “Create Function” button pressed to create the lambda function. Gave “Function Name”, Runtime as “Node js14x”, Architecture as default then created the function named “projectIPskill”
2.	Add Trigger: Added Alexa Skills set in the trigger of the Lambda function.
3.	Code details: To write function I have used NodeJS and JavaScript. I have written function code in vscode in “Index.js” and “Handlers.js” file.
4.	Code: This index.js file has the handler function which will take the command from the Alexa app and run every function. Every function will return with the appropriate command with the help of the recognition of the Intents of Amazon Alexa.
5.	Upload code:  Uploaded the code in the .zip file to the Lambda function. 
6.	Test: I have tested the lambda function with Amazon Alexa skill.

•	Cloud Watch: 
1.	Create: Created the cloud watch to monitor the lambda function.
2.	Monitor: To monitor the Lambda function and to the resolve the errors occurred in the AWS lambda function I have used the Cloud Watch’s “view logs options”. Each trigger of the Lambda function will create the log in cloud watch.

•	Amazon SNS: 
1.	Creation: I have created the Amazon SNS service with Name, Type and Display name options.
2.	Subscriptions: I have created SNS subscription with Topic ARN, Protocol as Email and Endpoint with my email address.
3.	Email send: I have created the AWS Lambda function code to send Email to the subscription based on the ARN of the Topic.
4.	Policy: Given SNS full access policy to the IAM role to access the Amazon SNS service to send the email to the subscriptions.





