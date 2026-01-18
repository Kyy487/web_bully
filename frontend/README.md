# Frontend - Bully Support Platform

React.js frontend untuk platform dukungan bullying dengan storytelling anonim.

## 🚀 Mulai Cepat

### Install Dependencies
```bash
npm install
```

### Setup Environment
```bash
cp .env.example .env
```

Edit `.env` dan sesuaikan:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Run Development Server
```bash
npm start
```

Aplikasi akan membuka di `http://localhost:3000`

### Build untuk Production
```bash
npm run build
```

## 📁 Struktur Folder

```
frontend/
├── src/
│   ├── components/          # Komponen React yang reusable
│   │   ├── Header.jsx
│   │   ├── StoryForm.jsx
│   │   ├── StoryList.jsx
│   │   ├── Resources.jsx
│   │   └── About.jsx
│   ├── pages/              # Halaman aplikasi
│   │   ├── HomePage.jsx
│   │   ├── StoriesPage.jsx
│   │   └── ResourcesPage.jsx
│   ├── styles/             # File CSS
│   │   ├── global.css
│   │   ├── Header.css
│   │   ├── HomePage.css
│   │   └── ... (other CSS files)
│   ├── services/           # API services
│   ├── App.js              # Root component
│   └── index.js            # Entry point
├── public/
│   └── index.html
├── package.json
├── .env.example
└── README.md
```

## 🎨 Komponen Utama

### Header
Navigasi utama dengan menu responsif.

### HomePage
Landing page dengan hero section, fitur overview, dan call-to-action untuk mulai berbagi cerita.

### StoryForm
Form untuk mengirim cerita bullying dengan validasi dan pengecekan privasi.

### StoryList
Daftar cerita komunitas dengan filter dan pagination.

### Resources
Sumber daya dukungan, tips coping, pesan motivasi, dan FAQ.

### About
Halaman tentang platform, misi, dan nilai-nilai.

## 🎯 Fitur

- ✅ Responsive design (mobile-first)
- ✅ Storytelling anonim
- ✅ Filter dan search
- ✅ Pagination
- ✅ Motivational messages
- ✅ FAQ section
- ✅ Resources dan tips
- ✅ Smooth animations

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🔧 Teknologi

- React 18.2.0
- React Router 6.16.0
- Axios 1.5.0
- React Icons 4.12.0

## 📝 Environment Variables

```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel
```

### GitHub Pages
```bash
npm run build
# Sesuaikan package.json "homepage" field
```

### Traditional Hosting
```bash
npm run build
# Upload folder `build/` ke server
```

## 🎨 Customization

### Colors
Edit variabel CSS di `src/styles/global.css`:
```css
--primary-color: #6366f1;
--secondary-color: #ec4899;
--success-color: #10b981;
--danger-color: #ef4444;
```

### Typography
Ubah font family dan sizing di `src/styles/global.css`.

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
```bash
npm start -- --port 3001
```

### API tidak terhubung
Pastikan:
- Backend sudah running di port 5000
- `REACT_APP_API_URL` benar di `.env`
- CORS diaktifkan di backend

### Build gagal
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Dokumentasi

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Axios Documentation](https://axios-http.com)

## 💡 Tips Development

1. Gunakan React DevTools extension
2. Aktifkan strict mode untuk error detection
3. Gunakan CSS modules untuk component-level styling
4. Test di berbagai ukuran layar

## 📄 License

MIT License

---

**Happy Coding! 💙**
