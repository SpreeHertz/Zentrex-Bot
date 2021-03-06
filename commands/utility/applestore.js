const Discord = require('discord.js');
const config = require('../../config');
const AppleStore = require("app-store-scraper");


module.exports = {
    config: {
        name: 'applestore',
        description: '',
        aliases: ["astore"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
 if (!args[0]) {
return message.channel.send(
        `Please Give Something To Search - ${message.author.username}`
      );
}

    AppleStore.search({
      term: args.join(" "),
      num: 1,
      lang: 'en-us'
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      }
 catch (error) {
        return message.channel.send(
          `No Application Found - ${message.author.username}!`
        );
      }

      const Description = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description;
      const Price = App.free ? "FREE" : `$${App.price}`;
      const Score = App.score.toFixed(1);

      const Embed = new Discord.MessageEmbed()
        .setColor(config.embedcolor)
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(Description)
        .addField(`Price`, Price, true)
        .addField(`Developer`, App.developer, true)
        .addField(`Score`, Score, true)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp();

      return message.reply({ embeds: [embed] });
    });
    }
};
