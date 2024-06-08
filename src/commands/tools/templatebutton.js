const { SlashCommandBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("templatebutton")
        .setDescription("gives an example button. . ."),
    async execute(interaction, bot) {
        const button = new ButtonBuilder()
            .setCustomId('template') //customID must always be the same as data name (make filename same as data name to avoid some apis breaking)
            .setLabel('Click Me') //what the button says
            .setStyle(ButtonStyle.Primary); //pretty colours

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
};