const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
  config : {
    name: 'role',
    description: 'Add or remove a role to a user',
    category: 'moderation',
     aliases: ['r'],
    usage: 'c!<user mention, id or username> <role name, id or mention>',
    aliases: [],
    botPermission: ['MANAGE_ROLES'],
    authorPermission: ['MANAGE_ROLES'],
    testOnly: false,
    ownerOnly: false
  },
    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(x => x.name.toLowerCase() === args.slice(1).join(" ") || x.name === args[1]);

        if (!user) {
          const embed = new MessageEmbed()
               .setDescription(`**<:error:897857752276299797> Error :- need to specify a valid member**\nusage :- _role [user mention/id] (role mention/id)`)
               .setColor('YELLOW');
            return message.reply({ embeds: [embed] });
        }

        if (!role) {
           const embed = new MessageEmbed()
          .setDescription(`You need to specify a valid role`)
               .setColor('YELLOW');
            return message.reply({ embeds: [embed] });
        }

        if (message.guild.me.roles.highest.id === role.id) {
            return message.channel.send(`I cannot add or remove that role because that is my highest role`);
}


        if (user.roles.cache.has(role.id)) {
            try {
                user.roles.remove(role.id);

           const embed = new MessageEmbed()
          .setDescription(`Changed roles for ${user.user.tag}, -${role.name} <:EXE_tick:897051390776573973> `)
               .setColor('GREEN');
            return message.reply({ embeds: [embed] });


            }
            catch (e) {
                return message.channel.send(`There was an error: ${e} <:EXE_cross:897051329296465940> `);
            }
        }
 else {
            try {
                user.roles.add(role.id);
           const embed = new MessageEmbed()
          .setDescription(`Changed roles for ${user.user.tag}, +${role.name} <:EXE_tick:897051390776573973> `)
               .setColor('GREEN');
            return message.reply({ embeds: [embed] });


            }
            catch (e) {
                return message.channel.send(`There was an error: ${e} <:EXE_cross:897051329296465940> `);
            }
        }
    }
};