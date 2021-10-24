const Discord = require('discord.js');
const config = require('../../config');

module.exports = {
  config : {
    name: "uptime",
    aliases: ["up", "uptime"],
    category: "Info",
    description: "Shows how long I've been online",
    example: `c!uptime` },

    run: async (client, message, args) => {
        const Days = Math.floor(client.uptime / 86400000);
        const Hours = Math.floor(client.uptime / 3600000) % 24;
        const Minutes = Math.floor(client.uptime / 60000) % 60;
        const Seconds = Math.floor(client.uptime / 1000) % 60;
        const RemoveUseless = (Duration) => {
      return Duration.replace("0 Day\n", "").replace("0 Hour\n", "").replace("0 Minute\n", "");
    };
    const Uptime = await RemoveUseless(`\`${Days}\` ${Days > 1 ? "Days" : "Day"} \`${Hours}\` ${Hours > 1 ? "Hours" : "Hour"} \`${Minutes}\` ${Minutes > 1 ? "Minutes" : "Minute"} \`${Seconds}\` ${Seconds > 1 ? "Seconds" : "Second"}`);

    const embed = new Discord.MessageEmbed()
    .setTitle(`My Uptime`)
    .setDescription(`${Uptime}`)
    .setTimestamp();

    await message.reply({ embeds: [embed] });
    }
};