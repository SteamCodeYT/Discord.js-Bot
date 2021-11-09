module.exports = {
    name: "ready", 
    once: true, 
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        
        /*
        //set the bot's status
        client.user.setActivity("discord.js", {
            type: "PLAYING",
            name: "Coding Videos",
            url: "https://www.twitch.tv/gmhikaru"
        });
        */

    },
};