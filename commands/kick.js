const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks the member specified in the command!'),
	async execute(msg) {
        //determine whether sender is authorized
        //get the permissions that the user has in this channel
        senderHasPermission = msg.member.roles.cache.some(role => role.name === '▪︎Head Admin');
        memberToKick = msg.mentions.members.first();

        //if they do not have the permission to do this, send a message and quit
        if(!senderHasPermission){
            msg.reply("You do not have permission to do this");
            return;
        }else{
            //if the member to kick has a role too high, the command is invalid
            senderHasPermission = !memberToKick.roles.cache.some(role => role.name === '▪︎Head Admin');
            if(!senderHasPermission){
                msg.reply("You do not have permission to do this (hahah)");
                return;
            }
        }

        //kick the member
        memberToKick.kick("They deserve it");
	},
};