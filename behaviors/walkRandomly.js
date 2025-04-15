// behaviors/walkRandomly.js

module.exports = function walkRandomly(bot) {
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, true);
  
      // Simulate holding forward
      bot.setControlState('forward', true);
  
      // Stop after a bit
      setTimeout(() => {
        bot.setControlState('forward', false);
      }, 1000);
    }, 5000); // Move every 5 seconds
  };
  