const { buryInGround, moveToSafePlace } = require('./nightSafety');
const { avoidMobs } = require('./mobAvoidance');
const { preventFall, unstuckPath } = require('./pathing');
const { findFood } = require('./hunting');

module.exports = {
  handleNightSafety: (bot) => {
    moveToSafePlace(bot);
    buryInGround(bot);
  },
  handleHunger: (bot) => {
    findFood(bot);
  },
  handleMobAvoidance: (bot) => {
    avoidMobs(bot);
  },
  handlePathing: (bot) => {
    preventFall(bot);
  },
  respawnIfDead: (bot) => {
    bot.queue('respawn', {});
    console.log('Respawning Noxell...');
  }
};
