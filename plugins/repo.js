const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📩",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*🧬REPO LINK📥👇*

🤖◦https://github.com/HerokuSL/Queen_Ahinsa-MD
    
*🤖YT CHANNEL📥👇*
    
🤖°https://www.youtube.com/@srilanka-no1AWM-FF
    
*🧬WHATSAPP CHANNEL📥👇*

🤖◦https://whatsapp.com/channel/0029VaoPSh9HrDZdNIpYes0s

>      𝑸𝒖𝒆𝒆𝒏_𝑨𝒉𝒊𝒏𝒔𝒂-𝑴𝑫

`
await conn.sendMessage(from,{image:{url: `your alive img url`},caption:dec},{quoted:mek});
await m.react("✅");

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
