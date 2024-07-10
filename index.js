var spamOnKicked = false;
var kickCount = 0;
var onlyOnce = false;
var channel;

startBot();

function startBot() {
  console.clear();

  const { minecraft, botOptions, discord, phrases } = require('./config.json');

  const chalk = require('chalk');
  const mineflayer = require('mineflayer');
  const Discord = require('discord.js');
  const client = new Discord.Client();
  client.login(discord.token);
  const prefix = discord.prefix;

  if (!discord.channelID || !discord.token) {
    console.log(chalk.blueBright('Please enter a Channel ID and a Discord Bot Token'));
    process.exit();
  };

  var randomPhrase;
  var phraseCount;

  var bot = mineflayer.createBot({
    host: minecraft.host,
    port: parseInt(minecraft.port),
    username: minecraft.username ? minecraft.username : 'SPAMBot',
    password: minecraft.password ? minecraft.password : null
  });

  client.on('message', (msg) => {
    if (msg.author.client) return
    switch (msg.content) {
      case `${prefix}move`:
        moveBot();
        break
      case `${prefix}spam`:
        startSpam();
        break
      };
  });

  bot.once('spawn', () => {
    if (spamOnKicked) {
      console.log(chalk.redBright(`   Reconnected after kick! Kick count is ${kickCount}`));
      startSpam();
    } else {
      null;
    };

    console.log(chalk.greenBright('   <STATUS> Correctly logged in'));
    console.log(chalk.greenBright(`   <STATUS> Found ${Object.keys(phrases).length}`));
  });

  function startSpam() {
    channel.send('Spamming!');

    setInterval(() => {
      phraseCount = Object.values(phrases);
      randomPhrase = phraseCount[parseInt(Math.random() * phraseCount.length)];
      bot.chat(randomPhrase);
    }, botOptions.delay);
    
    bot.on('kicked', () => {
      kickCount = kickCount + 1;

      setTimeout(() => {
        startBot();
        spamOnKicked = true;
      }, 2000);

      client.removeAllListeners('message')
      bot.removeAllListeners('spawn');
      bot.removeAllListeners('kicked');
    });
  };

  function moveBot() {
    bot.setControlState('forward', true);
    setTimeout(() => {
      bot.clearControlStates();

      channel.send('Moved!');
    }, 500);
  };

  client.once('ready', () => {
    if (!onlyOnce) {
      channel = client.channels.cache.find(channel => channel.id === discord.channelID);
      channel.send(`Logged in as ${client.user.tag} and as ${minecraft.username}`);
      
      onlyOnce = true;
    };
  })
};