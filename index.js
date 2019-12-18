
//init
const discord = require("discord.js");
const bot = new discord.Client();
const tok = "NjU0MDMxMzQzNDYxNzI4MjU3.Xfjdig.c_Cw0nx5fhyCIA-PFlw_fpgLQRw"; 
const guild = bot.guilds.get("654070377021964288");
version = "2.0.1"
bot.on("ready", function () {
  console.log("sledbot online!")
})
bot.login(tok)
prefix = "!"
//commands
bot.on("message", msg => {
    message = msg
    
    args = msg.content.substring(prefix.length).split(" ");


    switch (args[0]) {
        case "ping":
            msg.channel.send("pong!")
            break;


        case "nettside":
            msg.channel.send("https://gard971.github.io/")
            break;





        case "hjelp":
            const embed1 = new discord.RichEmbed()
                .setTitle("Komandoer")
                .addField("!ping", "pong")
                .addField("!nettside", "link til Gard sin nettside")
                .addField("!info", "for info..")
                .addField("!hjelp", "du ser på den")
                .addField("!clear", "admin komando. Hvis du ikke vet hva det er ikke bruk den")
                .addField("!dokument", "Snarvei til hoveddokumentet")
                .addField("!legtill", "Legg til et dokument i dokumentlisten")
                .addField("!forslag", "Lag ett forslag..")
                .addField("!nyDato [dag]", "foreslå en dag å mekke på")
                .setColor(0xE54827)
            msg.channel.send(embed1)

            break;
        case "clear":

            if (args[1] && msg.member.hasPermission("MANAGE_MESSAGES")) {
                msg.channel.bulkDelete(args[1])
            }
            else {
                return msg.reply("Oisan, her gikk det galt. det kan være har du ikke spesifisert hvor mange meldinger jeg skal slette, det kan også være at du ikke har tilgang til denne komandoen")

            }

            break;

        case "dokument":
            msg.channel.send("https://docs.google.com/document/d/1hFw6lMZwfKjWLABa1UHLDOFx--Vd1VnQ0mU6gP_7lNM/edit?usp=sharing")
            break;
        case "info":
            if (msg.member.hasPermission("ADMINISTRATOR")) {
                const embed4 = new discord.RichEmbed()
                    .setTitle("Info")
                    .setDescription("Yo, eg e sledbot. eg e her for å hjelpe til å organsiere byggingen av trallen. Hvis du trenger hjelp med noe er det bare å spørre(!hjelp). Hvis eg isje svarer e d fordi jeg ikke er skrudd på.")
                    .setColor(0xE54827);
                const channel = bot.channels.get("654078491255635970");
                msg.delete
                channel.send(embed4);
            }
            else {
                msg.reply("Du har ikke tilgang til denne komandoen")
            }
            break;

        case "legtill":
            if (!args[1]) {
                msg.reply("Venligst legg til en link")
            }

            else {
                msg.delete()
                channel = bot.channels.get("654241482680827904")
                channel.send("nytt forslag av" + msg.author + ":")



            }
        case "forslag":
            if (!args[1]) {
                msg.reply("venligst skriv et forslag")
            }
            else {
                var forslag = args.splice(1).join(" ")
                const embed2 = new discord.RichEmbed()
                    .setTitle("Forslag av " + msg.author.tag)
                    .setDescription(forslag)
                    .setColor(0xE54827);
                msg.delete()
                channel = bot.channels.get("654256566228353024")
                channel.send(embed2).then(message => {
                    message.react("✅")
                    message.react("❌")
                })




            }
            break;
        case "nyDato":
            if (!args[1]) {
                msg.reply("legg in en dag")
            }
            else {
                const channel = bot.channels.get("654723049517613056");
                msg.delete();
                const embed3 = new discord.RichEmbed()
                    .setTitle(args[1])
                    .setDescription("@here Hvis du kan du på " + args[1] + " reager med ✅ hvis ikke reager med ❌")
                    .setColor(0xE54827);
                channel.send("@here")
                channel.send(embed3).then(message => {
                    message.react("✅")
                    message.react("❌")
                })
            }
            break;
        case "shutdown":
            if (msg == "!shutdown" && message.member.hasPermission("ADMINISTRATOR")) {
                msg.delete()
                msg.channel.send("bot shutting down, bye!")
                console.log(msg.author + "sucesfully gave the shutdown command, shutting down")
                bot.channels.get("654085121309147156").send("sledbot offline:((")
                bot.destroy()
            }
            else {
                msg.reply("You dont have permission to do that")
                console.log(msg.author + "Just failed to shutdown the bot")
            }
            break;
        case "mute":
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.reply("Du har ikke tilgang til denne komadoen")
            }
            else if (!args[1]) {
                msg.reply("hvem vil du mute?")
            }
            else {
                let name = message.mentions.members.first();
                var role = message.guild.roles.find(role => role.name === "muted");
                name.addRole(role)
            }
            break;
        case "unmute":
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.reply("Du har ikke tilgang til denne komadoen")
            }
            else if (!args[1]) {
                msg.reply("hvem vil du unmute?")
            }
            else {
                console.log("ok")
                let name = message.mentions.members.first();
                var role = message.guild.roles.find(role => role.name === "muted");
                name.removeRole(role)
            }
            break;
        case "addRole":
            let name = message.mentions.members.first();
            let role2 = message.guild.roles.find(role => role.name === args[1]);
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.reply("Du har ikke tilgang til denne komadoen")
            }
            else if (!args[1] || !args[2]) {
                msg.reply("Ett eller flere argument mangler")
            }
            else if (name == undefined) {
                msg.reply("oi, noe gikk galt. kanskje denne rollen ikke eksisterer. Hvis denne rolen eksisterer og du mener noe annet er feil kontakt Gard med feilkoden ERR:ADDROLE.UNDEFINED")
                console.log("ERROR: ERR:ADDROLE.UNDEFINED  Full bot crash prevented ")
            }
            else {
                name.addRole(role2).catch(console.error, ()=> msg.reply("oi, noe gikk galt. kanskje denne rollen ikke eksisterer. Hvis denne rolen eksisterer og du mener noe annet er feil kontakt Gard med feilkoden ERR:ADDROLE.CATCH"))
            }
            break;
        case "removeRole":
             let name2 = message.mentions.members.first();
             role = message.guild.roles.find(role => role.name === args[1])
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
                msg.reply("Du har ikke tilgang til denne komandoen")
            }
            else if (!args[1] || !args[2]) {
                msg.reply("Ett eller flere agumenter mangler")
            }
            else if (name2 == undefined) {
                msg.reply("oi, noe gikk galt. kanskje denne rollen ikke eksisterer. Hvis denne rolen eksisterer og du mener noe annet er feil kontakt Gard med feilkoden ERR:REMROLE.UNDEFINED")
                console.log("ERROR: ERR:REMROLE.UNDEFINED  Full bot crash prevented ")
            }
            else {
             
                name2.removeRole(role).catch(console.error, () => msg.reply("oi, noe gikk galt. kanskje denne rollen ikke eksisterer. Hvis denne rolen eksisterer og du mener noe annet er feil kontakt Gard med feilkoden ERR:REMROLE.CATCH"))
            }
            break;
    }
 
    if (msg == "gard er dum") {
        msg.delete()
        msg.reply("EI, ikke kall gard dum")
    }
    if (msg == "Gard er dum") {
        msg.delete()
        msg.reply("EI, ikke kall gard dum")
    }


})

