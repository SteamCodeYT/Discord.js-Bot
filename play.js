const { SlashCommandBuilder } = require('@discordjs/builders');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource  } = require('@discordjs/voice');
const config = require('../config.json');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays audio in the music VC'),
	async execute(interaction, client) {
		//get the voice channel ids
		const voiceChannelId = config.musicChannelId;
		const voiceChannel = client.channels.cache.get(voiceChannelId);
		const guildId = config.guildId;

		//create audio player
		const player = createAudioPlayer();

		player.on(AudioPlayerStatus.Playing, () => {
			console.log('The audio player has started playing!');
		});

		player.on('error', error => {
			console.error(`Error: ${error.message} with resource`);
		});

		//create and play audio
		const resource = createAudioResource('C:\\Users\\jrobi\\OneDrive\\Desktop\\SteamCode\\Discord.js Bot Main\\res\\Kick It - Yung Logos.mp3');
		player.play(resource);

		//create the connection to the voice channel
		const connection = joinVoiceChannel({
			channelId: voiceChannelId,
			guildId: guildId,
			adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		});	

		interaction.reply("created voice connection")

		// Subscribe the connection to the audio player (will play audio on the voice connection)
		const subscription = connection.subscribe(player);

		// subscription could be undefined if the connection is destroyed!
		if (subscription) {
			// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
			setTimeout(() => subscription.unsubscribe(), 30_000);
		}
	},
};

