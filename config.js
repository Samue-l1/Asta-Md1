const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://deepilhtre:SnevWOzpT58v3bJO@cluster0.xfekuvl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Emperordagoat/Asta-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "αѕтα-м∂ 2024" 
global.BUTTONS = process.env.BUTTONS || process.env.MENU_BTN || "1";


global.devs = "2348039607375"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348039607375";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348039607375";
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348039607375";


global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348039607375";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348039607375";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JYcWdEeEk3eXRCbHNOWUtIK0VoMkx5K3g4dUw1M2dGMWU4SHhNd2kzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQi9OUDZwQjFRQXhma1QrVVFkSjZqNWFxL1ZlU3U3d2RPVXlTd0V1TWJqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T1JVMFhOZWVwTktqRnZvN1IwaXZtWXNKby9LWnZzbEhmdDJCMk05MTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvY0NnNzVTcStpTTdVVGMrcTZwMnpFK3ZiUEZLWjhIN1BNZ2N0d2hsNTN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JNDFjQ25IcjE4LzdOTE8wWWMyK3B0eVdVaW1WMzZIblk0UEI0Z0JLVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEU29CSTg4Tm5OOHZxdFJKSHd3dHVDTTdXZlVQV1hKLzdRb0FRMno1ek09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEp2Q1M0RWQ4aThzZ2lrQ1dxeENRUms5dUNpL3QrRW42Y3VnbXNsWlZsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnpYRjlMWXJhaitaYWltc3ZOZDZsYnFlNXFvdWJ4WUlscUF3VDFIckVYVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldhQTVMaVRmOVY1QUcvbGUzUWFFbDZPRi85RGcrbG5MQ2k1YlJUK3hQOUllakdacEYvRCt0KzdrYjVMRnZBRUNKaHRQSzI1SWdBTlViT0taVitHYmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJYTGZIa3FtYnRPUTRWTmo2dXpuZ3Q3blczM05QcjlhbzNmRUxTK0xHNDBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1cGIwSUQ0Q1RNeTZGVVo3NHlsdWRBIiwicGhvbmVJZCI6ImVkYzMwODQ1LTBjYWUtNDNiYy04NWQ1LWJmMGY5MmU1NzczYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNk45REJnTnhNOU1NcU1aN3ZGTVNNR1dZQnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjVrK3dIZEx6ZjFqQitwcjVuZHV5aUJTaDFzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZONDNGSExRIiwibWUiOnsiaWQiOiIyNTQxMTQxMjQ5MTQ6MjBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lhSzRFY1FnS1BTc3dZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikt1OFRRSStRcGluYWEzYktUaXZUbHIrcm1BdThLMzJrWFlvOERXN1prd2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlmOHlhU2crZ29lUmdQOWY3QmYvKysybjRNQ1FGZkd4c2RYMmwxaFM1SE1zVVNqLzV1NnNiaHpNNlFPc3Vva2YzV29xdVJiMC9xWWs0Y3dkelF6WUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwcERSTkloQk1vYUZaZFlsWEtqZzFNdDdDdU1MakYzNDVybTNheTZzQkEzMnJoc0p3WmVCZWN1LzdPczR6VWdqYk04eFZoOVBEcVRPbHB4a0FhODJnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExNDEyNDkxNDoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTcnZFMENQa0tZcDJtdDJ5azRyMDVhL3E1Z0x2Q3Q5cEYyS1BBMXUyWk1IIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4OTE1NDY5fQ=="


module.exports = {

  menu: process.env.MENU || "", 

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "αѕтα-м∂ 2024" , 
 
  author : process.env.PACK_AUTHER|| "αѕтяσ",
  packname: process.env.PACK_NAME || "αѕтяσ",
  botname : process.env.BOT_NAME  || "ᴀsᴛᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "αѕтяσ",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
