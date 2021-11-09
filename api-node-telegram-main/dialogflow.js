const dialogflow=require('dialogflow');
const configs=require('./arieleketely');

const sessionsClient=new dialogflow.sessionsClient({
    projectId:configs.project_id,
credentials:{
    private_key:configs.private_key,
    client_email:configs.client_email
}
});
async function sendMessage(chatId,massage){
    const sessionPath=sessionClient.sessionPath(configs.project_id, chatId);
    const request={
        session:sessionPath,
        queryInput:{
            text:{
            text:message,
            languageCode:'pt-br'
        }
    }
}
const responses=await sessionClient.detectIntent(request);
const result=responses[0].queryResult;
console.log(JSON.stringify(result,null,2))
};
module.exports.sendMessage;