const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays audio in the lounge VC'),
	async execute(interaction, client) {

		const voiceChannelId = "889234999256162364";
		

		//ensure that the voice channel exists
		const voiceChannel = client.channels.cache.get(voiceChannelId);
		if (!voiceChannel) return console.error("The channel does not exist!");

		//join the voice channel
		const connection = joinVoiceChannel({
			channelId: voiceChannelId,
			guildId: "887117155647246407",
			adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		});

		//create audio player
		const audioPlayer = createAudioPlayer();

		//create audio resource and play it
		const resource = createAudioResource('../res/Ayudar.mp3');
		audioPlayer.play(resource);

		// Subscribe the connection to the audio player (will play audio on the voice connection)
		const subscription = connection.subscribe(audioPlayer);	

		// subscription could be undefined if the connection is destroyed!
		if (subscription) {
			// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
			setTimeout(() => subscription.unsubscribe(), 5_000);
		}

		interaction.reply("Audio is playing!")
	},
};