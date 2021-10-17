const Discord = require("discord.js")
const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
const { PREFIX } = require("../../config")


module.exports = {
  config : {
  name: "help",
  aliases: ["h"],
  description: "Show Help Commands!",
  usage: "help"
  },
  run: async (client, message, args) => {
  prefix = db.fetch(`prefix_${message.guild.id}`)
  const sectionEmbed = new Discord.MessageEmbed()
   .setTitle('Zentrex Help Desk')
   .setColor('FF0000')
   .setDescription(`**\nMy prefix for \`${message.guild.name}\`  is  **` + `  \`_\` \nFor Example :- \`_help\` <command | modules>`)
   .addField('<:give_name:897042368547651605> Fun', 'Shows The List Of Fun Commands')
   .addField('<:give_name:897042368547651605>  Information','Shows The List Of Information Commands')
   .addField('<:give_name:897042368547651605>  Moderation', 'Shows The List Of Moderation Commands.')
   .addField('<:give_name:897042368547651605>  Utility', 'Shows The List Of Utility Commands.')
   .setFooter(client.user.tag, client.user.displayAvatarURL());
 
const infoEmbed = new Discord.MessageEmbed() 
   .setTitle('<:b_redarrow2:897052268728303646> Information Commands.')
   .setColor('FF0000')
   .setDescription(`**\nMy prefix for \`${message.guild.name}\`  is  **_**`)
   .addField('Help Command','_help.')
   .addField('Ping Command', 'For Example :- _ping')
   .addField('Invite Command', 'For Example :- _invite')
   .addField('UpTime Command', 'For Example :- _uptime')
   .addField('BotInfo Command', 'For Example :- _botinfo')
  .addField('Stats Command', 'For Example :- _stats.');
 
const funEmbed = new Discord.MessageEmbed()
   .setTitle('<:b_redarrow2:897052268728303646> Fun Commands.')
   .setColor('FF0000')
   .setDescription(`**\nMy prefix for \`${message.guild.name}\`  is  _`)
   .addField('Ascii Command', 'For Example :- _ascii (message).')
   .addField('Meme Command', 'For Example :- _meme.')
   .addField('Advice Command', 'For Example :- _advice.')
   .addField('EmojiId Command', 'For Example :- _emojiid [emoji].')
    .addField('Hug Command', 'For Example :- _hug [user].')
    .addField('Kiss Command', 'For Example :- _kiss [user].')
    .addField('Jail Command', 'For Example :- _jail [user].')
    .addField('Love Command', 'For Example :- _love [user].')
    .addField('Slap Command', 'For Example :- _slap [user].')
    .addField('MemberCount Command', 'For Example :- _membercount.')
    .addField('Pat Command', 'For Example :- _pat [user].')
    .addField('MineCraft Command', 'For Example :- _minecraft (text).')
    .addField('PlayStore Command', 'For Example :- _playstore [app name].')
    .addField('Rip Command', 'For Example :- _rip [user].')
    .addField('Scroll Command', 'For Example :- _scroll (text).')
    .addField('Qr Command', 'For Example :- _qr (link).')
    .addField('Meme Command', 'For Example :- _meme.')
    .addField('VaporText Command', 'For Example :- _vaportext (text).')
    .addField('Tickle Command', 'For Example :- _tickle [user].')
    .addField('Wasted Command', 'For Example :- _wasted [user].')
    .addField('WhatsApp Command', 'For Example :- _whatsapp [user].')
    .addField('Tweet Command', 'For Example :- _tweet (text).')
    .addField('Triggered Command', 'For Example :- _Triggered [user].')
    .addField('Zalgo Command', 'For Example :- _zalgo (text).')
    .addField('Weather Command', 'For Example :- _weather (city name).')
    .addField('Toilet Command', 'For Example :- _toilet [user].')
    .addField('Scroll Command', 'For Example :- _scroll (text).')
    .addField('Poke Command', 'For Example :- _poke [user].')
    .addField('CowSay Command', 'For Example :- _cowsay (text).')
    .addField('CatSay Command', 'For Example :- _catsay (text).')
    .addField('Covid Command', 'For Example :- _covid (place name).')
    .addField('Clyde Command', 'For Example :- _clyde (text).')
    .addField('Calculate Command', 'For Example :- _calculate (number).')
    .addField('Beautiful Command', 'For Example :- _beautiful [user].')
    .addField('Captcha Command', 'For Example :- _captcha [user].')
    .addField('Gif Command', 'For Example :- _gif (gif name).')
    .addField('Anime Command', 'For Example :- _anime (anime name).')
    .addField('HowGay Command','_howgay [user].')
    .addField('Wink Command', 'For Example :- _wink [user].')
    .addField('CoinFlip Command', 'For Example :- _coinflip.');

const moderationEmbed = new Discord.MessageEmbed()
   .setTitle('<:b_redarrow2:897052268728303646> Moderation Commands.')
   .setColor('FF0000')
   .setDescription(`**\nMy prefix for \`${message.guild.name}\`  is  **` + `  \`**_**`)
   .addField('Ban Command','For Example :- _ban [user] (reason)')
   .addField('Kick Command','For Example :- _kick [user](reason)')
   .addField('Lock Command', 'For Example :- _lock [channel mention]')
   .addField('Mute Command', 'For Example :- _mute {user} (reason)')
   .addField('Nickname Command', 'For Example :- _setnick [user] (name)')
   .addField('Purge Command', 'For Example :- _purge (amount)')
   .addField('ChannelInfo Command', 'For Example :- _channelinfo [channel mention]')
   .addField('CreateChat Command', 'For Example :- _createchat (name)')
   .addField('CreateVc Command', 'For Example :- _createvc (name)')
   .addField('Unban Command', 'For Example :- _unban [user id]')
   .addField('UnbanAll Command', 'For Example :- _unbanall')
   .addField('Role Command', 'For Example :- _role [user] [role mention/id]')
    .addField('RoleCreate Command', 'For Example :- _rolecreate (name)')
    .addField('RemoveRole Command', 'For Example :- _removerole [user id] [role mention/id]')
    .addField('SetModLog Command', 'For Example :- _setmodlog [channel mention]')
    .addField('SetMuteRole Command', 'For Example :- _setmuterole [role mention/id]')
    .addField('SlowMode Command', 'For Example :- _slowmode (reason)');
 
const utilityEmbed = new Discord.MessageEmbed()
   .setTitle('<:b_redarrow2:897052268728303646> Utility Commands.')
   .setColor('FF0000')
   .setDescription(`**\nMy prefix for \`${message.guild.name}\`  is  **` + `  \`**_**`)
   .addField('Whois Command', 'For Example :- _whois (user).')
    .addField('Announce Command', 'For Example :- _announce [channel mention] (message)')
    .addField('ServerInfo Command', 'For Example :- _serverinfo')
    .addField('StealEmoji Command', 'For Example :- _stealemoji [Emoji/emoji id]')
    .addField('Embed Command', 'For Example :- _embed')
    .addField('WideAvatar Command', 'For Example :- _wideavatar [user]')
    .addField('Blur Command', 'For Example :- _Blur [user]')
   .addField('Avatar 2 Command', 'For Example :- _av2 [user]')
    .addField('Afk Command','_afk (reason).')
    .addField('Remove Afk Command','_rafk');
  
if (!args[0]) return message.channel.send(sectionEmbed);
if (args[0] == 'information') return message.channel.send(infoEmbed);
else if (args[0] == 'fun') return message.channel.send(funEmbed);
else if (args[0] == 'utility') return message.channel.send(utilityEmbed);
else if (args[0] == 'moderation') return message.channel.send(moderationEmbed)
  }
};
