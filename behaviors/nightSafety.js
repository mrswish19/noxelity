// behaviors/nightSafety.js
module.exports.moveToSafePlace = (bot) => {
  // Simple placeholder: walk forward until safe (no mobs in view)
  bot.write('move_player', { position: { x: bot.entity.position.x + 2, y: bot.entity.position.y, z: bot.entity.position.z }, on_ground: true });
};

module.exports.buryInGround = (bot) => {
  // Bury by placing dirt around
  bot.write('interact', { action_id: 1 });
};
