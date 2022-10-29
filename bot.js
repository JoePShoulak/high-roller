require("dotenv").config();

const path = require("path");
const fs = require("fs");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commandPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandPath)
  .filter((file) => file.endsWith(".js"));

const commands = {};
for (const file of commandFiles) {
  const filePath = path.join(commandPath, file);
  const fileTitle = file.split(".")[0];
  const command = require(filePath);
  commands[fileTitle] = command;
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.channelId != "1035716879131619428") {
    return await interaction.reply("This bot is not allowed in this channel");
  }

  commands[interaction.commandName](interaction);
});

client.login(process.env.BOT_TOKEN);
