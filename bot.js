const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '#';

client.on('ready', () => {

 client.user.setGame(`Winter is here!! `,'https://www.twitch.tv/MeeRcY')
 
 console.log(`Logged in as [ Vida]`);

});
































client.login(process.env.BOT_TOKEN);
