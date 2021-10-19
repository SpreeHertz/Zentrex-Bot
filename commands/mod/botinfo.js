const db = require("old-wio.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
config: {
  name: "botinfo",
  category: "info",
  aliases: ['binfo', 'botstats', 'stats'],
  description: 'Check\'s bot\'s status',
},
  run: async (bot, message, args) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('FF0000')
            .setAuthor(`${bot.user.username} v${version}`, bot.user.displayAvatarURL())
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .addField('<:shield_zentrex:897075016204697601> __Uptime__ :', `**${ms(bot.uptime)}**`, true)
            .addField('<:shield_zentrex:897075016204697601> __WebSocket Ping__ :', `**${bot.ws.ping}ms**`, true)
            .addField('<:shield_zentrex:897075016204697601> __Memory__ :', `**${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap**`, true)
            .addField('<:shield_zentrex:897075016204697601> __Server Count__ :', `**${bot.guilds.cache.size} Server(s)**`, true)
            .addField(`<:shield_zentrex:897075016204697601> __User Count__ :`, `**${bot.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} users**`, true)
            .addField('<:shield_zentrex:897075016204697601> __Commands__ :', `**${bot.commands.size} Commands**`,true)
            .addField('<:shield_zentrex:897075016204697601> __Node__ :', `**${process.version} on ${process.platform} ${process.arch}**`, true)
            .addField('<:shield_zentrex:897075016204697601> __Cached Data__ :', `**${bot.users.cache.size} users\n${bot.emojis.cache.size} emojis**`, true)
            .addField('<:shield_zentrex:897075016204697601> __Discord.js__ :', `**${discordjsVersion}**`, true)
            .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({
              dynamic: true
            }))
            .setTimestamp()
        );
    }
}