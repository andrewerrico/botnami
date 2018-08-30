const reqEvent = event => require(`../events/${event}`);

module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
  client.on('message', reqEvent('message'));

  client.on('guildMemberAdd', reqEvent('guild-member-add'));

  client.on('messageReactionAdd', reqEvent('reaction-add'));
  client.on('messageReactionRemove', reqEvent('reaction-remove'));
};
