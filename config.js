const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94760668535" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760668535";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_03_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibGlVczljRjZNT05jVmp5WWtobUtxSnowRnlXcjQzTGNsWVFsay9mb01KQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicDdrQTN2LXFSQi0wOUJOM3VCbFQ2Z1wiLFxuICBcInBob25lSWRcIjogXCJhNmRlZjA0OC05ZTQ1LTQ4NjMtYTE1NC04NjM4NWFhNDBkMzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTc3LFxuICAgICAgNTYsXG4gICAgICA2MixcbiAgICAgIDYzLFxuICAgICAgMTgwLFxuICAgICAgNjgsXG4gICAgICAxNDUsXG4gICAgICAxNTcsXG4gICAgICAxNTQsXG4gICAgICAxMzEsXG4gICAgICA3NixcbiAgICAgIDE0OCxcbiAgICAgIDEzOSxcbiAgICAgIDEwMSxcbiAgICAgIDE3MyxcbiAgICAgIDM4LFxuICAgICAgNTEsXG4gICAgICAyMCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgNDAsXG4gICAgICA4LFxuICAgICAgMTEzLFxuICAgICAgMTk1LFxuICAgICAgMTgzLFxuICAgICAgNCxcbiAgICAgIDEzNCxcbiAgICAgIDE0NSxcbiAgICAgIDI1NCxcbiAgICAgIDEwOCxcbiAgICAgIDE0MSxcbiAgICAgIDgyLFxuICAgICAgMjQ1LFxuICAgICAgODIsXG4gICAgICA2OSxcbiAgICAgIDEzLFxuICAgICAgOTksXG4gICAgICA0MCxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVZBWkwzM0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwNjY4NTM1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTA2MTk1MjM4MDU0Mzc6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NIN1hFUWlmM090QVlZT2lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJta1pvOWVjUHZTZlI0azcvaDFrWVN0WDh5Um1QZmhWc1M5aGJjL2l4Mmk4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkh5Z1lLUzJWLy9VUnIwZGlJVEZ1OENrVU5YSkcrS1VMQWVjaTlwaFZQYndNMm9WR0JnMlVLa3FhN053ajFIRzE0cFZldGxrcUFGRy8yVTdIWGlNUkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkIvOEJlUjhscjAxV21Bd2Njdk5LVCtZeW8xVHBvazJGWFRyL2IrSTliWVJsUERyL25yYkFaTjhNMVlDZFl6YUdvclpqNVc5SFlralhQOEZ0MGQrOGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYwNjY4NTM1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTU4NjA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
