const discord = require('discord.js');
const db = require('old-wio.db');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
	config: {
		name: 'serverinfo',
		aliases: ['si', 's-info'],
		category: 'info',
		description: 'Shows the detailed info about the server',
		usage: 'serverinfo'
	},
	run: async (bot, message, args) => {
		const roles = message.guild.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
		const regions = {
			brazil: '🇧🇷 Brazil',
			europe: '🇪🇺 Europe',
			hongkong: '🇭🇰 Hong Kong',
			india: '🇮🇳 India',
			japan: '🇯🇵 Japan',
			russia: '🇷🇺 Russia',
			singapore: '🇸🇬 Singapore',
			southafrica: '🇿🇦 South Africa',
			sydeny: 'Sydeny',
			'us-central': 'US Central',
			'us-east': 'US East',
			'us-west': 'US West',
			'us-south': 'US South'
		};

		const embed = new MessageEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setColor('RED')
			.addField('👑 Owner', message.guild.owner.user.tag)
			.addField('<:white_arrow:897051970257448970> Region', regions[message.guild.region])
			.addField(
				'<:b_tag:897062641518936064> Channel Categories',
				channels.filter(channel => channel.type === 'category').size
			)
			.addField(
				'<:b_tag:897062641518936064> Text Channels',
				channels.filter(channel => channel.type === 'text').size
			)
			.addField(
				'<:b_tag:897062641518936064> Voice Channels',
				channels.filter(channel => channel.type === 'voice').size
			)
			.addField('<:b_redarrow:897062663539023923> Members', message.guild.memberCount)
			.addField('<:b_redarrow:897062663539023923> Roles', roles.length)
			.setFooter(
				`ID: ${message.guild.id} | Server Created - ${moment(
					message.guild.createdTimestamp
				).format('LT')} ${moment(message.guild.createdTimestamp).format(
					'LL'
				)} ${moment(message.guild.createdTimestamp).fromNow()}`
			);
		message.reply({embeds: [embed]});
	}
};
