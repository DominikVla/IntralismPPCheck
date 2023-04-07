# IntralismPPCheck
 A bot for checking the PP values of plays by entering the requested values.

# Required Install Commands
- npm install discord.js   |    https://discord.js.org/#/ (Should install the latest version (V14 07/04/23))
- https://nodejs.org/en  |  Node.JS Version that's recommended for most users
- npm install decimal.js  |  https://www.npmjs.com/package/decimal.js (Used in calculating PP values accurately)


# Commands
- /calculate {score: } {maxscore: } {misses: } {accuracy: } {maxpoints: } - Calculates the how much PP a play is worth

# Important
For the bot to function you need to be able to obtain your application Token, Client ID and Guild Id (Server ID)
- Application Token goes into the .env file || Guide to get application token: https://www.writebots.com/discord-bot-token/
- Client and Guild ID go into functions/handelCommands.js on lines 5 & 6 ||
To get the IDs do the following:
1. Make sure Developer mode is on (User Settings > Advanced)
2. Go onto a server with the Bot, right click the bot and press copy ID. This gives the Client ID.
3. Right click the server you're currently in and press copy ID. This is the Guild ID.


# To-do
- Clear inputs of any specially characters (commas in numbers will be a main target)
