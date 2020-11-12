const Discord = require('discord.js');
module.exports = {
    name: 'embed',
    description: 'tests embed',
    execute(message, args) {
        message.channel.send("Embed command");

        const steamurl = "https://steamcommunity.com/id/reerooreerooreerooreeroo";
        const xmlurl = steamurl + "xml=1";
        
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        message.channel.send(xmlHttp.responseText);

        const testEmbed = new Discord.MessageEmbed()
        .setAuthor("Test", "");
        message.channel.send({embed: testEmbed});
    },
}