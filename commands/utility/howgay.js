const db = require("old-wio.db");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  config: {
  name: "howgay",
  aliases: [""],
  category: "fun",
  description: "Shows How Member Gay Is!",
  usage: "howgay <Mention Member>",
  },
  run: async (bot, message, args) => {
    // Start

    const Member =
      message.mentions.users.first() ||
      message.guild.member(args[0]) ||
      message.author;

    const Result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
      .setColor("FF0000")
      .setTitle(`About your Gayness`)
      .setDescription(`${Member.username} Is ${Result}% Gay ðŸ³ï¸â€ðŸŒˆ`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.reply({ embeds: [embed] });

    // End
  }
};
