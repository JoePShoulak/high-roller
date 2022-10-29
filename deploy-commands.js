require("dotenv").config();

const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "coin",
    description: "Replies with 'Heads!' or 'Tails!' randomly!",
  },
  {
    name: "d2",
    description: "Replies with a random number between 1 and 2!",
  },
  {
    name: "d4",
    description: "Replies with a random number between 1 and 4!",
  },
  {
    name: "d6",
    description: "Replies with a random number between 1 and 6!",
  },
  {
    name: "d8",
    description: "Replies with a random number between 1 and 8!",
  },
  {
    name: "d10",
    description: "Replies with a random number between 1 and 10!",
  },
  {
    name: "d12",
    description: "Replies with a random number between 1 and 12!",
  },
  {
    name: "d20",
    description: "Replies with a random number between 1 and 20!",
  },
  {
    name: "d100",
    description: "Replies with a random number between 1 and 100!",
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
