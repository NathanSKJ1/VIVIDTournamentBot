
module.exports = {
    
    name: 'createteam',
    description: 'Creates Team Role with specific permissions.',
    execute(message, args) {
        var server = message.guild;

        server.roles.create({ data: { name: args[0], color: "c31414", permissions: ['CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES', 'EMBED_LINKS'
        ,'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD'] } });

        message.channel.send('Team ' + args[0] + ' created!');



        
        //776513970932416582


    },

};
