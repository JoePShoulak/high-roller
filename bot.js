require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.channelId != "1035716879131619428") {
    return await interaction.reply("This bot is not allowed in this channel");
  }

  if (interaction.commandName === "d20") {
    const num = Math.ceil(Math.random() * 20);
    await interaction.reply(num.toString());
  }
});

client.login(process.env.BOT_TOKEN);
