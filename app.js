const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const chalk = require('chalk');
const fs = require('fs');
const config = require('./src/config.json');
const helpers = require('./src/helpers');
const log = console.log;
require('./src/util/event-loader.js')(client);

global.config = config;
global.helpers = helpers;

client.on('channelCreate', channel => {
  log(
    `A ${channel.type} channel named ${channel.name} was created at
    ${channel.createdAt} with the ID of ${channel.id}`
  );
});

const reload = (message, cmd) => {
  delete require.cache[require.resolve(`./src/commands/${cmd}`)];
  try {
    let cmdFile = require(`./src/commands/${cmd}`);
  } catch (err) {
    message.channel
      .send(`Problem loading **${cmd}**: ${err}`)
      // .then(response =>
      //   response.delete(1000).catch(error => console.log(error.stack))
      // )
      .catch(error => console.log(error.stack));
  }
  message.channel
    .send(`Command **${cmd}** reloaded successfully.`)
    // .then(response =>
    //   response.delete(1000).catch(error => console.log(error.stack))
    // )
    .catch(error => console.log(error.stack));
};

exports.reload = reload;

client.login(config.token);
