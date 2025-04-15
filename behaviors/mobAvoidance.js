// behaviors/mobAvoidance.js
//const { isMobDangerous } = require('../utils/safety');

module.exports.avoidMobs = (bot) => {
  // Simple logic: move away if mob nearby and dangerous
  bot.entities.forEach(entity => {
    if (isMobDangerous(entity.name)) {
      bot.write('move_player', { position: { x: bot.entity.position.x - 3, y: bot.entity.position.y, z: bot.entity.position.z }, on_ground: true });
    }
  });
};
