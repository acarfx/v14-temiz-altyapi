const { Collection, EmbedBuilder, InteractionType} = require('discord.js');
const { Event } = require("../../../../Global/Structures/Default.Events");
const cooldown = new Collection();
const ms = require('ms');

class interactionCreate extends Event {
    constructor(client) {
        super(client, {
            name: "interactionCreate",
            enabled: true,
        });
    }
    
    async onLoad(interaction) {
        const slashcommands = client.slashcommands.get(interaction.commandName);
		if (interaction.type == 4) {
			if(slashcommands.autocomplete) {
				const choices = [];
				await slashcommands.autocomplete(interaction, choices)
			}
		}
		if (!interaction.type == 2) return;
        if(!slashcommands) return client.slashcommands.delete(interaction.commandName);
        await slashcommands.onRequest(client, interaction);
    }
}

module.exports = interactionCreate