module.exports = {
    
    name: 'test',
    description: 'Test Command',
    execute(message, args) {
        message.channel.send('TEST');
    },

};