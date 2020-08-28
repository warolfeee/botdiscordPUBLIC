const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login("NzQ3NDcwNDI1OTkwMzY1MTg2.X0PWFA.VztcwrOsxi4QmnZhYyfM62jIS78")
client.commands = new Discord.Collection();

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name , commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});
// ${client.guilds.size} 
   var jeuxs = [
    `discord.gg/atc`

];
  setInterval(function () {
   
   var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];
   
    client.user.setPresence({
     game: {
       name: `discord.gg/namek is back ${client.users.size} Membre merci`,
       type: "PLAYING"
     }
   });
  }, 3525);
  
//url: "https://www.twitch.tv/warolfee" 
