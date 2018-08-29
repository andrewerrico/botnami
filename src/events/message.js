module.exports = message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.split(' ');
  const command = args.shift().slice(config.prefix.length);

  let client = message.client;

  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, message, args);
  } catch (err) {
    console.log(`Command ${command} failed!\n${err.stack}`);
  }
};
