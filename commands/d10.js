const random = require("../dHelper");

module.exports = async (interaction) => {
  await interaction.reply(random(1, 10));
};
