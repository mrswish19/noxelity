const { createClient } = require('bedrock-protocol');
const fs = require('fs');
const { handleNightSafety, handleHunger, handleMobAvoidance, handlePathing, respawnIfDead } = require('./behaviors');
const walkLoop = require('./behaviors/walkLoop');

const bot = createClient({
  host: 'lootboxphh.aternos.me',
  port: 44399,
  username: 'Noxell',
  offline: true,
  version: '1.21.93'
});

let isNight = false;

bot.on('spawn', () => {
  console.log('Noxell joined the server!');
});

bot.on('spawn', () => {
  console.log('Noxell spawned! Starting to walk...');
  walkLoop(bot);

  console.log('Bot has spawned! Running pathing logic...');
  handlePathing(bot);
});

bot.on('time', (packet) => {
  const time = packet.time;
  isNight = time > 13000;
});

bot.on('update_attributes', () => {
  handleHunger(bot);
});

bot.on('mob_spawn', () => {
  handleMobAvoidance(bot);
});

bot.on('spawn', () => {
  console.log('Bot has spawned! Running pathing logic...');
  handlePathing(bot);
});

bot.on('death_info', () => {
  respawnIfDead(bot);
});

setInterval(() => {
  if (isNight) {
    handleNightSafety(bot);
  }
}, 10000);
