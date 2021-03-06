const chalk = require('chalk');
const moment = require('moment');
const { channels } = require('../data');
module.exports = async channel => {
  if (channel.type === 'dm') return;
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const now = new Date();
  channel.client.channels
    .get(channels.logs)
    .send(
      `A **${channel.type}** channel named **${
        channel.name
      }** was removed at **${now}** with an ID of **${channel.id}**.`
    );
  let msg = `A ${channel.type} channel named ${channel.name} was removed at ${
    channel.createdAt
  }`;
  return console.log(
    `[${timestamp}]: ${chalk.black.bold.bgBlue('LOG')} ${msg}`
  );
};
