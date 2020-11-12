const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands= new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {
    prefix,
    token,
} = require('./config.json');
client.once('ready', () => {
    console.log('Bot Started!');

});

//keys we cant type for copy paste |\ £`~

client.login(token);

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//when a message is sent:
client.on('message', message => {

    //if the message doesn't start with the prefix ignore it
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    //if the message is by another bot ignore it
    if (message.author.bot) return;
    
    //slices message into command and arguments
    const args = message.content.slice(prefix.length).trim().split(' ');
    const commandName = args.shift().toLowerCase();

    //if message does not have a command section, discard it
    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try{
        command.execute(message, args);
    }catch(error){
        console.error(error);
        message.reply('An error with command handling occured!');
    }


























































});
    


