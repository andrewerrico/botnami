// exports.run = (client, message, args) => {
//   message.channel.send("pong!").catch(console.error);
// }

const config = require('../config.json');




exports.run = (client, message, args) => {
  // if (message.author.id !== config.ownerID) return;
  console.log(message)
}
//   if (message.content.startsWith(config.prefix + 'prefix')) {
//     // get new prefix from command
//     let newPrefix = message.content.split(' ').slice(1, 2)[0];
//     // change config in memory
//     config.prefix = newPrefix
//     // update config.js
//     fs.writeFile('./config.json', JSON.stringify(config), (err) => {
//       console.error;
//       if (err) throw err;
//       message.channel.send('Prefix changed to ' + newPrefix + '! Cheers 🍺');
//     });
//   }