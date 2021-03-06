const Discord = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    config: {
        name: "reloadmod",
        description: "Reload command- Dev Only",
        aliases: ['rmod']
    },

    run: async (bot, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle("Reload")
        .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
        .setColor("#cdf785");
        if (message.author.id !== '720218422222520410') return message.reply({ embeds: [embed] });

        if (!args[0].toLowerCase()) return message.channel.send("Please provide a command name!");

        const commandName = args[0].toLowerCase();

        try {

          delete require.cache[require.resolve(`./${commandName}.js`)];
          const pull = require(`./${commandName}.js`);
          bot.commands.set(pull.config.name, pull);
          message.channel.send(`Successfully reloaded: \`${commandName}\``);
        }

        catch (e) {
          console.log(e);
          return message.channel.send(`Could not Reload Command: ${commandName} From Moderation Module Because: \n${e}`);
        }


      }
};