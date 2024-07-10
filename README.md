[![Discord](https://img.shields.io/badge/Chat-Discord-blue.svg)](https://discord.gg/JQeVxbQT5G)
# SPAMBot
**This project is abandoned, sorry but I don't have the time and will to continue adding new features and I won't provide support. Feel free to PR and I'll review them.**

A spamming bot for Minecraft thanks to [mineflayer](https://github.com/PrismarineJS/mineflayer). Mainly for Windows, not tested on other OS.

Written in Node.js

[Link](https://drmoraschi.github.io/SPAMBot/) to the page of this project.

<img alt="logo" src="https://github.com/DrMoraschi/SPAMBot/raw/master/images/projectlogo.jpg" height="200" />

## Features

 * Supports 1.16.3.
 * Infinite number of custom phrases. You can add your own phrases by editing the file `config.json`.
 * Discord Bot Support.
 * Custom delay between chat messages. In milliseconds.
 * Reconnect ability in case it's kicked form the server.
 * Cracked mode support.

## Install

 1. Make sure you have installed **Node** on your PC, once you have installed it, you can proceed to the next step. You can download Node [here](https://nodejs.org/).
 1. Create a folder somewhere in you PC.
 2. Extract the downloaded .zip in the folder, there should be a folder named SPAMBot-master, take the files and paste them where you want, like a folder.
 3. Now, open the command prompt (press WIN + R, it should open a window, type in "cmd" and hit ENTER).
 4. Navigate to the folder where you put the files (Example: type "cd C:\Users\DrMoraschi\Desktop\BotFolder" and hit ENTER).
 5. Now where are going to install **Mineflayer** and the other dependencies, type:
	
	`npm install`
    
    this will install all dependencies that are necessary.

 6. If you want your own custom phrases, you can just edit the file `config.json`.
 7. Now that all the things have been installed, the bot is ready to spam.
 
## How to Use
 1. Before starting the bot, please set up a Discord Bot and take a look at config.json, the options are:
 	* "minecraft": Main options of the bot.
		* "host": IP of the server.
		* "port": Port of the server. 25565 by default.
		* "username": A name for the bot, if the server has online-mode set to true, it's the e-mail.
		* "password": Password of the account, if the server has online-mode set to false, you can leave it blank.
	* "botOptions": Other options of the bot.
		* "delay": Delay in milliseconds between each message.
	* "discord": Options for the Discord Bot.
		* "token": Token of the Discord Bot.
		* "channelID": ID of the channel where events will get printed. You need to enable Developer Mode to get an ID of a channel.
		* "prefix": Prefix of the command.
	* "phrases": Array of phrases, you can add an infinite number of them. Last phrase doesn't need a comma at the end.
 2. In your Command Line, repeat number 4 from "Install"; navigate to the folder where the files are located.
 3. To start the bot, just type in:
	
	```node index.js```

 4. Once you've written all, hit ENTER and watch as the bot connects to the server.
 
 ## Commands
 All these commands must be sent in a channel in Discord.
 * [prefix]move: this moves the bot forward a bit.
 * [prefix]spam: this starts the spamming process.
 
 #### WARNING
 
  I am not responsible of any consequences that this bot may cause, when you are downloading it, it's up to you and to be responsible of your own actions.
  
  Thank you.
