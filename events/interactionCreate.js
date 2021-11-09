const config = require("../config.json");

module.exports = {
    name: "interactionCreate", 
    on: true, 
    async execute(interaction, client) {
        //if the interaction is a button
        if(interaction.isButton()){
            interaction.reply("You clicked " + interaction.customId);
            console.log(interaction);
        }
        
        //if this interaction is not a command, return
        if(!interaction.isCommand()){
            return; 
        }

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction, client);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};