const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  config : {
  name: "purge",
  aliases: ["purge"],
  description: "Purges message!",
  usage: "purge"
  },
      run: async (client, message, args) => {

        if(!args[0]) return message.reply('**<:error:897857752276299797> Error :- Please enter the amount of messages you want to clear!**\n`usage :- _purge {amount}`');
        if(isNaN(args[0])) return message.reply('Please enter a real number!');

        if(args[0] > 100) return message.reply('You cannot delete more than 100 messages!');
        if(args[0] < 1) return message.reply('To delete messages please delete atleast 1 message.');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{

            message.channel.bulkDelete(messages);
        });
    }




} // Made by Thalaiva```
