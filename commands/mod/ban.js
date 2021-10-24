const { MessageEmbed } = require('discord.js');
const db = require('old-wio.db');
const { ownerID } = require("../../owner.json");
const { Permissions } = require('discord.js');

module.exports = {
    config: {
        name: "ban",
        category: 'mod',
        aliases: ["b", "banish"],
        description: "Bans the user",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
    },
    run: async (bot, message, args) => {
        try {
            if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS) && !ownerID .includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!args[0]) return message.channel.send("**<:error:897857752276299797> Error :- Please Provide A User To Ban!**\n`-usage :- _ban [user] (reason)`");


            const banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild**");
            if (banMember === message.member) return message.channel.send("**You Cannot Ban Yourself**");

            const reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**I Cant Ban That User**");
            try {
            message.guild.members.ban(banMember);
            banMember.send(`** You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).catch(() => null);
            }
 catch {
                message.guild.members.ban(banMember);
            }
            if (reason) {
            const sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** has been banned for ${reason}`);
            message.channel.send(sembed);
            }
 else {
                const sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** has been banned`);
            message.channel.send(sembed2);
            }
            const channel = db.fetch(`modlog_${message.guild.id}`);
            if (channel == null) return;

            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "ban")
                .addField("**Banned**", banMember.user.username)
                .addField("**ID**", `${banMember.id}`)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            const sChannel = message.guild.channels.cache.get(channel);
            if (!sChannel) return;
            sChannel.send({ embeds: [embed] });
        }
 catch (e) {
            return message.channel.send(`**${e.message}**`);
        }
    }
};