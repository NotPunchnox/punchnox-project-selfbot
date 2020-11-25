
#
Bienvenue sur le punchnox-project
Merci de votre confiance

Si vous voulez acheter le premium vous pouvez vous rendre sur ce serveur :
`https://discord.gg/punchnox`

comment configurer le selfbot ?

-Les modules sonts dans l'archive "node_modules.rar" il vous faut juste l'extraire dans le dossier punchnox-project.



1- Récuperez votre token :
https://www.youtube.com/watch?v=fv-H68OwsIA
Vous pouvez regarder cette vidéo qui explique comment le récuperer


-2 Ensuite mettez votre token dans le config.json,
```json
///exemple
///laissez bien les guillemets comme dans l'exemple :
"token":  "NzI5NjQ5NjE3OTQzMzk2Mzcy.XwMBjw.nTbuP7qa3zAdNUtVcpASy1nfoqE",
```


-3 Faites de même pour le prefix, l'image des embeds, la couleur, votre lien twitch, le nsfw, le nitro auto claimer et le multi stream.

```json
{
    "token": "votre token",
    "prefix":  "votre prefix ( . / * ect )",
    "image":  "le lien de l'image des embeds",
    "color":  "name de la couleur comme: black random ... ou des couleurs html comme: #00FFDC",
    "twitch":  "votre lien twitch",
    "nsfw": "on ou off",
    "nitro_claimer": "on ou off",
    "multi_status": ["Votre multi stream 1 ",  "Votre multi stream 2 ",  "Votre multi stream 3 "]
    }
```


-4 Si vous ne comprenez pas je vous ai fais un exemple de quoi ça doit ressembler.

```json
{

    "token":  "NzI5NjQ5NjE3OTQzMzk2Mzcy.XwMBjw.nTbuP7qa3zAdNUtVcpASy1nfoqE",
    "prefix":  "/",
    "image":  "https://cdn.discordapp.com/attachments/718445465988890634/719457406911774820/community_image_1430247464.gif",
    "color":  "RANDOM",
    "twitch":  "https://twitch.tv/punchnox",
    "nsfw": "on",
    "nitro_claimer": "on",
    "multi_status": ["punchnox-project",  "V1.0.0",  "by punchnox"]
           
}
```

Ensuite je vous ai faits une Riche présence custom que vous pourrez paramètrer dans le config.json

![ScreenShot](https://media.discordapp.net/attachments/726415763526647841/730716565049311322/unknown.png)

ceci est un exemple de riche présence custom pour la paramétrer rendez-vous  sur discord developers :

https://discord.com/developers/applications/




-Créez une nouvelle application comme dans le screenshot

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730718138953367582/tempsnip.png)


-Cliquez sur "create" après avoir donné un nom à vôtre application

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730718437587943494/tempsnip.png)


-Copiez le "CLIENT ID" (cliquez sur copier) comme sur le screenshot

-Ensuite ouvrez le fichier config.json et mettez le client id que vous avez copié.
ça devrait ressembler à ça :
```json

"application_id": "730718483599458365",
```
(à la place de 730718483599458365 vous collez l'id de vôtre application.)

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730718938580779088/tempsnip.png)




-Retournez sur discord devlopers puis allez sur "Rich Presence" et "Art Assets"
-Cliquez sur "Add Image(s)"
-Puis ajoutez une image

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730720335887859722/Sans_titre.png)


-Donnez un nom à vôtre image

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730720955466252378/tempsnip.png)


-Il vous reste à cliquer sur "Visualizer"
-Et vous paramétrez vôtre Rich Presence

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730726405138284584/tempsnip.png)


-Et pour finir vous mettez vos paramètres dans le config.json (pas besoin de faire "SMALL IMAGE KEY" et "START TIMESTAMP") comme sur le screenshot

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730726385118740520/Capture.PNG)

Et voila le résultat :)

![ScreenShot](https://cdn.discordapp.com/attachments/726415763526647841/730726975865356338/Capture.PNG)



Et voila le puchnox-project est à vous :)
