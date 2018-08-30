const config = require('../config.json');

exports.run = (client, message, [mention, ...reason]) => {
  // console.log('kick');
  // return;
  const modRole = message.guild.roles.find('name', 'Mod');
  if (!modRole) return console.log('The Mod role does not exist');

  if (message.author.id !== config.ownerID) {
    if (!message.member.roles.has(modRole.id))
      return message.reply('You can\'t use this command.');
  }

  if (message.mentions.members.size === 0)
    return message.reply('Please mention a user to kick');

  if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('');

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(' ')).then(member => {
    message.reply(`${member.user.username} was succesfully kicked.`);
  });
};