const Discord = module.require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
  config : {
	name: "delchannel",
	description: "Delete Channels From your Server" },
	run: async (client, message, args) => {
	if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
	return message.channel.send("You don't have enough Permissions");
	}
        const fetchedChannel = message.mentions.channels.first();
	if (!fetchedChannel) {
	return message.channel.send("`Usage: <prefix> delchannel <channel>`");
        }
	fetchedChannel.delete();

	const embed = new Discord.MessageEmbed()
	.setTitle("Channel Updates")
	.setDescription ("**Channel has been deleted <:greentick:897041996949123092> **")

	.setColor("RED");

	await message.reply({ embeds: [embed] });
}
};