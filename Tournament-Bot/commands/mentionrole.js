module.exports = {
    
    name: 'mentionrole',
    description: 'When you mention a user it adds them to your team role',
    execute(message, args) {

        var server = message.guild;
        //checks if user has permission to do this command
        if(message.member.roles.cache.some(r => r.name === "Moderator") || (message.member.roles.cache.some(r => r.name === "Team Leader")) || (message.member.roles.cache.some(r => r.name === "Owner"))) {

        

        let member = message.mentions.members.first();
        
        let role = message.guild.roles.cache.find(role => role.name === args[1]);

        member.roles.add(role);

        message.channel.send(args[0] + ' has been added to role ' + args[1]);

        //if they do not have permission, it will let the user know
        }else{
            message.channel.send('You do not have permission to do that!');
        }


    },

}