const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: "warn",
        description: "warn members",
        usage: "m/warn <mention member/member id> [reason]",
        aliases: []
    },
    run: async (bot, message, args) => {
        let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! <:EXE_cross:897051329296465940> **")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("**<:error:897857752276299797> ERROR :- Please mention a valid member of this server**\n`usage :- _warn [user] (reason)`");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            
            member.send(`**You have been warned by <${message.author.username}> for this reason: ${reason}** `)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}<:greentick:897041996949123092> `)

            message.channel.send(warnEmbed)

    }
}