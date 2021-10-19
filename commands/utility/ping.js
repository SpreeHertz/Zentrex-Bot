const Discord = require("discord.js");

module.exports = {
    config: {
        name: "ping",
        description: "Shows ping of the bot",
        category: 'utility',
        usage: "ping",
        example: "ping",
        aliases: ['']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "ðŸ” I think my ping is high...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Pong!", message.author.avatarURL({ dynamic: true }))
    .addField("API Latency", Math.round(bot.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms")
    .setColor("FF0000");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};