const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  config : {
name: "movie",
  description: "Get the information about series and movie",
  category: "info",
  usage: "imdb <name>"
  },
  run: async (client, message, args, color) => {

    if (!args.length) {
      return message.channel.send("Please give the name of movie or series");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" }); // You need to paste you imdb api

    const movie = await imob.get({ 'name': args.join(" ") });

    const embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("RANDOM")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country", movie.country, true)
    .addField("Languages", movie.languages, true)
    .addField("Type", movie.type, true);


    message.reply({ embeds: [embed] });


  }

};