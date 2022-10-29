require("dotenv").config();

const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "d20",
    description: "Replies with a random number between 1 and 20!",
  },
  {
    name: "d10",
    description: "Replies with a random number between 1 and 10!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    process.stdout.write("Started refreshing application (/) commands... ");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID.toString()),
      {
        body: commands,
      }
    );

    console.log("Done!");
  } catch (error) {
    console.error(error);
  }
})();
