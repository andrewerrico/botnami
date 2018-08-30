const chalk = require('chalk');
module.exports = async (reaction, user) => {
  const guildMember = reaction.message.guild.members.get(user.id);

  if (
    reaction.message.id === config.messages.rules &&
    reaction.emoji.name === config.getStartedEmoji
  ) {
    guildMember.removeRole(config.roles.hopper);
    guildMember.addRole(config.roles.noob);

    console.log(chalk.yellow(`${user.username} removed from Hoppers!`));
  }
};
