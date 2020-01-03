const discord = require("discord.js");
const bot = new discord.Client();
const tok = "NjU3MTY2NTM4NzIxMTk4MDkw.XgCy9Q.2zGy6r1pq31B_1JWuNwvHs6MWzM"
const prefix = "!!"
bot.login(tok)
bot.on("ready", () => {
    console.log("XD bot ready")
})
bot.on("message", msg => {
    message = msg
    args = msg.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "addRole":
            let name = message.mentions.members.first();
            let role1 = args.splice(2).join(" ")
         
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.reply("Du har ikke tilgang til denne komadoen")
            }
      
            else if (!name) {
                msg.reply("legg inn ett navn")
            }
         
            else {
              
                let role2 = message.guild.roles.find(role => role.name === role1);
                
                
                msg.delete()
                name.addRole(role2).catch(console.error, () => msg.reply("oi, noe gikk galt. kanskje denne rollen ikke eksisterer. Hvis denne rolen eksisterer og du mener noe annet er feil kontakt Gard med feilkoden ERR:ADDROLE.CATCH"))
                
          
            }
            break;
        case "removeRole":
            let name2 = message.mentions.members.first();
             role3 = args.splice(2).join(" ")

            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.reply("Du har ikke tilgang til denne komadoen")
            }

            else if (!name2) {
                msg.reply("legg inn ett navn")
            }

            else {

                let role4 = message.guild.roles.find(role => role.name === role3);
                

                msg.delete()
                name2.removeRole(role4).catch(console.error, () => msg.reply("oi, noe gikk galt. kanskje denne rollen ikke eksisterer. Hvis denne rolen eksisterer og du mener noe annet er feil kontakt Gard med feilkoden ERR:REMROLE.CATCH"))


            }
            break;
    }
})