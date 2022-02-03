const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Replies with and list of roles to choose'),
	async execute(interaction) {
		await interaction.reply('roles!');
	},
};