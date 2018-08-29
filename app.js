const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const chalk = require('chalk');

const fs = require('fs');
const config = require('./src/config.json');
// const prefix = config.prefix;
// const helpers = require('./src/helpers');

require('./src/util/event-loader.js')(client);

global.config = config;

// client.on('guildMemberAdd', member => {
//   member.send('Welcome to the server! Cheers 🍺');
//   // newUsers.set(member.id, member.user);
// });

client.on('channelCreate', channel => {
  console.log(
    `A ${channel.type} channel with the name of ${channel.name} was created at
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
