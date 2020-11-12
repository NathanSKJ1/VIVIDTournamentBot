module.exports = {
    name: 'link',
    description: 'link command',
    execute(message, args) {
        message.channel.send(args);
    },

};