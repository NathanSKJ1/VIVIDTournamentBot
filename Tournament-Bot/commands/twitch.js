module.exports = {
    name: 'twitch',
    description: 'Sends Twitch Channel Link',
    execute(message, args) {
        message.channel.send('This is where our matches are streamed: https://www.twitch.tv/vividtournaments');
    },

};