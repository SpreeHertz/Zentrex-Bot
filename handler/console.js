module.exports = (bot, message) => {
    const prompt = process.openStdin();
    prompt.addListener("data", res => {
        const x = res.toString().trim().split(/ +/g);
            bot.channels.cache.get(message.channel.id).send(x.join(" "));
        });
    };