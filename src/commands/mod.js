exports.run = (client, message, [mention, ...reason]) => {
  const serverName = client.guilds.first().name;
  if (message.author.id === config.ownerID) {
    const guildMember = message.guild.members.filter(
      member => member.user.username === mention
    );
    guildMember.first().addRole(config.roles.mod);
    let dm = `Heyo you are now a mod in ${serverName}!`;
    if (reason.length > 0) {
      let modReason = reason.join(' ');
      dm = `${dm}\n**Reason**: ${modReason}`;
    }
    guildMember.first().send(dm);
  } else {
    message.reply('lol you can\'t do that!');
  }
};
