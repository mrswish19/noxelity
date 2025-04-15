module.exports = function walkLoop(bot) {
    let forward = 0;
  
    setInterval(() => {
      if (!bot.entity || !bot.entity.position) return;
  
      forward += 0.3; // adjust speed here
  
      const newPos = {
        x: bot.entity.position.x + forward,
        y: bot.entity.position.y,
        z: bot.entity.position.z,
      };
  
      bot.write('move_player', {
        runtime_entity_id: bot.entity.runtime_id,
        position: newPos,
        pitch: 0,
        yaw: 0,
        head_yaw: 0,
        mode: 0,
        on_ground: true,
        ridden_runtime_id: 0,
      });
  
      console.log('Walking forward to:', newPos);
    }, 1000); // move every second
  };
  