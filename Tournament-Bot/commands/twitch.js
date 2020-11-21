module.exports = {
    name: 'twitch',
    description: 'Sends Twitch Channel Link',
    execute(message, args) {
        message.channel.send('This is our Twitch Channel Link: https://www.twitch.tv/vividtournaments');
    },

};