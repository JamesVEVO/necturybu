const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send({
      embed: {
        color: 0xd97634,
        author: {
          name: "Davet Menüsü",
          icon_url:
            "https://cdn.discordapp.com/attachments/823278260724564008/826125095151730688/nectury.png"
        },
        thumbnail: {
          url:
            "https://media.discordapp.net/attachments/823281310084759592/825836097904181318/necturyy_1.gif"
        },
        title: "",
        description:
          "[Davet Linkim](https://discord.com/oauth2/authorize?client_id=825831173866520616&scope=bot&permissions=8)",
        timestamp: new Date(),
        footer: {
          icon_url: "",
          text: " Nectury "
        }
      }
    });
    message.react(":pencil:");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["d", "link", "linkler"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Botun Davet Linkini Gösterir",
  usage: "davet"
};
///////////////////           NECTURY <3 JAMES           ///////////////////////