const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('afk')
		.setDescription('changes the user\'s name if they\'re afk'),
	async execute(interaction) {
        var member = interaction.member;
        var prevNickname = member.nickname;

        //if the member is afk, add afk to username
        if(!prevNickname.includes('[AFK]')){
            interaction.reply(prevNickname + ' is AFK');
            member.setNickname('[AFK] ' + prevNickname);
        }else{
            interaction.reply(prevNickname.replace('[AFK]', '') + ' is not AFK');
            member.setNickname(prevNickname.replace('[AFK]', ''));
        }
	},
};