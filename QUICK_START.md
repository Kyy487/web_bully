# 🚀 Quick Start Guide - Bully Support Platform

Platform storytelling anonim untuk dukungan korban bullying. Panduan setup lengkap untuk mulai mengembangkan.

## 📋 Prerequisites

- Node.js v14+ ([Download](https://nodejs.org/))
- npm atau yarn
- Git
- Text editor (VS Code recommended)

## 🎯 Setup Instructions

### 1️⃣ Backend Setup

```bash
# Masuk ke folder backend
cd backend

# Install dependencies
npm install

# Buat file .env dari .env.example
cp .env.example .env

# Edit .env (opsional - default sudah bekerja untuk development)
# Jalankan server
npm run dev
```

**Backend akan berjalan di**: `http://localhost:5000`

**API Health Check**: `http://localhost:5000/health`

### 2️⃣ Frontend Setup

Buka terminal baru:

```bash
# Masuk ke folder frontend
cd frontend

# Install dependencies
npm install

# Buat file .env dari .env.example
cp .env.example .env

# Jalankan aplikasi
npm start
```

**Frontend akan membuka di**: `http://localhost:3000`

## ✅ Verifikasi Setup

### Check Backend
```bash
curl http://localhost:5000/health
```

Jika berhasil akan menampilkan:
```json
{"status":"Server is running"}
```

### Check Frontend
1. Buka browser dan kunjungi `http://localhost:3000`
2. Anda akan melihat halaman beranda dengan hero section

## 📚 Fitur yang Tersedia

### ✨ Halaman Utama

1. **Beranda (Home Page)** - `/`
   - Hero section dengan penjelasan platform
   - Form storytelling langsung
   - Fitur overview
   - Impact statistics

2. **Cerita Komunitas** - `/stories`
   - Daftar cerita dari pengguna lain
   - Filter berdasarkan kategori, tingkat, lokasi
   - Pagination
   - Setiap cerita anonim (privasi terjamin)

3. **Sumber Daya** - `/resources`
   - Pesan motivasi harian
   - Langkah-langkah mendapat dukungan
   - Strategi mengatasi bullying
   - FAQ komprehensif
   - Edukasi tentang bullying

4. **Tentang Kami** - `/about`
   - Misi platform
   - Cara kerja
   - Nilai-nilai kami
   - Disclaimer penting

## 🎨 Customization

### Mengubah Warna

Edit `frontend/src/styles/global.css`:

```css
:root {
  --primary-color: #6366f1;      /* Warna utama */
  --secondary-color: #ec4899;    /* Warna sekunder */
  --success-color: #10b981;      /* Warna sukses */
  --danger-color: #ef4444;       /* Warna danger */
}
```

### Mengubah Konten

- **Resources**: Edit `backend/src/controllers/resourceController.js`
- **Home Page**: Edit `frontend/src/pages/HomePage.jsx`
- **About Page**: Edit `frontend/src/components/About.jsx`

## 📝 API Endpoints

### Stories
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/stories` | Buat cerita baru |
| GET | `/api/stories` | Dapatkan daftar cerita |
| GET | `/api/stories/:id` | Dapatkan cerita spesifik |
| PUT | `/api/stories/:id` | Update cerita |
| GET | `/api/stories/stats/overview` | Statistik cerita |

### Resources
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/resources` | Sumber daya dukungan |
| GET | `/api/resources/motivation/daily` | Pesan motivasi |
| GET | `/api/resources/faq/all` | Daftar FAQ |

## 🐛 Troubleshooting

### Port sudah digunakan

**Port 3000 (Frontend)**:
```bash
cd frontend
npm start -- --port 3001
```

**Port 5000 (Backend)**:
```bash
# Edit backend/.env
PORT=5001
```

### Module not found

```bash
# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

### API tidak terhubung

Pastikan:
1. Backend running di port 5000
2. `REACT_APP_API_URL` di frontend/.env benar
3. CORS headers sudah dikirim dengan benar

### Build error

```bash
cd frontend
npm run build
```

Jika masih error, coba clear cache:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

## 📂 Struktur File Penting

```
bully/
├── backend/
│   ├── src/
│   │   ├── server.js                  # Entry point
│   │   ├── controllers/
│   │   │   ├── storyController.js    # Story logic
│   │   │   └── resourceController.js # Resources logic
│   │   ├── models/
│   │   │   └── Story.js              # Story schema
│   │   └── routes/
│   │       ├── storyRoutes.js
│   │       └── resourceRoutes.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx            # Navigation
    │   │   ├── StoryForm.jsx         # Form untuk submit cerita
    │   │   ├── StoryList.jsx         # Daftar cerita
    │   │   ├── Resources.jsx         # Resources page
    │   │   └── About.jsx             # About page
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── StoriesPage.jsx
    │   │   └── ResourcesPage.jsx
    │   ├── styles/                   # CSS files
    │   ├── App.js
    │   └── index.js
    ├── public/
    │   └── index.html
    ├── package.json
    └── README.md
```

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Upload folder 'build' atau connect GitHub repo
```

### Backend (Heroku/Railway)
```bash
cd backend
# Push ke platform dengan Git
# Atau gunakan platform-specific CLI
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)

## 💡 Tips untuk Development

1. **Use React DevTools**: Install extension di browser untuk debug
2. **Node DevTools**: `node --inspect src/server.js`
3. **Postman/Insomnia**: Test API endpoints sebelum integrate
4. **Hot Reload**: Nodemon untuk backend (sudah setup), React untuk frontend (otomatis)

## 🔒 Security Notes

- Jangan commit `.env` file dengan secrets
- Gunakan environment variables untuk sensitif data
- Implement rate limiting untuk production
- Add authentication untuk update/delete stories

## ❓ FAQ

**Q: Bagaimana cara menambah field baru ke form?**
A: Edit `StoryForm.jsx` dan tambahkan field ke `Story.js` model di backend

**Q: Bagaimana cara mengubah motivational messages?**
A: Edit array di `resourceController.js` - `getMotivationalMessages()`

**Q: Apakah saya perlu database?**
A: Untuk production ya. Backend sudah siap untuk MongoDB. Setup di `.env`

**Q: Bagaimana cara membuat akun admin?**
A: Implementation JWT authentication di backend (belum ada di template ini)

## 🆘 Butuh Bantuan?

Jika ada error atau pertanyaan:
1. Cek console browser (Frontend) dan terminal (Backend)
2. Baca error message dengan teliti
3. Cek file `.env` configuration
4. Review documentation di folder masing-masing

## 🎉 Selamat!

Website Anda siap digunakan! Sekarang Anda bisa:
- ✅ Membuat cerita bullying
- ✅ Membaca cerita dari komunitas
- ✅ Mengakses sumber daya dukungan
- ✅ Customisasi sesuai kebutuhan

**Ingat: Cerita setiap orang penting. Mari ciptakan komunitas yang saling mendukung! 💙**

---

Untuk dokumentasi lebih lengkap, lihat [README.md](README.md) di root folder atau README di folder backend/frontend.
