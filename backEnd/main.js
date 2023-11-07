const customEmitter = require('./customEventEmitter');

function simulateUserLogin(userId) {
  const randomDelay = Math.floor(Math.random() * 1900 + 100); 
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    customEmitter.emit('userLoggedIn', userId);
    simulateUserLogout(userId);
  }, randomDelay);
}

function simulateUserLogout(userId) {
  const randomDelay = Math.floor(Math.random() * 1900 + 100); 
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged out`);
    customEmitter.emit('userLoggedOut', userId);
    simulateUserLogin(userId);
  }, randomDelay);
}


customEmitter.on('userLoggedIn', (userId) => {
  console.log(`User ${userId} logged in.`);
});

customEmitter.on('userLoggedOut', (userId) => {
  console.log(`User ${userId} logged out.`);
});


for (let i = 1; i <= 5; i++) {
  simulateUserLogin(i);
}

console.log('Simulation started. Press Ctrl+C to stop.');