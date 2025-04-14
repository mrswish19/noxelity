// behaviors/hunting.js
module.exports.findFood = (bot) => {
  // Placeholder: find cow or chicken in range and move to it
  const foodMobs = ['cow', 'chicken', 'pig', 'sheep'];
  bot.entities.forEach(entity => {
    if (foodMobs.includes(entity.name)) {
      bot.write('move_player', { position: { x: entity.position.x, y: entity.position.y, z: entity.position.z }, on_ground: true });
    }
  });
};
module.exports.findFood = function (bot) {
  if (!bot.entities) return; // add this check

  Object.values(bot.entities).forEach(entity => {
    if (entity.name === 'cow' || entity.name === 'pig' || entity.name === 'chicken') {
      const dist = bot.entity.position.distanceTo(entity.position);
      if (dist < 20) {
        bot.lookAt(entity.position, true, () => {
          bot.attack(entity);
        });
      }
    }
  });
};
