
const Discord = require("discord.js")
//ici on importe les modules (pour ma part j'ai mis discord.js pour les embeds) vous pouvez en mettre d'autres disponible dans le fichier package.json


module.exports.run = async (client, message, argument) => {
  //ici on exporte client message et argument


  const embed = new Discord.RichEmbed()//constante embed (new discord.RicheEmbed())
  .setTitle("Exemple titre")//Titre
  .setDescription("Exemple description")//description
  .addField("Exemple Field", "Exemple field")//Field
  .setColor("random")//la couleurs vous pouvez mettre une couleur html,hex,rgb,hsl
  .setImage("https://media1.tenor.com/images/bc7f6147063085d89b403cb96de6f883/tenor.gif?itemid=4973579")//vous mettez le lien d'une image ou son emplacement
  .setFooter("exemple footer", client.user.AvatarURL)//le footer 
  message.edit(embed)//edit le message par la constante embed


}

//ici c'est pour expotrer le nom de la commande (ici c'est exemple)
module.exports.punchnox = {
  name: "exemple"
}