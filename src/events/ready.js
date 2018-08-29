module.exports = client => {
  // client.on('ready', () => {
  global.client = client;

  console.log(`
      🍺 Hopbot v${config.version} Connected and Ready 🍺
    `);

  // client.channels
  //   .get(helpers.getChannelId('logs'))
  //   .send('🍺 connected and ready to serve.');
  // });
};
