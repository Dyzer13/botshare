const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**يمتلك كلّ إنسان أحلاماً وأهدافاً كثيرة في الحياة ويسعى لتحقيقها بكلّ قوّته ولكن
لكي يستطيع تحقيقها يجب عليه أن يمتلك إرادة حقيقية تدفعه نحو تحقيق هدفه،
كما يجب أن يسعى لاستغلال قوته الذاتية وأن يثق بقدراته وبما يستطيع تحقيقه
لكي يصل للنتائج التي ترضيه في النهاية.

فريق الحريه يهديك تصميم باءرخص الاسعار ..**
 
http://i8.ae/HaBv
https://discord.gg/WfgwKMR

`)
}).catch(console.error)

})
 

client.login(process.env.BOT_TOKEN);
