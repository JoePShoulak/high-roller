const random = require("../dHelper");

module.exports = async (interaction) => {
  const res = Math.random() > 0.5 ? "Heads!" : "Tails!";
  await interaction.reply(res);
};
