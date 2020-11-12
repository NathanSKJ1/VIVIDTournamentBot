module.exports = {
    name: 'kill',
    description: 'kills the bot',
    execute(message, args) {
        message.channel.send('ENDING BOT').then(() => {
            return process.exit(1);
        });
    },
}