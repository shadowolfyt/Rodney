const Discord = require('discord.js');
const config = require('../config.json');

module.exports = (message) => {
  let createdAtRaw = message.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");

  let auditlogchannel = message.guild.channels.find('name', 'audit-log');
  if (!auditlogchannel) return;

  let embed = new Discord.RichEmbed()
  .addField(`Message Deleted in ${message.channel}.`, `${message.author.username}: ${message.content}`)
  auditlogchannel.send(embed);

  console.log(`[${message.guild}] A message sent by ${message.author.username} has been deleted: ${message.content}.`);
  return
}
