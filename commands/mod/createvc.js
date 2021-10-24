const Discord = module.require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
  config : {
    name: "createvc",
    description: "Create Voice Channels in your Server" },
    run: async (client, message , args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
    return message.channel.send("You don't have enough Permissions");
}
    if (!args[0]) {
    return message.channel.send("**<:error:897857752276299797> Error Please mention the name for the Channel**\n`usage :- _createvc (name)`");
}
    message.guild.channels.create(args.slice(0).join(" "), { type: "voice" });

    const embed = new Discord.MessageEmbed()
    .setTitle("Channel Updates")
    .setDescription(`Channel has been created <:greentick:897041996949123092> `)
    .setColor("RED");
  message.reply({ embeds: [embed] });
}
};