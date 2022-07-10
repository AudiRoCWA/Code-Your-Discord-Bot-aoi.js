const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
    token: "YOUR BOT TOKEN",
    prefix: "YOUR BOT PREFX",
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Event
bot.onMessage()

//Command
bot.command({
    name: "ping",
    code: `ping: $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `Logged in!`
})
