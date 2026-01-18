# Bully Support - Platform Dukungan Bullying

Platform web komprehensif untuk korban bullying dengan fitur storytelling anonim, dukungan komunitas, dan sumber daya edukatif.

## 🎯 Misi

Memberikan ruang yang aman dan terlindungi bagi korban bullying untuk:
- **Berbagi cerita** pengalaman mereka tanpa takut identitas terbongkar
- **Mendapat validasi** dan empati dari komunitas
- **Belajar** tentang bullying dan dampaknya
- **Menemukan strategi** untuk mengatasi dan keluar dari situasi bullying
- **Mengambil tindakan** dengan panduan praktis dan sumber daya

## 🏗️ Arsitektur

Aplikasi ini dibangun dengan MERN Stack:
- **Frontend**: React.js dengan React Router
- **Backend**: Node.js + Express
- **Database**: MongoDB (opsional, sesuai kebutuhan)
- **API**: RESTful API

## 📁 Struktur Folder

```
bully/
├── backend/
│   ├── src/
│   │   ├── server.js           # Entry point backend
│   │   ├── controllers/        # Logic aplikasi
│   │   ├── models/            # Skema database
│   │   ├── routes/            # API endpoints
│   │   ├── middleware/        # Custom middleware
│   │   └── config/            # Konfigurasi
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── App.js             # Komponen utama
    │   ├── index.js           # Entry point
    │   ├── components/        # Komponen React
    │   ├── pages/            # Halaman aplikasi
    │   ├── styles/           # File CSS
    │   └── services/         # API services
    ├── public/
    ├── package.json
    ├── .env.example
    └── README.md
```

## 🚀 Cara Memulai

### Prerequisites
- Node.js (v14 atau lebih tinggi)
- npm atau yarn
- Git

### Backend Setup

1. **Masuk ke folder backend**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env sesuai konfigurasi Anda
```

4. **Jalankan server**
```bash
# Development
npm run dev

# Production
npm start
```

Server akan berjalan di `http://localhost:5000`

### Frontend Setup

1. **Masuk ke folder frontend**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env dengan API URL backend
```

4. **Jalankan aplikasi**
```bash
# Development
npm start

# Build untuk production
npm run build
```

Aplikasi akan membuka di `http://localhost:3000`

## 📚 Fitur Utama

### 1. **Berbagi Cerita (Story Submission)**
- Form yang user-friendly untuk menggambarkan pengalaman bullying
- Pilihan kategori, tingkat keseriusan, lokasi
- Identitas sepenuhnya anonim
- Validasi input untuk memastikan kualitas cerita

### 2. **Komunitas Cerita (Community Stories)**
- Baca cerita dari pengguna lain (tanpa identitas)
- Filter berdasarkan kategori, tingkat keseriusan, lokasi
- Pagination untuk navigasi mudah
- Setiap cerita menampilkan metadata (tanggal, tags)

### 3. **Sumber Daya & Dukungan (Resources)**
- **Motivational Messages**: Pesan inspiratif harian
- **Support Strategies**: Langkah-langkah konkret untuk mendapat dukungan
- **Coping Tips**: Strategi mengatasi bullying
- **Educational Content**: Edukasi tentang bullying
- **FAQ**: Jawaban atas pertanyaan umum

### 4. **Tentang Kami (About)**
- Penjelasan misi dan nilai platform
- Cara kerja platform
- Informasi penting tentang privasi
- Sumber daya tambahan

## 🔒 Privasi & Keamanan

- **Sepenuhnya Anonim**: Tidak ada data identitas yang disimpan
- **Enkripsi**: Data sensitif dienkripsi
- **HTTPS**: Komunikasi terenkripsi
- **Tidak Melacak**: Tidak ada tracking atau analytics invasif
- **Kebijakan Privasi**: Transparansi penuh tentang penggunaan data

## 🌐 API Endpoints

### Stories
- `POST /api/stories` - Buat cerita baru
- `GET /api/stories` - Dapatkan daftar cerita (dengan filter)
- `GET /api/stories/:id` - Dapatkan cerita spesifik
- `PUT /api/stories/:id` - Update cerita

### Resources
- `GET /api/resources` - Dapatkan sumber daya dukungan
- `GET /api/resources/motivation/daily` - Pesan motivasi harian
- `GET /api/resources/faq/all` - Daftar FAQ

### Health
- `GET /health` - Check status server

Lihat [Backend README](backend/README.md) untuk detail lebih lengkap.

## 🛠️ Tech Stack

### Backend
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- bcryptjs - Password hashing
- jsonwebtoken - Authentication
- CORS - Cross-origin requests
- dotenv - Environment management

### Frontend
- React - UI library
- React Router - Routing
- Axios - HTTP client
- React Icons - Icon library
- CSS3 - Styling

## 📱 Responsive Design

Aplikasi ini responsive dan bekerja optimal di:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design System

Menggunakan sistem desain yang konsisten dengan:
- Color palette yang harmonis
- Typography yang jelas
- Spacing yang terstruktur
- Animasi yang smooth
- Accessibility considerations

## 📝 Panduan Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## ⚖️ Lisensi

MIT License - Lihat [LICENSE](LICENSE) untuk detail.

## 📞 Kontak & Dukungan

Untuk pertanyaan atau dukungan, silakan hubungi:
- Email: support@bullysupport.id
- Website: www.bullysupport.id

## ⚠️ Disclaimer Penting

**Platform ini bukan pengganti konseling profesional.** Jika Anda mengalami:
- Pikiran untuk menyakiti diri sendiri
- Krisis mental yang serius
- Bullying yang melibatkan kekerasan fisik

**Hubungi segera:**
- Psikolog atau profesional kesehatan mental
- Pihak berwenang lokal
- Hotline krisis 24/7
- Orang tua, guru, atau orang dewasa terpercaya

## 🙏 Terima Kasih

Terima kasih kepada semua yang telah berkontribusi dan mendukung misi kami untuk menciptakan komunitas yang lebih aman dan suportif.

---

**Ingat: Cerita Anda penting. Anda tidak sendirian. 💙**
