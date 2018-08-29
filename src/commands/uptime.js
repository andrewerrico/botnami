exports.run = (client, message, args) => {
  const botName = client.user.username;
  let totalSeconds = client.uptime / 1000;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  let uptime = '';
  if (hours > 0) {
    uptime = `${hours} hours`;
  }
  if (minutes > 0) {
    uptime += `, ${minutes} minutes and`;
  }
  uptime += `${seconds} seconds`;
  message.channel.send(`**${botName}** has been up and running for ${uptime}!`);
};
