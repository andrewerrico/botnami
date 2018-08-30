module.exports = member => {
  member.send(`Hi ${member.user.username}, welcome to the server! Cheers 🍺`);
  // const guild = member.guild;
  // guild.defaultChannel.send(
  //   `Please welcome ${member.user.username} to the server!`
  // );
};
