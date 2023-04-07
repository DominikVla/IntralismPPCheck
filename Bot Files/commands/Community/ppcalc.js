const {SlashCommandBuilder} = require('@discordjs/builders');
const { default: Decimal } = require('decimal.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('calculate')
    .setDescription('Calculates the amount of PP a play will give.')
    .addStringOption(option =>
        option.setName('score')
            .setDescription("Score of the play done")
            .setRequired(true))

    .addStringOption(option =>
        option.setName('maxscore')
            .setDescription("Highest Score the map can give")
            .setRequired(true))

    .addStringOption(option =>
        option.setName('misses')
            .setDescription("Number of misses")
            .setRequired(true))

    .addStringOption(option =>
        option.setName('accuracy')
            .setDescription("Acccuracy of the play")
            .setRequired(true))

    .addStringOption(option =>
        option.setName('maxpoints')
            .setDescription("The highest achievable points")
            .setRequired(true)),

    async execute(interaction, client) {

        /* Converting stats to variables to use for calculating */
        let score = interaction.options.getString('score');
        let maxScore = interaction.options.getString('maxscore');
        let miss = interaction.options.getString('misses');
        let accuracy = interaction.options.getString('accuracy');
        let maxPoints = interaction.options.getString('maxpoints');

        let a = Decimal.pow(0.95, miss);
        


        /* score / maxscore * 0.95^misses * acc * maxpoints * 0.08 * 2 */

//      score / maxScore
        let scoreTotal = score / maxScore;

//      * 0.95^misses
        let scoreMiss = scoreTotal * a;

//      * acc
        let scoreMissAcc = scoreMiss * accuracy;

//      * maxpoints
        let calcPt = scoreMissAcc * maxPoints;

//      * 0.08
        let lowPP = calcPt * 0.08;

//      * 2
        let basePP = lowPP * 2;

        let ppOut = basePP.toFixed(2);
        
        await interaction.reply({content: 'PP Value of this play:' + ppOut});
    }
}
