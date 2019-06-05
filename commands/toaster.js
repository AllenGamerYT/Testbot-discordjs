const Discord = require('discord.js');
const { prefix,token } = require('../config.json');

module.exports = {
	name: 'toaster',
	description: 'Kill',
	execute(message, args) {
		message.channel.send('Committing Toaster Bath. Goodbye');
    process.exit();
	},
};
