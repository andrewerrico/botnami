const chalk = require('chalk');
const log = console.log;
module.exports = async (client, message) => {
  global.client = client;

  const readyMessage = `\n🍺 Hop Bot v${
    config.version
  } Connected and Ready 🍺\n`;

  log('\033[2J');

  log(chalk.blue.bold(readyMessage));

  try {
    // let link = await client.generateInvite(['ADMINISTRATOR']);
    // log(link);
    // Fetch Pinned Rules in lobby channel
    const channel = client.channels.get(helpers.getChannelId('lobby'));
    await channel
      .fetchPinnedMessages()
      .then(log(chalk.green('Pinned Messages Fetched Successfully\n')));
  } catch (e) {
    log(e.stack);
  }
};
