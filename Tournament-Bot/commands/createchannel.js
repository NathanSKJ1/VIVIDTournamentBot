module.exports = {
    
    name: 'createchannel',
    description: 'creates channel',
    args: true,
    execute(message, args) {
        message.channel.send('Channel Created!');
        var server = message.guild;
        server.channels.create(args[0], "text/voice");
    },

};