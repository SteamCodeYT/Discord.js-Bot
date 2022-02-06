const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tictactoe')
		.setDescription('Replies with a button!'),
	async execute(interaction) {
        //create the cells in three different rows
		const row1 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('cell0')
					.setLabel('-')
					.setStyle('SECONDARY'),
                
                new MessageButton()
					.setCustomId('cell1')
					.setLabel('-')
					.setStyle('SECONDARY'),

                new MessageButton()
					.setCustomId('cell2')
					.setLabel('-')
					.setStyle('SECONDARY'),
            );
            const row2 = new MessageActionRow()
			.addComponents(
                new MessageButton()
					.setCustomId('cell3')
					.setLabel('-')
					.setStyle('SECONDARY'),

                new MessageButton()
					.setCustomId('cell4')
					.setLabel('-')
					.setStyle('SECONDARY'),

                new MessageButton()
					.setCustomId('cell5')
					.setLabel('-')
					.setStyle('SECONDARY'),
            );
            const row3 = new MessageActionRow()
			.addComponents(
                new MessageButton()
					.setCustomId('cell6')
					.setLabel('-')
					.setStyle('SECONDARY'),

                new MessageButton()
					.setCustomId('cell7')
					.setLabel('-')
					.setStyle('SECONDARY'),

                new MessageButton()
					.setCustomId('cell8')
					.setLabel('-')
					.setStyle('SECONDARY'),
			);

		await interaction.reply({ embeds: [new MessageEmbed().setTitle('Turn: X')], components: [row1, row2, row3] });
	},
};