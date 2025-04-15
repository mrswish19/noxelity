// behaviors/pathing.js
module.exports.preventFall = function preventFall(bot) {
  if (!bot.world || !bot.entity || !bot.entity.position) return;

  const pos = bot.entity.position;
  const blockBelow = bot.world.getBlock({
    x: pos.x,
    y: pos.y - 1,
    z: pos.z,
  });

  if (!blockBelow || blockBelow.name === 'air') {
    bot.setControlState('jump', true);
  } else {
    bot.setControlState('jump', false);
  }
};
