const Discord = module.require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
  config : {
    name: "createchat",
    description: "Create Voice Channels in your Server" },
    run: async (client, message , args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
    return message.channel.send("You don't have enough Permissions");
}
    if (!args[0]) {
    return message.channel.send("** <:error:897857752276299797> Error :- Please mention the name for the Channel**\n`-usage :- _createchat (name)`");
}
    message.guild.channels.create(args.slice(0).join(" "), { type: "chat" });

    const embed = new Discord.MessageEmbed()
    .setTitle("Channel Updates")
    .setDescription(`Channel has been created <:greentick:897041996949123092> `)
    .setColor("FF0000");
  message.reply({ embeds: [embed] });
}
};