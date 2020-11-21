
module.exports = {
    
    name: 'createteam',
    description: 'Creates Team Role with specific permissions.',
    args: true,
    execute(message, args) {
        //let ownerRole = server.roles.get('776150055697514547');
        //let moderatorRole = message.guild.roles.get('123456789');
        var server = message.guild;

        if(message.member.roles.cache.some(r => r.name === "Mod")) {
        //role creation
        server.roles.create({ data: { name: args[0], color: "c31414", permissions: ['CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES', 'EMBED_LINKS'
        ,'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD'] } });
        message.channel.send('Team ' + args[0] + ' created!');
        
        //channel creation\
        message.channel.send('Channel Created!');
        server.channels.create(args[0] + ' text', "text");

        }else{
            message.channel.send('You do not have permission to do that');
        }


        
        //776513970932416582


    },

};
