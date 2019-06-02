const Discord = require('discord.js');
const fs = require("fs");

var bot = new Discord.Client
var prefix =  ("/");
var mention = "<@1930903359700619264>";
let coins = require("./coins.json");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
	bot.user.setGame("[/help]", `https://www.twitch.tv/lesuperbotlemeilleurbot`)
});

bot.login('NTY0ODMyODA4Nzg3NTA5MjQ4.XLx4uw.qfFJ-iyn6SHB91DdF_wHXvSpw_E');

exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};

bot.on('message', message => {
	if (message.content === "salut"){
		message.reply ("salut");
		console.log ("le salut a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "/anglais"){
		message.reply ("I speak English better than you and you know only 3 English words like yes, no, hello");
		console.log ("anglais a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "hey"){
		message.reply ("hey");
		console.log ("le hey a été effectuer")
	}


});
bot.on('message', message => {
	if (message.content === prefix + "slt tlm"){
		message.reply ("a saluer @everyone");
		console.log ("le salut tout le monde a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "enrevoir"){
		message.reply ("enrevoir");
		console.log ("le enrevoir a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "bye"){
		message.reply ("enrevoir");
		console.log ("le enrevoir a été effectuer")
	}
});

bot.on('message', message => {
	if(message.content ==="test un deux test"){
		message.channel.send("le groupe hack a fini le serveur test un deux test");
		console.log("serveur #1 supp")
	}
});

bot.on('message', message => {
	if (message.content === "je dois partir"){
		message.reply ("enrevoir");
		console.log ("le enrevoir a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "/cadeau"){
		message.reply ("miam miam merci beaucoup je te donne 10 points");
		console.log ("le cadeau a été envoyer")
	}
});

bot.on('message', message => {
	if (message.content === "oh oui oh oui"){
		message.reply ("salle pervers tu es dégue il ya des kiko qu'ils veulent avoir un poste en amblancier ");
		console.log ("le clash a commencer a été envoyer")
	}
});

bot.on('message', message => {
	if (message.content === "1+1=2"){
		message.reply ("ne fait pas ta tête d'oeuf");
		console.log ("le con a répondu")
	}
});

bot.on('message', message => {
	if (message.content === "fuck"){
		message.reply ("si tu insulte c'est que tu est con alors merci de ne pas insulter alors tu as 3 secondes sinon je te ban voilà alors tapette salope alors tu crois que tu peux insulter sans te prendre un clash alors tapette");
		console.log ("l'avertissement a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "fdp"){
		message.reply ("vous m'utiliser toute la journée et vous ne me récompencer et en plus vous m'insulter en plus je ne vous aime pas c'est bon ? alors que moi je fais tout pour vous c'est je ne suis pas venu ici pour souffrir oké ?");
		console.log ("la blague a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "ntm"){
		message.reply ("non non non ce n'est pas bien d'insulter la prochaine fois tu prend un warn");
		console.log ("l'avertissement a été effectuer")
	}
})

bot.on('message', message => {
	if (message.content === "je baisse ta mere"){
		message.reply ("non non non ce n'est pas bien d'insulter la prochaine fois tu prend un warn");
		console.log ("l'avertissement a été effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "cv"){
		message.reply ("oui ça va et toi ?");
		console.log ("cv effectuer")
	}
});

bot.on('message', message => {
	if (message.content === "cv ?"){
		message.reply ("oui");
		console.log ("cv effectuer")
	}

});

bot.on('message', message => {

	if (message.content === prefix + "/help"){
		var help_embed = new Discord.RichEmbed()
			.setImage(message.author.avatarURL)
			.setColor('#0B00FF')
			.addField("Commandes du bot", "les commandes sont les suivantes:\n -/server-info \n -/bot-info \n -/run \n -tu fais quoi quand tu me vois ? \n -tu fais quoi super bot ? \n -/Youtube \n -/support \n -/connect: pour te connecter sur le serveur in-game \n -/test (pour être white list)off pour le moment \n -/invite (en stop) \n -cv ? \n -salut \n -hey \n -slt tlm \n -enrevoir \n -bye \n -je dois partir \n -/anglais \n -/blague \n -/twitch \n -et si il y a un bug ou autre probleme avec le bot tu peux contacter mon créateur c'est jean-luc-kent#3728")
			.setFooter("fait par jean-luc-kent#3728 sur son serveur /invite")
		message.channel.sendEmbed(help_embed)
		console.log ("commande help #2 effectuer")
		}
	if (message.content === prefix + "help-admin"){
		var help_embed = new Discord.RichEmbed()
			.setColor('#FF0006')
			.addField("pouvoir admin", "les commandes admin:\n /ban (le vrai ban) \n /kick \n /clear")
			.setFooter("fait par jean-luc-kent#3728 sur son serveur /invite")
		message.channel.sendEmbed(help_embed)
		console.log("help admin demandé")
			}

});

bot.on('guildMemberAdd', member => {
	let serverTag = member.guild.name
	const welcomechannel = member.guild.channels.find('id', '580847436705038356')
	const role = member.guild.roles.find("name", "hardcore")    
	member.addRole(role)
	var embed = new Discord.RichEmbed()
	.setColor('#FF0006')
	.setDescription(`:inbox_tray: <@${member.user.id}> à rejoint ${serverTag}`)
	return welcomechannel.send({embed})
});

bot.on ('message', message => {
    if (message.content === "/run"){
    message.channel.send("je cour quand je te vois https://i.imgur.com/YI0FsKV.gifv")
    console.log("run effectuer")
    }
});

bot.on ('message', message => {
    if (message.content === "tu fais quoi super bot ?"){
    message.channel.send("bah je fait cette tête https://i.imgur.com/tpUloag.jpg")
    console.log("lol effectuer")
    }
});

bot.on ('message', message => {
    if (message.content === "tu fais quoi quand tu me vois ?"){
    message.channel.send("bah je fait cette tête quand je te vois lol :joy: et si tu m'ennerve je te casse la guelle https://i.imgur.com/XwYkgwX.gifv")
    console.log("la tête quand il vois ta tête effectuer")
    }

});

bot.on('message', message => {

	if(message.content === prefix + "help"){
		var help_embed = new Discord.RichEmbed()
			.setImage(message.author.avatarURL)
			.setColor('#FF0006')
			.addField("Commandes du bot", "	-//help : Afiiche les commande de ce bot")
			.addField("interaction", "tu peux voir toute les commande du bot en fessant //help :wink:")
			.addField("admin","-/help-admin")
			.addField("bot info","/bot-info")
			.addField("serveur info","/server-info")
			.setFooter("fait par jean-luc-kent#3728 sur son serveur /invite")
		message.channel.sendEmbed(help_embed)
		console.log ("commande help #1 effectuer")
    }

    if (message.content === prefix + "connect"){
		var help_embed = new Discord.RichEmbed()
			.setColor('#167210')
			.addField("l'ip ", "voilà l'ip du serveur est: =>51.38.219.35<= \n si tu as besoin de l'aide de mon devloppeur c'est jean-luc-kent#3728")
			.setFooter("fait par jean-luc-kent#3728 retrouve le dans son serveur /invite")
		message.channel.sendEmbed(help_embed)
		console.log ("lien de connection effectuer")
    }


    if (message.content === prefix + "support"){
		var help_embed = new Discord.RichEmbed()
			.setColor('#FF0006')
            .addField("le lien vers le discord de support en anglais et en français", "https://discord.gg/3te9rHj")
            .setFooter("fait par jean-luc-kent#3728 retrouve le dans son serveur /invite")
		message.channel.sendEmbed(help_embed)
		console.log ("discord de support a été donner")
    }
});


bot.on('message', message => {
	if (message.content === "nn je ne vais pas bien"){
		message.reply ("cela ne me fait rien :'( ramener moi des mouchoir svp");
		console.log ("reponse n°2 effectué")
	}

	if (message.content === prefix + "bot-info"){
		var help_embed = new Discord.RichEmbed()
		.setDescription("Bot Information")
		.setColor("#15f153")
		.addField("Bot Name", bot.user.username)
		.addField("Created On", bot.user.createdAt)
		.setFooter("fait par jean-luc-kent#3728 sur son serveur")
		message.channel.sendEmbed(help_embed)
	}
	if (message.content === prefix + "server-info"){
		var help_embed = new Discord.RichEmbed()
    .setDescription("Server Information")
		.setColor("#15f153")
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
		message.channel.sendEmbed(help_embed)
	}

});

bot.on('message', message => {
	if (message.content === "fils de pute"){
		message.reply ("bah allez vous faire fouttre moi je ne suis pas venu ici pour souffrir oké ?");
		console.log ("je ne suis pas venu ici pour souffrir oké effectué")
	}
});

bot.on('message', message => {
	if (message.content === "/twitch"){
		message.reply ("https://www.twitch.tv/jeanluckent :wink:");
		console.log ("lien de la chaine twitch n°2 donné")
	}
	if (message.content === "/youtube Snow78"){
		message.channel.send("||https://bit.ly/2w4tzHj|| :wink:");
	}
	if (message.content === "/youtube PewdiePie"){
		message.channel.send("||https://bit.ly/1iIoLvM|| :wink:");
	}
	if(message.content === "/youtube squeezie"){
	message.channel.send("||https://bit.ly/1e8YHZY|| :wink:")
	}
	if(message.content === "/youtube docteur"){
		message.channel.send("||https://bit.ly/2YG7NG5|| :sob:")
	}
});

bot.on('message', message => {
	if (message.content === "/besoin de staff"){
		message.reply ("deux seconde le staff vas s'occuper de toi ne demande pas une question débile pour ne pas énerver le staff");
		console.log ("pesonne en attente du staff")
	}
});

bot.on('message', message => {
	if (message.content === "invite sur le serveur"){
		message.reply ("voilà l'ivitation pour le serveur du support https://discord.gg/cRvJYbY et vas demander jean luc kent si est connecter tu lui envoi(e) un mp et si non bah tu lui envoi aussi un mp voilà");
		console.log ("invite envoyer")
	}
});


bot.on('message', message => {
	if (message.content === "/youtube"){
		message.reply ("voila la chaine https://www.youtube.com/channel/UCbpgYmbHbW5iCnFJX4hh-aQ :smiley: :wink:");
		console.log ("effectué")
	}
});

bot.on('message', message => {
	if (message.content === "bon app"){
		message.reply("bon app et ne meurt pas")
		console.log("bon app a été effectué")
	}
});

bot.on('message', message => {
	if (message.content === "/test"){
	message.reply("la premiere question c'est quelle est le streamtalk ? \n /1= être sur un live est suivre le streamer (sur le serveur) et réutuliser les information dans son rp \n /2= regarder un live et dire au streamer que tu est avec lui sur le serveur \n /3= regarder un streamer et ne pas etre avec lui sur le serveur mais dire que tu est avec lui sur le serveur");
	console.log("question de test n°1")
	}
});

bot.on('message', message => {
	if (message.content === "/1"){
	message.reply("bonne réponse et tu dois écrire 2 question pour passer a la prochaine question");
	console.log("réponse n°1 de test n°1")
	}
});

bot.on('message', message => {
	if (message.content === "/2"){
	message.reply("mauvaise réponse et tu dois écrire 2 question pour passer a la prochaine question");
	console.log("réponse n°2 de test n°1")
	}
});

bot.on('message', message => {
	if (message.content === "/3"){
	message.reply("mauvaise réponse et tu dois écrire 2 question pour passer a la prochaine question");
	console.log("réponse n°3 de test n°1")
	}
});

bot.on('message', message => {
	if (message.content === "2 question"){
	message.reply("la 2eme est ce que on a le droit de faire un rp oposer a son sex irl ? \n /yes= oui(seulement si tu sais faire la voix du sex oposser) \n /non= non personne ne peux faire un rp avec le sex oposser");
	console.log("question de test n°2")
	}
});

bot.on('message', message => {
	if (message.content === "/yes"){
	message.reply("bonne réponse et tu dois écrire 3 question pour passer a la prochaine question");
	console.log("réponse n°1 de test n°2")
	}
});

bot.on('message', message => {
	if (message.content === "/non"){
	message.reply("mauvaise réponse et tu dois écrire 3 question pour passer a la prochaine question");
	console.log("réponse n°2 de test n°2")
	}
});

bot.on('message', message => {
	if (message.content === "3 question"){
	message.reply("la 3eme est-ce que a ton le droit d'etre streamer ? \n /yeah= oui(seulement si on cache la mini-map) \n /nope= non on ne peut pas faire de stream sur le serveur");
	console.log("question de test n°3")
	}
});

bot.on('message', message => {
	if (message.content === "/yeah"){
	message.reply("bonne réponse et tu dois écrire 4 question pour passer a la prochaine question");
	console.log("réponse n°1 de test n°3")
	}
});

bot.on('message', message => {
	if (message.content === "/nope"){
	message.reply("mauvaise réponse et tu dois écrire 4 question pour passer a la prochaine question");
	console.log("réponse n°2 de test n°3")
	}
});

bot.on('message', message => {
	if (message.content === "4 question"){
	message.reply("la 4eme c'est quoi le metagaming ? \n /oui= utilisation d'information dites en HRP et les reutiliser dans son RP \n /no= regarder un live et suivre et le suivre et le suivi in-game");
	console.log("question de test n°4")
	}
});

bot.on('message', message => {
	if (message.content ==="le mot magique est /message.reply"){
		message.reply("```bonne-reponse ah oui se n'est pas bien de tricher```");
		console.log("bonne-reponse donné")
	}
});

bot.on('message', message => {
	if (message.content === "/oui"){
	message.reply("bonne réponse et tu dois écrire !bonne-reponse pour avoir le role citoyen");
	console.log("réponse n°1 de test n°4")
	}
});

bot.on('message', message => {
	if (message.content === "/no"){
	message.reply("mauvaise réponse et sorry tu dois refaire le questionnaire récrit debut du test");
	console.log("réponse n°2 de test n°4")
	}
});

bot.on('message', message => {
	if (message.content === "ntm le super bot"){
		message.reply("mais mais pourquoi tu m'insulte :sob:");
		console.log("réponse de victime #1 a été effectué")
	}
});

bot.on('message', message => {
	if (message.content === "fdp le super bot"){
		message.reply("mais mais pourquoi tu m'insulte :sob:");
		console.log("réponse de victime #2 a été effectué")
	}
});

bot.on('message', message => {
	if (message.content === "/ban"){
		message.reply ("tu peux le faire toi même je ne vais me fatigué a le faire aller je vais dormir moi et ne me le redemande plus oké ? car vous me fatigué a la fin oké ?");
		console.log ("ban effectué")
	}
});

bot.on('message', message => {
	if(message.content === "qui vas voir aladin"){
		message.reply ("bah moi je ne vois pas des films de bébé oké alors arrête de regarder des films comme ça svp :wink:");
		console.log("avis sur le film a été demander")
	}
});

bot.on('message', message => {
	if(message.content === prefix + "bonne-reponse"){
		message.reply ("bah tu vois que tu peux le réussir");
		console.log("test réussi")
	}
});

bot.on('message', message => {
	if (message.content === 'ping') {
	  message.reply('Pong!');
	  console.log("ping pong effectuer")
	}else if (message.content.toLocaleLowerCase().startsWith(prefix + "shutdown")){
		if (message.member.hasPermission("ADMINISTRATOR")){
			bot.destroy();
		}else{
			message.channel.send("tu n'as pas les permission !")
		}
	}
});


bot.on('message', message => {
	if(message.content === '/clash') {
		message.reply('oké oké tu veux jouer a ça ? oké oké et après ne vas pas sous la robe de ta mere pour pleurer comme tu fait tout les jour car tu vois que tu est seul');
		console.log("clash effectuer")
	}
});

bot.on('message', message => {
	if(message.content === "/remb") {
		message.channel.send("ici c'est pour les remboursement :joy: il s'est fait n**** nn je rigole il acru ");
		console.log("le /remb a été effectuer")
	}
});

bot.on('message', message => {
	if(message.content ==="imite quelqu'un"){
		message.channel.send("https://tenor.com/view/zac-hanson-sing-keyboard-gif-11931826 essage de savoir c'est qui ?");
		console.log("essage de savoir c'est qui ? effectuer")
	}

	if (message.content.startsWith("/kick")) {
		if (message.member.hasPermission("ADMINISTRATOR")){
		}else{
			message.channel.send("no no no tu ne peux pas le faire!")
		}
			var member= message.mentions.members.first();
			member.kick().then((member) => {
				let kickEmbed = new Discord.RichEmbed()
				.setDescription("~Kick~")
				.setColor("#e56b00")
				.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
				.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
				.addField("Kicked In", message.channel)
				.addField("Tiime", message.createdAt)
				.addField("Reason", kReason)
			}).catch(() => {
			});
	}
	if (message.content.startsWith("/ban")) {
		if (message.member.hasPermission("ADMINISTRATOR")){
		}else{
			message.channel.send("no no no tu ne peux pas le faire!")
		}
			var member= message.mentions.members.first();
			member.ban().then((member) => {
					message.channel.send(":wave: " + member.displayName + " a été ban du serveur :point_right: par ");
			}).catch(() => {
				message.channel.send("Access Denied");
			});
	}

});

bot.on('message', message => {

	if(message.content === "puni emma") {
		message.channel.send("emma est dans sa chambre <@452404407531732992>");
	}

	if(message.content === "puni sergent") {
		message.channel.send("Sergent est partie dans sa chambre <@305761737494364163>");
	}

	if(message.content === "puni neo") {
		message.channel.send("Neo est partie dans sa chambre <@301833464205017089>");
	}

	if(message.content === "puni sevan") {
		message.channel.send("Sevan est partie dans sa chambre <@342685895927005184>");
	}

	if(message.content === "/app") {
		message.channel.send("alert braquage alerte rouge");
	}

});

bot.on('message', message => {
	if(message.content === prefix + "blague") {
		message.channel.send("la blague c'est toi")
		console.log("blague")
	}
	if(message.content === "hey chloé") {
		message.channel.send("salut chloé la santé est bien ou pas ? <@579013073436934164>")
		console.log("zbeub zbeub")
	}
});

