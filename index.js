const Alexa = require('ask-sdk')

const 

    {
        LaunchRequestHandler,
      DeployIntent,
       HelpIntentHandeler,
        CancleAndStopIntentHandler, 
    } = require('./handlers')  
let skill

exports.handler = async (event,context) =>{

    if(!skill)
    {

        
        skill = Alexa.SkillBuilders.custom()
                                    .addRequestHandlers( 
                                        LaunchRequestHandler,
                                        DeployIntent,
                                        HelpIntentHandeler,
                                        CancleAndStopIntentHandler, 
                                       )
                                    .create()

    }

    const response = await skill.invoke(event,context)
    return response
}

