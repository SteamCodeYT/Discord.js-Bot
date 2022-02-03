const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('Replies with Pong!'),
	async execute(msg) {
		msg.react('😄');
        msg.react('🍇');
        msg.react('🍊');

        msg.react('🍊')
            .then(() => msg.react('🍎'))
            .catch(error => console.error('One of the emojis failed to react:', error));
	},
};