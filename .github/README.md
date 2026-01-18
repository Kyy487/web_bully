# Bully Support - Platform Dukungan Bullying

Platform web interaktif untuk membantu korban bullying dengan storytelling anonim, dukungan komunitas, dan sumber daya edukatif.

## 🎯 Quick Start

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (Terminal baru)
cd frontend
npm install
npm start
```

## 📖 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Setup cepat & verifikasi
- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Panduan lengkap untuk developer
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Konsep & arsitektur platform
- **[backend/README.md](backend/README.md)** - Backend documentation
- **[frontend/README.md](frontend/README.md)** - Frontend documentation

## 🌟 Fitur Utama

✅ **Storytelling Anonim** - Berbagi cerita bullying tanpa identitas
✅ **Komunitas Suportif** - Baca cerita & rasakan Anda tidak sendirian
✅ **Sumber Daya** - Tips, strategi, motivasi, dan FAQ
✅ **Responsive Design** - Optimal di semua perangkat
✅ **Privasi Terjaga** - Zero tracking, 100% rahasia

## 🏗️ Tech Stack

- **Frontend**: React 18.2.0, React Router 6.16.0
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (optional)
- **Styling**: CSS3 dengan responsive design

## 📂 Project Structure

```
bully/
├── backend/           # Node.js + Express API
├── frontend/          # React aplikasi
├── .vscode/          # VS Code config
├── README.md         # File ini
├── QUICK_START.md    # Setup cepat
├── GETTING_STARTED.md # Panduan lengkap
├── ARCHITECTURE.md   # Arsitektur sistem
└── .gitignore
```

## 🚀 Untuk Development

### Prerequisites

- Node.js v14+
- npm/yarn
- Git

### Setup Lengkap

Lihat [GETTING_STARTED.md](GETTING_STARTED.md) untuk panduan step-by-step.

TL;DR:

```bash
# Terminal 1 - Backend
cd backend && npm install && npm run dev

# Terminal 2 - Frontend
cd frontend && npm install && npm start
```

## 🔒 Privacy & Security

- Sepenuhnya anonim (no login required)
- Data pribadi tidak disimpan
- HTTPS ready untuk production
- Secure API endpoints
- CORS configured

## 📋 API Endpoints

| Method | Endpoint                          | Description            |
| ------ | --------------------------------- | ---------------------- |
| POST   | `/api/stories`                    | Submit cerita          |
| GET    | `/api/stories`                    | Dapatkan daftar cerita |
| GET    | `/api/resources`                  | Sumber daya & tips     |
| GET    | `/api/resources/motivation/daily` | Pesan motivasi         |
| GET    | `/api/resources/faq/all`          | FAQ                    |

Lihat [backend/README.md](backend/README.md) untuk detail lengkap.

## 🎨 Customization

### Ubah Warna

Edit `frontend/src/styles/global.css` - ubah CSS variables

### Ubah Konten

- Motivational messages: `backend/src/controllers/resourceController.js`
- Resources/Tips: Sama dengan di atas
- Home page: `frontend/src/pages/HomePage.jsx`
- About page: `frontend/src/components/About.jsx`

## 🐛 Troubleshooting

**Port sudah digunakan?**

```bash
# Frontend
npm start -- --port 3001

# Backend
# Edit backend/.env → PORT=5001
```

**Module not found?**

```bash
rm -rf node_modules package-lock.json
npm install
```

**API connection error?**

- Pastikan backend running di port 5000
- Check REACT_APP_API_URL di frontend/.env

Lihat [GETTING_STARTED.md](GETTING_STARTED.md) untuk troubleshooting lebih lengkap.

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### Frontend

- Vercel, Netlify, atau GitHub Pages
- `npm run build` → upload `build/` folder

### Backend

- Heroku, Railway, AWS, DigitalOcean
- Setup environment variables di platform

Lihat dokumentasi masing-masing backend/frontend README.

## 🆘 Butuh Bantuan?

1. Baca dokumentasi (README ini & file-file lainnya)
2. Check browser console (F12)
3. Check terminal output
4. Cari solusi di Google
5. Tanya di Stack Overflow

## ✅ Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] No console errors
- [ ] Responsive on all devices
- [ ] Environment variables configured
- [ ] API endpoints working
- [ ] .env files created
- [ ] Documentation updated
- [ ] Performance optimized

## 📊 Project Stats

- **Lines of Code**: ~2000+ (core)
- **Components**: 5+ React components
- **API Endpoints**: 5+ endpoints
- **Styling**: 100% custom CSS
- **Responsive**: Mobile, Tablet, Desktop

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## ⚖️ License

MIT License - Feel free to use for personal/commercial projects

## ⚠️ Disclaimer

**Platform ini bukan pengganti konseling profesional.**

Jika mengalami krisis mental atau pikiran menyakiti diri sendiri:

- Hubungi psikolog/profesional kesehatan mental
- Hubungi pihak berwenang
- Hubungi hotline krisis 24/7
- Cerita ke orang dewasa terpercaya

## 📞 Kontak

- Email: support@bullysupport.id (placeholder)
- Website: www.bullysupport.id (future)
- Issues: GitHub Issues (if open-source)

## 🙏 Terima Kasih

Terima kasih telah berkontribusi pada misi menciptakan komunitas yang lebih aman dan suportif!

---

## 📚 Next Steps

1. **New to project?** → Baca [QUICK_START.md](QUICK_START.md)
2. **Developer setup?** → Lihat [GETTING_STARTED.md](GETTING_STARTED.md)
3. **Understand code?** → Check [ARCHITECTURE.md](ARCHITECTURE.md)
4. **Backend specifics?** → Read [backend/README.md](backend/README.md)
5. **Frontend details?** → Read [frontend/README.md](frontend/README.md)

---

**Cerita Anda penting. Anda tidak sendirian. Mari kita ciptakan perubahan bersama. 💙**

Built with ❤️ for bullying victims worldwide.
