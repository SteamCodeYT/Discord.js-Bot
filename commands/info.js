const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Sends info in an embed'),
	async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0189df')
            .setTitle('Steamcode Information')
            .setURL('https://www.youtube.com/channel/UClLRjv91UloHweZMyxpRPrw')
            .setAuthor("SteamCode")
            .setDescription('SteamCode is a Programming and WebDev channel that makes content regarding various engineering and computer science related topics.')
            .setThumbnail('https://imgur.com/a/zS5P0IQ')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://imgur.com/a/zS5P0IQ')
            .setTimestamp()
            .setFooter("SteamCode");
        
        const exampleEmbed2 = new MessageEmbed().setTitle("SteamCode example 2");

        interaction.reply({embeds: [exampleEmbed, exampleEmbed2]});
	},
};

