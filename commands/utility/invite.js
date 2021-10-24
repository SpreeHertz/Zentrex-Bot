const Discord = require('discord.js');
const fs = require("fs");
const { PREFIX } = require("../../config");
const db = require('quick.db');
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "invite",
    description: "invite link of bot",
    usage: "1) m/invite \n2) m/inv",
    aliases: ['i']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            const fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX;
            }
 else {
                prefix = fetched;
            }
        }
 catch (e) {
            console.log(e);
    }

if (message.content.toLowerCase() === `${prefix}invite`) {
    const log = new Discord.MessageEmbed()
    .setColor(`FF0000`)
    .setAuthor("BOT SUPPORT","https://media.discordapp.net/attachments/820950216249180170/850232718927069234/compressed-5ce3fc5d-03a0-4c0b-8254-28b4663a9136.png?width=676&height=676")
    .setDescription("[ZENTREX INVITE LINK](https://discord.com/api/oauth2/authorize?client_id=838461715649265724&permissions=536870911991&scope=bot%20applications.commands) | [SUPPORT SERVER](https://discord.gg/AwPNn5EtW2)",true);

message.channel.send(log);
}
}
};