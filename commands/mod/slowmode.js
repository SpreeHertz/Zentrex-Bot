module.exports = {
    config: {
          name: "slowmode",
          description: "Set the slowmode for the channel!",
          aliases: ['sm']
    },
  run: async (bot, message, args) => {

    if (!args[0]) {
return message.channel.send(
        `<:error:897857752276299797> ERROR :- You did not specify the time in seconds you wish to set this channel's slow mode too!\nusage :- _slowmode [amount]`
      );
}

    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);

    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      `Set the slowmode of this channel to **${args[0]}<:greentick:897041996949123092> **`
    );
  },
};