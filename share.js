const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
تعال اخطفك ياقلبي 

https://discord.gg/2UcRAU6
:heart:
`)
}).catch(console.error)

})
 

client.login(process.env.BOT_TOKEN);
