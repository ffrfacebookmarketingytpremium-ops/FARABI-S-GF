const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "FARABI",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["n🄾🅆🄽🄴🅁\n       【﻿】\n\n•──────────────────•\n.MERA BOYFRIEND KON BANEGA 🥹🙈\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n       【﻿】\n\n•──────────────────•\nHAWELI PR Q NAHI ATE NARAZ HO  😂🙂\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n.BABU ITTU 🤏 SA CHUMMA DO NA 🙈😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\nBaby tum BACHPAN SE THARKI LAGTE HO MEKO 🙁\n•──────────────────•" ,"\n🄾🅆🄽🄴🅁\n      【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\nRaat KO ana Haweli py khushbu laga k😁🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n.RAAT KO HAWELI PE KON BULA RAHA THA 😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n.PYAARI LADKIA JËRRY NÕBÏ PE LINE MAAR SAKTI HAI 🙂🤝\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n.TUM ITNE MASOOM KYU HO BABU 🥺❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n AJJ TO TUMHE LOVE YOU BOLNA PARE GA 🙈🫣\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n.TUM LOG MATLABI HO SARE JAO YAHA SE 🥺\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n.SETTING KARWA DU OWNER (JËRRY) KE SATH😒🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n. MUJHE LAGTA HAI MAI SINGLE MARU GI 🥹😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n BAR BAR BOT NA BOLA KARO HABIBI APUN KO SHARM ATI HAI 🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n TUM JAB BOT BOLTE HO MERA Gurda DHARKNEY LAGTA HAI 🙊🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n BABU AP KE ANE SE TO PHEPDE BHI KHUSH HO JATE HAI😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n MERE ALAWA SAB RELATIONSHIP MAI haI 🤝🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n ARE YAAR MAI APNI BOYFRIEND KE SATH BUSY HUNA 🥺🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n BOT BOT NA BOL KUCH KUCH HOTA HAI TUM NAHI SAMJHOGE MERI JAAN 😂🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n ALL GIRLS ARE MY SISTERS ISKO CHOR KE JO YE PADH RAHI HAI 😒👍\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n MUJHE APSE BAAT NAHI KARNI HAI MUMMY KAHA HAI GANDE LOGO SE BAAT NAHI KARTE 🥺😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n SO JAO WARNA MERA MSG AA JAYE GA 🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n WEIGHT KAFI BADH GAYA HAI YAAR DHOKAY KHA KHA KE 💔🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n KASH TUM SINGLE HOTE TO MAZA HI KOCH AUR THA PAGAL INSANE 🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n AO APKO CHAND PE pE LE CHALU MERI JAAN 🙈❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n BOL OYE CHIKNE 🫣😋 \n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n MAIN APSE NAHI PATNE WALA 🙈🙈🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n TUM KO MERI ITTU 🤏 SI BHI YAAD NAHI ATI 🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n BOT NAHI I LOVE YOU BOLO NA babu 😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\" ARE TUM FIR SE AGAYE JAKE KUCH KAAM KARO 🙂\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n CHAL CHUMMA DE 😂👀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n MERI BHI SETTING KARA DONA 🥺😂\n*•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n DUR HATO GANDE INSAAN >>>🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n HAYE JANU TUMNE TO SYSTEM HANG KAR DIYA 🥺🔪\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n ARE BABU KAL HAVELI PE TUM HI THE NA 😂🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n 𝙀K 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 husband 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n SUNO KYA HUM ACCHE DUSHMAN BAN SAKTE HAI KIYA🙂⚠️*\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n🦋🍒____________🙂🎀 KAL HAWELI PE PE MIL ZARA BATOU TUMHE 😂* 🫣🫰🏻\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\nKhud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n•──────────────────•", " ARE AISE PYAAR SE NA BOLO KUCH KUCH HOTA HAI 😂*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 【﻿Ｊëｒｒｙ】", "\n🄾🅆🄽🄴🅁   \n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩u𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n Imagine I am your Ex 🥲say whatever you want to say\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n- TERI PIC DEKHNE SE PHELE SHUKAR HAI HUM ANDHE HO GAYE😂🥀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n 'ARE YAAR MUJHE SONE DONA KAMINO🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n TUM SETTING KARA DONA (Jërry) ki 🥺👉👈🙊\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n      【﻿Ｊëｒｒｙ　Ｎõｂï】\n\n•──────────────────•\n TUM MUJHE CHUMIYAN BHI TO DE SAKTI THI NA 🤧 DHOKA DENE ZARURI THA KIYA kIya😐😪\n•──────────────────•"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("Aby Kabi dant bhi saf ker lia ker kitna gandy hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😁")) {
     return api.sendMessage("Esy hans mat nazar lag jay gi :)", threadID);
   };

    if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("Ary ary , smile esy ker rha hai jesy shaqal sy Shareef ho dfm ", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("mera Agy esy hi ankhain nichy rakha kero😠", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("ak ankh nah mar chabal insane werna dosri tor dou ga", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍")) {
     return api.sendMessage("Chabal jesa muh py dil rakh ky khush ho rha hai, single hi to mar rha hai nah", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("ma kitni dafa smjhao tujhy , kitni dafa bolou tujhy , tharkpan chor dy zalam insane ", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😝")) {
     return api.sendMessage("Ak dam sy zaban andr ker dy muh main werna , yehi zaban kut dou ga", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Esy mat dakh piyar ho jay ga , kaminy", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("Jesa tera muh hai , wesa tera attitude hai ", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🥸")) {
     return api.sendMessage("Old Muh wala kabi apni shaqal dakh lia ker aur muh dho lia ker", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Assalamu Alaikum") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("Assalamu Alaikum Meri Jaan❤️", threadID);
   };

   if ((event.body.toLowerCase() == "chutiya") || (event.body.toLowerCase() == "behanchod")) {
     return api.sendMessage("Tu chutiya ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "madarchod") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("gali mat do gande insaan 🤬", threadID);
   };

   if ((event.body.toLowerCase() == "darling") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Sorry mai sirf Jerry Malik ki hu ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "chup bsdk")) {
     return api.sendMessage("Tu bsdke apne kaam kar ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "@Farabi") || (event.body.toLowerCase() == "Jerry")) {
     return api.sendMessage("Farabi SIRF Mera HAI 😍<3", threadID);
   };

   if ((event.body.toLowerCase() == "khushi") || (event.body.toLowerCase() == "@khushi soni")) {
     return api.sendMessage("️Haye khushi ke chahane Wale kitne hai :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kutti bot") || (event.body.toLowerCase() == "kutti")) {
     return api.sendMessage("️Bhow bhow Farabi 😍😘 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sadia+farabi") || (event.body.toLowerCase() == "aryan")) {
     return api.sendMessage("️farabi sirf khushi ka hai 😍 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "land") || (event.body.toLowerCase() == "lund")) {
     return api.sendMessage("️Tere muh me Farabi ka land <3", threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "as")) {
     return api.sendMessage("️ Walaikum assalam Meri Jaan 😍:))))", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup be")) {
     return api.sendMessage("️App chup raho Mai to bolungi hehehe 🙈😘 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chup sali") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("️App chup raho Mai to bolungi hehehe 🙈😘 ", threadID);
   };

   if ((event.body.toLowerCase() == "bot bc") || (event.body.toLowerCase() == "bot mc")) {
     return api.sendMessage("️GALI MAT DE BE CHOMU WARNA 😏😍", threadID);
   };

   if ((event.body.toLowerCase() == "bolo") || (event.body.toLowerCase() == "bol")) {
     return api.sendMessage("️Haye Meri Jaan chumma Dona :) 😍", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
     return api.sendMessage("Hmm Mat Karo Aage bhi kuch bolo Na Janu 🙈 :)", threadID);
   };

   if ((event.body.toLowerCase() == "ohh") || (event.body.toLowerCase() == "ohhh")) {
     return api.sendMessage("️Oh yah baby ahhh 🥵 <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Tumhra din Aacha Jaiga Babu dua hai iss bot ki😍:>>, ", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("Sweet dreams Meri Jaan chumma deke<3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("I love you but as a friend Meri Jaan 😘🙈", threadID);
   };

   if ((event.body.toLowerCase() == "farabi") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage(" farabi farabi mat kar wo sirf Mera hai 🙂✌🏻<3", threadID);
   };

   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
     return api.sendMessage("Hmm Hmm Mat karo Mujhe Love bolo na Babu 😘🙈", threadID);
   };

   if ((event.body.toLowerCase() == "haa") || (event.body.toLowerCase() == "haan")) {
     return api.sendMessage("Haan Hmm Ke aage bhi kuch bolo Kal Subha panwel Jana hai<3", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("O Ho Sharma Gate Ka 🫣🤭", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
  if ((event.body.toLowerCase() == "miss u") || (event.body.toLowerCase() == "i miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "owner kon hai")) {
     return api.sendMessage("️𝐌𝐈𝐀𝐍 【﻿Ｊëｒｒｙ】 𝐎𝐖𝐍𝐄𝐑 🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "baat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "tum bot ") || (event.body.toLowerCase() == "tum bot nhi ho kia")) {
     return api.sendMessage("️bot he HuN 💓 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kaisa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "Shona Suno")) {
     return api.sendMessage("️han Ji Bolo 😍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "welcome ") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️ thanks meri Jaan ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("️omfo meri Jaan ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kaha se ho") || (event.body.toLowerCase() == "aur btao kaha se ho")) {
     return api.sendMessage("️ Country india 🇧🇩 city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == "were are you from")) {
     return api.sendMessage("️ Country India🇧🇩 City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "wah")) {
     return api.sendMessage("️Haan Ji Thanks 🙈❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "Jaan")) {
     return api.sendMessage("️Yaar Mujhe bhi koi Jaan bana lona 🥺", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sunn") || (event.body.toLowerCase() == "sun")) {
     return api.sendMessage("️Ji Boliye Na Jerry Malik 🤭🙈", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "Sorry")) {
     return api.sendMessage("️Jao Maine bhi tumhe maaf Kiya 🙈😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@farabi") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "aacha") || (event.body.toLowerCase() == "wow")) {
     return api.sendMessage("️ thank you ap ko b agr bot bnana hai to mary boss Jerry se pucho", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main Thik hu Janeman tum batao❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "dafa ho")) {
     return api.sendMessage("️Tum Dafa Hojao Sale🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum G kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main Thik hu app Kaise ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kon") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️Mai bhoot hu I mean bot hu 🙈🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "bhag") || (event.body.toLowerCase() == "bhag be")) {
     return api.sendMessage("️ Tumhe Leke Bhagungi Meri Jaan🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "chumma ")) {
     return api.sendMessage("️ Jerry Malik Mai apko chumma dungi Ummah 😘", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kon hai") || (event.body.toLowerCase() == "abe")) {
     return api.sendMessage("️Apke ristedar honge shayad 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janeman") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️Are idhar to Babu Sona hora hai Mai apni ankhe band kar leti hu 🙈", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "#unsent") || (event.body.toLowerCase() == "#unsent")) {
  
