module.exports = {
    name: 'roster',
    description: 'Returns users roster',
    team_roster: ['player1','player2','player3','player4','player5'],
    execute(message, args) {
        message.channel.send("test");
    },

};