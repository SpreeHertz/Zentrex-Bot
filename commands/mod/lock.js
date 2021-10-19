const Discord = require('discord.js');
const { Console } = require('console');
const { Permissions } = require('discord.js')

module.exports = {
    config: {
        name: "lock",
        description: "lock channel",
        aliases: []
    },
    run: async (bot, message, args) => {
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) ) return message.channel.send({embeds: [lockPermErr]});

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`Done | Channel Locked!<:greentick:897041996949123092> `);
    }
}