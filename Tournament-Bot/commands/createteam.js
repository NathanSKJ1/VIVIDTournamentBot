
module.exports = {
    
    name: 'createteam',
    description: 'Creates Team Role with specific permissions.',
    args: true,
    execute(message, args) {
        
        //let ownerRole = server.roles.get('776150055697514547');
        //let moderatorRole = message.guild.roles.get('123456789');
        var server = message.guild;

        if(message.member.roles.cache.some(r => r.name === "Moderator") || (message.member.roles.cache.some(r => r.name === "Owner"))) {
        //role creation

        server.roles.create({
            data: {
              name: args[0],
              color: 'c31414',
              permissions: ['CREATE_INSTANT_INVITE', 'CHANGE_NICKNAME', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES', 'EMBED_LINKS'
              ,'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD']
            },
            reason: 'Team role for ' + args[0],
          }).then(role => {
              role.id // you have access to the role inside `.then()`
          })

          message.channel.send('Team ' + args[0] + ' created!');
            

        
        //channel creation
        server.channels.create(args[0]+' text', {
            type: 'text',
            permissionOverwrites: [
                {
                  id: '778752790834708489',
                  deny: ['VIEW_CHANNEL'],
               },
             ],
            parent: '780423382679289856',
          })

        }else{
            message.channel.send('You do not have permission to do that');
        }

    },

};
