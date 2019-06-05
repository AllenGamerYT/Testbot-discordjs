module.exports = {
	name: 'role',
	description: 'Add Roles to Users',
  guildOnly: true,
  args: true,
  usage: '<user> <role>',
  async execute(message, args) {
			return message.channel.send('Role added to <user>');
			message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
