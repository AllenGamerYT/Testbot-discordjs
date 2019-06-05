const Discord = require('discord.js');
const { prefix,token } = require('../config.json');

module.exports = {
	name: 'revive',
	description: 'restart the bot',
  	execute(message, args) {
      function resetBot(channel) {
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login('NTgwNTA3OTI4MjMxMDE4NDk2.XPb1kg.hhPZKOAKiHRomDU09kzj6Eazj0k'));
	 }
 }
};
