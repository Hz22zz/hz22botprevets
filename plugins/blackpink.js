let fetch = require('node-fetch')
let bpink = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt')
    .then(res => res.text())
    .then(txt => bpink = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = bpink[Math.floor(Math.random() * bpink.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih Blackpinknya jangan lupa subscribe channel https://m.youtube.com/channel/UC0rPHvwr0sJtaccF8Mm1Xng 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.limit = 5
handler.command = /^(bpink|bp|blackpink)$/i

module.exports = handler
