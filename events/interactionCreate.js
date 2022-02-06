const config = require("../config.json");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "interactionCreate", 
    on: true, 
    async execute(interaction, client) {
        //if the interaction is a button
        if(interaction.isButton()){
            //-----------TIC TAC TOE CODE-----------//
            const { MessageActionRow, MessageButton } = require('discord.js');
            //if the interaction is part of tictactoe
            if(interaction.customId.includes("cell")){
                //get the clicked cell number
                clickedCellNumber = interaction.customId.substring(interaction.customId.length-1);
                //get the MessageButton that was clicked
                clickedButton = interaction.message.components[Math.floor(clickedCellNumber/3)].components[clickedCellNumber%3];
                //change the text of the button to the current player's symbol
                clickedButton.label = "X";
                
                console.log(clickedButton);
            }
            /*
            interaction.reply("You clicked " + interaction.customId);
            console.log(interaction);*/
            //--------END OF TIC TAC TOE CODE-----------//

            //-----------MEME CODE-----------//
            //move slideshow to right
            if(interaction.customId.includes("newMeme")){
                //create an array of memes 
                var memes = ['https://aws1.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png',
                'https://i.redd.it/520hz0cgh8471.jpg', 
                'https://remote-tools-images.s3.amazonaws.com/programmer-memes/10.jpg',
                'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be7eedf8e1f31aabcec_BwENfmI0CU5dZGYlSyo142mpfG08-rYgTS-Qm47uMUXN6JXtmdZvtzVzTooUQdXTWmTD8uzF9N6XQJA2vUIMi53tunFyVtvOBJTNfOjHit2P_JkTmFzFsK7ep6Vb9781XZnRAryH.png',
                'https://miro.medium.com/max/1400/0*z1mm6izqSeDiKukb',
                'https://i.chzbgr.com/full/9591928832/h8AC54339/laptop-writing-whole-project-as-student-gim-writing-10-lines-code-as-salaried-enough-today',
                'https://i.pinimg.com/originals/d0/8d/7d/d08d7d3564444466692a186c232e9e5d.png',
                'https://i1.wp.com/cleus.co/wp-content/uploads/2019/03/memecoders.jpg?resize=1058%2C959&ssl=1',
                'https://www.semicolonworld.com/uploads/memes/HPh5cSj4MQ.jpg',
                'https://miro.medium.com/max/1400/0*r6iQzljiuJavVxRM',
                ]
    
                //create random index from 0 to the length of memes array
                var index = Math.floor(Math.random() * memes.length);
                
                //create new image embed
                let newMeme = new MessageEmbed()
                    .setImage(memes[index])

                //change the embed to show the next meme
                interaction.update({embeds: [newMeme]})
            }
            //--------END OF MEME CODE-----------//
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