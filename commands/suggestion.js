const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestion')
		.setDescription('Replaces message with an embed that people can react to'),
	async execute(interaction, client) {
        var suggestion, suggestionChannel;
        var suggestionChannelId = '886719267972718663';

        interaction.reply("Thanks for the suggestion!");
        suggestion = interaction.content.replace('!suggestion', '');
        
        //send the suggestion to the suggestions channel
        suggestionChannel = client.channels.cache.get(suggestionChannelId);
        //once message has been sent, react to it
		await suggestionChannel.send('Suggestion: ' + suggestion).then(function (message){
            message.react('✅');
            message.react('❌');
        });
        console.log(interaction);
	},
};