// TIKTOK DOWNLOAD COMMAND

const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app' // API LINK ( DO NOT CHANGE THIS!! )


cmd({
    pattern: "tiktok",
    alias: ["tt","ttdown"],
    desc: "downloadTiktok",
    category: "download",
    use: '.tiktok < url >',
    react: "📽️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('tiktok.com')) return await reply("This url is invalid");
  
const tiktok = await fetchJson(`${apilink}/download/tiktok?url=${q}`);
  
const msg = `
           🍧 *TIKTOK DOWNLOADER* 🍧


• *Title* - ${tiktok.result.title}

• *Author* - ${tiktok.result.author}

• *Duration* - ${tiktok.result.duration}

• *Views* - ${tiktok.result.views}   


     𝑸𝒖𝒆𝒆𝒏_𝑨𝒉𝒊𝒏𝒔𝒂-𝑴𝑫
`
  
// SEND DETAILS
await conn.sendMessage( from, { image: { url: tiktok.result.cover || '' }, caption: msg }, { quoted: mek });


// SEND HD VIDEO
await conn.sendMessage(from, { video: { url: tiktok.result.hdVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nNO-WATERMARK VIDEO ✅` }, { quoted: mek });
await m.react("✅");
  
} catch (e) {
console.log(e)
reply(e)
}
})

