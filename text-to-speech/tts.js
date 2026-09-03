
const OpenAI = require('openai');
const fs = require('fs');

const client = new OpenAI({
  apiKey: 'sk-wCc8IViEFUcd9FFaQkDoPbK0wWP4edLhz81W4YufYYI=',
  baseURL: 'https://mkp-api.fptcloud.com'
});

async function run() {

  // Đoạn văn đã xử lý dấu ngắt nghỉ và dùng Template Literal (dấu `) để tránh lỗi ký tự ngoặc kép
  const textContent = `
  CÁI TRỐNG TRƯỜNG EM

Cái trống trường em
Mùa hè cũng nghỉ
Suốt ba tháng liền
Trống nằm ngẫm nghĩ.

Buồn không hả trống
Trong những ngày hè
Bọn mình đi vắng
Chỉ còn tiếng ve?

Cái trống lặng im
Nghiêng đầu trên giá
Chắc thấy chúng em
Nó mừng vui quá!

Kìa trống đang gọi:
Tùng! Tùng! Tùng! Tùng!
Vào năm học mới
Giọng vang tưng bừng.

(Thanh Hào)
  `;
  const response = await client.audio.speech.create({
    model: 'FPT.AI-VITs',
    // input: 'Bạn trả lời là, Trước sự thay đổi của voi em, voi anh đã nói: “Trời ơi, sao em lại thêm sừng và râu thế này? Xấu lắm!” ',
    input: textContent,
    voice: 'std_hatieumai',
    speed: 0.7,// Giảm tốc độ phát âm (0.7 - 0.8 phù hợp cho tiểu học)
  });
  const buffer = await response.arrayBuffer();
  fs.writeFileSync('speech_docmau_bai11_week6.wav', Buffer.from(buffer));
}

run();