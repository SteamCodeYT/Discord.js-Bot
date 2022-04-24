const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('anon')
		.setDescription('Replaces message with an Anonymous one'),
	async execute(msg, client) {
        //get the content of the message
        msgContent = msg.content.substring(6);
        msg.delete();

        //create embed that will hold message
        let msgEmbed = new MessageEmbed()
            .setTitle("Anonymous Message")
            .addFields(
                {name: "Message", value: msgContent}
            )
        msg.channel.send({embeds: [msgEmbed]});
	},
};