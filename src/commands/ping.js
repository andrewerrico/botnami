const moment = require('moment');
let now = new Date();
exports.run = (client, message, args) => {
  console.log(`🏓 Pinged at ${moment(now).format('LLLL')}`);
  message.channel
    .send(`🏓 Pong! \`${Date.now() - message.createdTimestamp}ms\``)
    .catch(console.error);
};
