
const OpenAI = require('openai');
const fs = require('fs');

const client = new OpenAI({
  apiKey: 'sk-wCc8IViEFUcd9FFaQkDoPbK0wWP4edLhz81W4YufYYI=',
  baseURL: 'https://mkp-api.fptcloud.com'
});

async function run() {
  const response = await client.audio.speech.create({
    model: 'FPT.AI-VITs',
    input: 'Tôi là học sinh lớp 1. Tôi tên là Nam, học sinh lớp 1A, Trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm. Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi có thêm nhiều bạn mới.Ai cũng bảo từ khi đi học, tôi chững chạc hẳn lên. (Trung Sơn)',
    response_format: 'wav',
    voice: 'std_hatieumai',
    speed: 0.5,// Giảm tốc độ phát âm (0.7 - 0.8 phù hợp cho tiểu học)
  });
  const buffer = await response.arrayBuffer();
  fs.writeFileSync('speech_docmau_bai1_topic1.wav', Buffer.from(buffer));
}

run();