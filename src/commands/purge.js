exports.run = function(client, message, args) {
  const allowedRoles = ['Admin'];

  let getAuthorRolesByName = message.member.roles.map(role => {
    return role.name;
  });
  let canPurge = getAuthorRolesByName.some(
    role => allowedRoles.indexOf(role) >= 0
  );

  if (canPurge) {
    let messagecount = parseInt(args.join(' '));
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages));
  } else {
    message.reply("you can't purge!");
  }
};
