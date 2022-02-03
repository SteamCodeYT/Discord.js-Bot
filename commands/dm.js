const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dm')
		.setDescription('Sends a Direct Message to the specified user.'),
	async execute(interaction) {
		await interaction.reply('A Direct Message has been sent to you.');
        var member = interaction.member;
        member.send("This is a Direct Message sent by SteamCode.")
	},
};