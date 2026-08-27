
const OpenAI = require('openai');
const fs = require('fs');

const client = new OpenAI({
  apiKey: 'sk-wCc8IViEFUcd9FFaQkDoPbK0wWP4edLhz81W4YufYYI=',
  baseURL: 'https://mkp-api.fptcloud.com'
});

async function run() {
  const response = await client.audio.speech.create({
    model: 'FPT.AI-VITs',
    input: 'xin chào, chúng tôi là FPT',
    response_format: 'wav',
    voice: 'std_hatieumai'
  });
  const buffer = await response.arrayBuffer();
  fs.writeFileSync('speech.wav', Buffer.from(buffer));
}

run();