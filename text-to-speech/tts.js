
const OpenAI = require('openai');
const fs = require('fs');

const client = new OpenAI({
  apiKey: 'sk-wCc8IViEFUcd9FFaQkDoPbK0wWP4edLhz81W4YufYYI=',
  baseURL: 'https://mkp-api.fptcloud.com'
});

async function run() {
  const response = await client.audio.speech.create({
    model: 'FPT.AI-VITs',
    input: 'bờ, a, ba,huyền, bà, bà',
    response_format: 'wav',
    voice: 'std_hatieumai',
    speed: 0.75,// Giảm tốc độ phát âm (0.7 - 0.8 phù hợp cho tiểu học)
  });
  const buffer = await response.arrayBuffer();
  fs.writeFileSync('speech_ba_huyen.wav', Buffer.from(buffer));
}

run();