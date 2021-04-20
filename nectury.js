const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);

//-----------------------GİRENE-ROL-VERME----------------------\\     
let kayıtsız = ayarlar.kayıtsızrol

client.on("guildMemberAdd", member => {
  member.roles.add(kayıtsız);
});

//-----------------------GİRENE-ROL-VERME SON----------------------\\     




//-----------------------HOŞ-GELDİN-MESAJI----------------------\\     

client.on("guildMemberAdd", async (member,message) => {
    require("moment-duration-format")
  let memberGün = moment(member.user.createdAt).format("DD");
  let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");
  
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-999])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
          return {
            '0': `<a:790204273648205835:802279106614919180>`,
            '1': `<a:790204346192232448:802279092153090050>`,
            '2': `<a:790204390328893440:802279118024605746>`,
            '3': `<a:790204273648205835:802279106614919180>`,
            '4': `<a:790204411452325898:802279109202935858>`,
            '5': `<a:790204421870190593:802279117742538754>`,
            '6': `<a:790204439717085204:802279109228757052>`,
            '7': `<a:790204451662462986:802279093155790868>`,
            '8': `<a:790204463729868810:802279117780418570>`,
            '9': `<a:790204476593668106:802279096474009601>`}[d];})}
    const kanal = member.guild.channels.cache.find(r => r.id === "826166262480109588");
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = 'Güvenilir Gözükmüyor.'
  if (kurulus > 1296000000) kontrol = 'Hesap Güvenli'
    moment.locale("tr");
    kanal.send(new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/825472647612596245/827677101414809621/necturyy_1.gif") 
    .setDescription(
      
      `
<:hashtag:825843723606818837>  **WELCOME TO NECTURY**

**<:tik:825491113409249350> ** Hoşgeldin, <@`+ member + `> Seninle **${member.guild.memberCount}** Kişiyiz

**<:tik:825491113409249350>**   Kurallar Ve İlkeler Kanalımıza <#818549697752465468> Buradan Bakabilirsin

**<:tik:825491113409249350>**  Sunucuya Kayıt Olmak İçin Sol Taraftaki **Voice Confirmed** Odalarına Geçiş Yapabilirsin

**<:tik:825491113409249350>**  Hesabın  \`${memberGün} ${memberAylar}\` Tarihinde Kuruldu: **`+kontrol+`**`));

})

  
//-----------------------HOŞ-GELDİN-MESAJI SON----------------------\\     


//-----------------------TAG-ROL-LOG----------------------\\  
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = '⺓'
  const sunucu = '824019375921168454'
  const log = '825472647612596245'
  const rol = '825472506777305168'

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Kazandı`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Kaybetti`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
}
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});
//-----------------------TAG-ROL-LOG-SON----------------------\\  

 client.on('ready', ()=>{
 client.channels.get("825472636439494697").join()
    }) 