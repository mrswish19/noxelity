const { createClient } = require('bedrock-protocol');
const fs = require('fs');
const { handleNightSafety, handleHunger, handleMobAvoidance, handlePathing, respawnIfDead } = require('./behaviors');

const bot = createClient({
  host: 'lootboxph.aternos.me',
  port: 37123,
  username: 'Noxell',
  offline: true,
  version: '1.21.70'
});

let isNight = false;

bot.on('spawn', () => {
  console.log('Noxell joined the server!');
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

bot.on('move_player', () => {
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
