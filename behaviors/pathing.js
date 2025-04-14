// behaviors/pathing.js
module.exports.preventFall = (bot) => {
  // Check block below before moving
  const blockBelow = bot.world.getBlock({ x: bot.entity.position.x, y: bot.entity.position.y - 1, z: bot.entity.position.z });
  if (!blockBelow) {
    bot.write('move_player', { position: { x: bot.entity.position.x, y: bot.entity.position.y + 1, z: bot.entity.position.z }, on_ground: true });
  }
};

module.exports.unstuckPath = (bot) => {
  // Check block in front
  const blockInFront = bot.world.getBlock({ x: bot.entity.position.x + 1, y: bot.entity.position.y, z: bot.entity.position.z });
  if (blockInFront) {
    bot.write('move_player', { position: { x: bot.entity.position.x, y: bot.entity.position.y + 1, z: bot.entity.position.z }, on_ground: true });
  }
};
