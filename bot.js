require("dotenv").config();

/* == PART 1 == */
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "d20",
    description: "Replies with a random number between 1 and 20!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID.toString()),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

/* == PART 2 == */
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "d20") {
    const num = Math.ceil(Math.random() * 20);
    await interaction.reply(num.toString());
  }
});

client.login(process.env.BOT_TOKEN);
