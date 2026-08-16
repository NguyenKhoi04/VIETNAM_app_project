// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Cấu hình thông tin tài khoản MySQL của bạn
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',             // Tên user MySQL (mặc định là root)
  password: '123456', // Điền mật khẩu MySQL của bạn vào đây
  database: 'luyenviet_chinhta_vietnam'  // Điền tên database của bạn vào đây
});

// 2. Kiểm tra kết nối Database
db.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối MySQL:', err.message);
    return;
  }
  console.log('Đã kết nối MySQL thành công!');
});

// 3. API kiểm tra server hoạt động
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend đang hoạt động tốt!' });
});

// 4. API mẫu lấy danh sách dữ liệu (thay 'ten_bang' bằng bảng thực tế của bạn)
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM mguoi_dung'; // Thay 'ten_bang' bằng tên bảng thực tế của bạn
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Chạy server tại cổng 5000
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server backend đang chạy tại http://localhost:${PORT}`);
});