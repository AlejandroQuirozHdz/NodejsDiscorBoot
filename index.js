//ID 544050660107091999
//Toke NTQ0MDUwNjYwMTA3MDkxOTk5.D0FeiA.J-R09UfYMYhd4t3SuQPfhy2IUow

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NTQ0MDUwNjYwMTA3MDkxOTk5.D0FeiA.J-R09UfYMYhd4t3SuQPfhy2IUow');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', msg => {
    if (msg.content === 'Hola') {
      msg.reply('Hola!');
    }
    if (msg.content === 'Como estas ?') {
        msg.channel.send('Bien y tu ?');
      }
  });

  