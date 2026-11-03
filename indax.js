const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} ONLINE!`);
  client.user.setActivity('E.C Heavy Industries', { type: 3 });
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  
  if (msg.content.toLowerCase() === '!ping') {
    return msg.reply(`🏓 Pong! Latensi: ${client.ws.ping}ms - Bot aktif dari Android`);
  }
  
  if (msg.content.toLowerCase() === '!panel') {
    const embed = new EmbedBuilder()
      .setTitle('🏭 E.C Heavy Industries V11-V17')
      .setDescription('**STATUS: LIVE**\n\n✅ Mining Mode: Active\n✅ Auto BID: ON\n✅ V11-V17 Connected')
      .setColor(0x00FF00)
      .setFooter({ text: 'ECH Bot - Android Edition' });
    return msg.reply({ embeds: [embed] });
  }

  if (msg.content.toLowerCase().startsWith('!bid ')) {
    const amount = msg.content.split(' ')[1];
    return msg.reply(`📦 BID ${amount} dicatat! System ECH memproses...`);
  }
});

client.login(process.env.TOKEN);
