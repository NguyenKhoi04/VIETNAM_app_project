// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Cấu hình thông tin tài khoản MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'luyenviet_chinhta_vietnam',
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

// 4. API đăng nhập
app.post('/api/login', (req, res) => {
  // Nhận linh hoạt cả 2 kiểu đặt tên key từ frontend
  const ten_dang_nhap = req.body.ten_dang_nhap || req.body.username;
  const mat_khau = req.body.mat_khau || req.body.password;

  // Đã sửa 'mguoi_dung' thành 'nguoi_dung'
  const sql = 'SELECT * FROM nguoi_dung WHERE ten_dang_nhap = ? AND mat_khau = ?';
  
  db.query(sql, [ten_dang_nhap, mat_khau], (err, results) => {
    if (err) {
      console.error('Lỗi SQL chi tiết:', err);
      return res.status(500).json({ message: err.message || 'Lỗi truy vấn server' });
    }

    if (results.length > 0) {
      return res.status(200).json({
        message: 'Đăng nhập thành công!',
        user: {
          id: results[0].id,
          ten_dang_nhap: results[0].ten_dang_nhap,
        },
      });
    } else {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
    }
  });
});

// 5. API lấy danh sách người dùng
app.get('/api/data', (req, res) => {
  // Đã sửa 'mguoi_dung' thành 'nguoi_dung'
  const sql = 'SELECT id, ten_dang_nhap FROM nguoi_dung';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Khởi chạy server tại cổng 5000
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server backend đang chạy tại http://localhost:${PORT}`);
});