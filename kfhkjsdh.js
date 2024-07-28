let time = new Date().getHours();
let hour, minute, second;
setInterval(() => {
  hour = new Date().getUTCHours() + 5;
  minute = new Date().getUTCMinutes() + 30;
  second = new Date().getUTCSeconds();
  console.log(`Hour: ${hour} Minute: ${minute} Second: ${second}`);
}, 1000);

console.log(time);
