module.exports = {
    name: 'args-info',
    description: 'Info about the arguments',
    args: true,
    execute(message, args) {
        if(args[0] ==='pog'){
            return message.channel.send('champ');
        }

        message.channel.send('Invalid Argument!');
    },

};