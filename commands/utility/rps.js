const discord = require('discord.js');
const colors = require('colors');

module.exports = {
  config: {
    name: "rps",
    aliases: ["rockpaperscissor", "rock-paper-scissor"],
    description: "play a game of rock, paper and scissors",
  },
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()
      .setTitle("RPS GAME")
      .setDescription("React to play!")
      .setTimestamp()
      .setFooter("Rock Paper Scissor | Prefix:_rps");

    const msg = await message.reply({ embeds: [embed] });
    await msg.react("🗻");
    await msg.react("✂");
    await msg.react("📰");

    const filter = (reaction, user) => {
      return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    const choices = ['🗻', '✂', '📰'];
    const me = choices[Math.floor(Math.random() * choices.length)];
    msg.awaitReactions(filter, { max: 1, time: 60000, error: ["time"] }).then(
      async (collected) => {
        const reaction = collected.first();
        const result = new discord.MessageEmbed()
          .setTitle("RESULT")
          .addField("Your choice", `${reaction.emoji.name}`)
          .addField("My choice", `${me}`);
        await msg.edit(result);
        if ((me === "🗻" && reaction.emoji.name === "✂") ||
          (me === "📰" && reaction.emoji.name === "🗻") ||
          (me === "✂" && reaction.emoji.name === "📰")) {
          message.reply("You lost!");
        }
 else if (me === reaction.emoji.name) {
          return message.reply("It's a tie!");
        }
 else {
          return message.reply("You won!");
        }
      })
      .catch(collected, error => {
        message.reply('Process has been cancelled since you did not respond in time!');
      });
  }
};