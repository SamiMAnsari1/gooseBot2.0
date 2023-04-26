const {
	SlashCommandBuilder,
	EmbedBuilder,
	PermissionFlagsBits,
} = require("discord.js");

//this creates the /kick command interface
module.exports = {
	data: new SlashCommandBuilder()
		.setName("wyr")
		.setDescription("What would you rather do?"),

	async execute(interaction, bot) {
    console.log(`${interaction.user.tag} Sabotaged Goose!`)
		//prints wyr first, then selects the seed]
		let choices = [
			[
				//Positive
				[
					//SUPER
					"be able to control water",
					"be able to control fire",

					"be able to teleport anywhere",
					"be able to read minds",
				],

				[
					//RL
					"live without the internet",
					"live without AC and heating",

					"live in batman's cave",
					"live in a super cool treehouse",

					"be a famous director",
					"be a famous actor",
				],
			],
			[
				//Neutral
				[
					//RL
					"be beautiful/handsome, but stupid",
					"be super intelligent, but ugly",

					"be famous but ridiculed",
					"be a normal person",

					"be forced to eat only spicy food",
					"be forced to eat only incredibly bland food",
				],
				[
					//SUPER
					"never be stuck in traffic again",
					"or never get another cold",

					"be completely invisible for one day",
					"be able to fly for one day",
				],
			],
			[
				//Negative
				[
					//RL
					"be unable to use search engines",
					"be unable to use social media",

					"be balding but fit",
					"be overweight with a full head of hair",
				],
				[
					//Shitty Superpowers
					"Be able to detect IQ with a ±100 uncertainty",
					"Be able to mind control cats, but to only do small annoying inconveniences. ",

					"Be able to turn invisible when your eyes are closed",
					"Be able to switch between either walking on land and swimming in water or swimming in land and walking on water.",
				],
			],
		];
		const seedInsult = Math.floor(
			Math.random() * choices.length
		);
		// console.log(seedInsult);
		const randomInsult = Math.floor(
			Math.random() * choices[seedInsult][1].length
		);
		// console.log(randomInsult);
		return interaction.reply({
			content: `Hey ${user},\n${insults[seedInsult][0]}${insults[seedInsult][1][randomInsult]}`,
			ephemeral: false,
		});
	},
};

