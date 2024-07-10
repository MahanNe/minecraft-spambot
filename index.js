var spamOnKicked = false;
var kickCount = 0;
var onlyOnce = false;
var channel;

startBot();

function startBot() {
  console.clear();

  const { minecraft, botOptions, phrases } = require('./config.json');

  const chalk = require('chalk');
  const mineflayer = require('mineflayer');

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
};
