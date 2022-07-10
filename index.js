const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
    token: "YOUR BOT TOKEN",
    prefix: "YOUR BOT PREFIX",
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Event
bot.onMessage()

//Command
bot.command({
    name: "ping",
    code: `$title[Bot's Ping]
    $description[ping: $pingms]
    $color[RANDOM]
    $footer[Made by AudiRo]`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `Logged in!`
})
