const main = require('../../app.js');
exports.run = function(client, message, args) {
  const adminRole = message.guild.roles.get('name', 'Admin');
  const modRole = message.guild.roles.get('name', 'Mod');

  if (!adminRole && modRole) return console.log('No Admins or Mods exist');

  // Roles allowed to reload commands
  const allowedRoles = ['Admin', 'Mod'];

  let getAuthorRolesByName = message.member.roles.map(role => {
    return role.name;
  });
  let canReload = getAuthorRolesByName.some(
    role => allowedRoles.indexOf(role) >= 0
  );

  let cmd = args.join(' ');
  if (canReload) {
    main.reload(message, cmd);
  } else {
    message.reply(`you don't have permission to reload command **${cmd}**.`);
  }
};
