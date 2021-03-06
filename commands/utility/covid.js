const Discord = require('discord.js');
const fetch = import('node-fetch');

module.exports = {
  config : {
    name: "covid",
    category: "Utility",
    aliases: ["corona"],
    description: "Gives you the stats of the covid with your provided code",
    example: `c!covid India`,
  },
    run: async (client, message, args) => {
        const countries = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some args (ex: !!covid all or !!covid Canada or any other country)')
        .setTimestamp();

        if (!args[0]) return message.channel.send(noArgs);

        if (args[0] === "all") {
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                const confirmed = data.confirmed.value.toLocaleString();
                const recovered = data.recovered.value.toLocaleString();
                const deaths = data.deaths.value.toLocaleString();

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths);

                message.reply({ embeds: [embed] });
            });
        }
 else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                const confirmed = data.confirmed.value.toLocaleString();
                const recovered = data.recovered.value.toLocaleString();
                const deaths = data.deaths.value.toLocaleString();

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp();

                message.reply({ embeds: [embed] });
            }).catch(e => {
                return message.channel.send(`${emoji.Error} Invalid country provided`);
            });
        }
    }
};