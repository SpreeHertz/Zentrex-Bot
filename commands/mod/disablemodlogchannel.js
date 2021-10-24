const db = require('quick.db');
const { Permissions } = require('discord.js');

module.exports = {
    config: {
        name: "disablemodlogchannel",
        aliases: ['dmc', 'disablem', 'disablemodlog'],
        category: 'moderation',
        description: 'Disables Server Modlog Channel',
        usage: '[channel name | channel mention | channel ID]',
        accessableby: 'Administrators'
    },
    run: async (bot, message, args) => {
        if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**");

        try {
            const a = db.fetch(`modlog_${message.guild.id}`);

            if (!a) {
                return message.channel.send('**There Is No Modlog Channel Set To Disable!**');
            }
 else {
                const channel = message.guild.channels.cache.get(a);
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Welcome Channel Disabled!**");
                db.delete(`modlog_${message.guild.id}`);

                message.channel.send(`**Modlog Channel Has Been Successfully Disabled in \`${channel.name}\` <:greentick:897041996949123092> **`);
            }
            return;
        }
 catch {
            return message.channel.send("**Error - `Missing Permissions or Channel Doesn't Exist`**");
        }
    }
};