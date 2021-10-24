const db = require('quick.db');
const { Permissions } = require('discord.js');

module.exports = {
    config: {
        name: "disablemuterole",
        aliases: ['clearmuterole', 'dmr', 'disablemr', 'dmrole'],
        description: 'Disables Server Mute Role',
        usage: '[role name | role mention | role ID]',
    },
    run: async (bot, message, args) => {
        if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**");

        try {
            const a = db.fetch(`muterole_${message.guild.id}`);

            if (!a) {
                return message.channel.send("**There Is No Muterole Set To Disable!**");
            }
 else {
                const role = message.guild.roles.cache.get(a);
                db.delete(`muterole_${message.guild.id}`);

                message.channel.send(`**\`${role.name}\` Has Been Successfully Disabled <:greentick:897041996949123092> **`);
            }
            return;
        }
 catch {
            return message.channel.send("**Error - `Missing Permissions or Role Doesn't Exist`**");
        }
    }
};