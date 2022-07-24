const { Command } = require("../../../../Global/Structures/Default.Commands");

class Example extends Command {
    constructor(client) {
        super(client, {
            name: "example",
            description: "Bu bir deneme komutdur.",
            usage: "Kullanımı çok basittir bence denemelisin.",
            category: "Others",
            aliases: ["ex","exa"],

            enabled: true,

            // Beklemeyi kaldırmak için aşağıdaki satırı kaldırın.
            cooldown: 3500,

            // Yetkiye sahip olması gerekenleri belirtiyoruz ayrıca sadece o üyenin kullanması için de ayarlayabilirsiniz üye idsi belirtlemlisiniz.
            // Hem rol hem bitfield olarak yetkileri belirtebilirsiniz.
            permissions: ["BOT_OWNER","GUILD_OWNER"],
        });
    }
    
    /*
    *
    * Bu onLoad mevzusunu benim botta gördüğünüz için anlatmak istiyorum. 
    * Bu onLoad komutunuz açılmadan önce ilk önce burayı görür ve burayı client'ınıza ekler.
    * Örn:
    * client.on('ready', () => { console.log("Ben onLoad ile çalışıyorum.") })
    * 
    * @param {client} client
    * @returns {Promise<Client>}
    */

    onLoad(client) {
    
    }

    onRequest (client, message, args) {
       message.reply({content: `Ben bir denemeyim. ${args && args.length > 0 ? `Bana verilen argümanlar: ${args.map(x => x).join(", ")}`: "Argüman eklememişsin."}`})
       .then(x => {
            setTimeout(() => {
                x.delete().catch(err => {}) 
            }, 7500)
        })
    }
}

module.exports = Example