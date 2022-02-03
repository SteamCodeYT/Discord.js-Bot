const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Responds with the message'),
	async execute(msg, client) {
        //get the content of the message
        var content = msg.content.substring(5);
        
        //get the channel that the message was sent in 
        var channel = msg.channel;


        if(!msg.member.roles.cache.some(roles => roles.name === "▪︎Head Admin" || roles.name === "▪︎Owner")){
                return;
        }



        //delete the user's message
        msg.delete();

        //send the content in the channel
        channel.send(content);

        console.log(content);

        /*
        //if the member does not have the proper permissions, ignore the command
        if (!msg.member.roles.cache.some(role => role.name === '▪︎Head Admin' || role.name === '▪︎Owner')){
                return;
        }
        */
	},
};