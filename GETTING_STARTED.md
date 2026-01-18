# ✅ Getting Started Checklist

Panduan lengkap untuk memulai dan mengembangkan Bully Support Platform.

## 📋 Pre-Installation Checklist

- [ ] Node.js v14+ terinstal
  ```bash
  node --version  # v14.0.0 atau lebih tinggi
  ```

- [ ] npm terinstal
  ```bash
  npm --version   # 6.0.0 atau lebih tinggi
  ```

- [ ] Git terinstal (untuk version control)
  ```bash
  git --version
  ```

- [ ] Text editor/IDE siap (VS Code recommended)

- [ ] Terminal/Command prompt siap digunakan

## 🚀 Initial Setup (First Time)

### Step 1: Download/Clone Project

```bash
# Jika dari zip file, extract ke folder bully
cd bully
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env jika perlu (default OK untuk development)
# nano .env  atau buka dengan text editor

# Cek apakah sudah bekerja
npm run dev
```

Expected output:
```
Server running on port 5000
```

### Step 3: Frontend Setup (Buka terminal baru)

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Jalankan aplikasi
npm start
```

Browser seharusnya otomatis membuka `http://localhost:3000`

### Step 4: Verify Installation

Checklist verifikasi:

- [ ] Backend berjalan di `http://localhost:5000`
- [ ] Frontend berjalan di `http://localhost:3000`
- [ ] Health check berhasil: `curl http://localhost:5000/health`
- [ ] Halaman beranda muncul
- [ ] Menu navigasi berfungsi
- [ ] Form submit story muncul

## 🔧 Development Workflow

### Daily Development

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start

# Terminal 3 - Version control (optional)
cd bully
git status
```

### Before Starting Work

```bash
# Update dependencies (monthly)
npm update

# Check for vulnerabilities
npm audit

# Check code style
npm run lint  # jika sudah setup
```

## 📝 Feature Development Workflow

### Add New Feature

1. **Plan the feature**
   - Define requirements
   - Design data model (if needed)
   - Sketch UI/UX

2. **Backend Development**
   ```bash
   cd backend
   # Create/update models
   # Create/update controllers
   # Create/update routes
   # Test with Postman/Insomnia
   ```

3. **Frontend Development**
   ```bash
   cd frontend
   # Create components
   # Add styles
   # Connect to API
   # Test functionality
   ```

4. **Testing**
   - Manual testing
   - Cross-browser testing
   - Mobile/responsive testing
   - API testing

5. **Commit & Push** (if using Git)
   ```bash
   git add .
   git commit -m "Add: new feature description"
   git push origin main
   ```

## 🐛 Common Issues & Solutions

### Issue 1: "npm: command not found"

**Solution:**
```bash
# Install Node.js dari https://nodejs.org/
node --version  # Verify installation
```

### Issue 2: Port 3000 sudah digunakan

**Solution (Frontend):**
```bash
cd frontend
npm start -- --port 3001
# atau ubah di .env
PORT=3001
```

**Solution (Backend):**
```bash
cd backend
# Edit .env
PORT=5001
```

### Issue 3: "Module not found" error

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Issue 4: "Cannot GET /" error

**Solution:**
- Pastikan frontend running di port 3000
- Refresh browser (Ctrl+R)
- Clear cache (Ctrl+Shift+Delete)

### Issue 5: API tidak terhubung (CORS error)

**Solution:**
1. Pastikan backend running di port 5000
2. Cek `REACT_APP_API_URL` di frontend/.env
3. Verify di browser console (F12)

### Issue 6: Database connection error

**Solution (untuk future implementation):**
- Setup MongoDB Atlas account
- Update `MONGODB_URI` di backend/.env
- Test connection: `npm test`

## 📚 Documentation To Read

Read in this order:

1. **[QUICK_START.md](QUICK_START.md)** - 5 min
   - Quick setup instructions
   - Verification steps

2. **[README.md](README.md)** - 10 min
   - Project overview
   - Features
   - Tech stack

3. **[ARCHITECTURE.md](ARCHITECTURE.md)** - 15 min
   - System architecture
   - Data flow
   - Design decisions

4. **[backend/README.md](backend/README.md)** - 10 min
   - Backend setup
   - API endpoints
   - Database schema

5. **[frontend/README.md](frontend/README.md)** - 10 min
   - Frontend setup
   - Component structure
   - Customization

## 🎯 Learning Milestones

### Week 1: Understand the Project

- [ ] Read all documentation
- [ ] Run the project locally
- [ ] Explore the interface
- [ ] Understand the concept
- [ ] Identify pain points/improvements

### Week 2: Make Small Changes

- [ ] Change colors in global.css
- [ ] Update motivational messages
- [ ] Modify About page content
- [ ] Add new resource tips
- [ ] Test changes

### Week 3: Create New Feature

- [ ] Plan a simple feature
- [ ] Create backend endpoint
- [ ] Create frontend component
- [ ] Connect them together
- [ ] Test thoroughly

### Week 4+: Full Development

- [ ] Implement medium features
- [ ] Improve UI/UX
- [ ] Add functionality
- [ ] Deploy to production

## 🔍 File Guide - Where to Make Changes

### Untuk mengubah Content

```
📁 Judul halaman          → Edit di component/pages
🎨 Warna & styling         → Edit di styles/global.css
📝 Pesan motivasi           → backend/src/controllers/resourceController.js
❓ FAQ dan resources        → backend/src/controllers/resourceController.js
📄 Home page content        → frontend/src/pages/HomePage.jsx
ℹ️  About page content      → frontend/src/components/About.jsx
```

### Untuk menambah fitur

```
🔗 API endpoint            → backend/src/routes/
🔧 Logic bisnis            → backend/src/controllers/
💾 Data structure          → backend/src/models/
⚛️  React component        → frontend/src/components/
🎨 Component styling       → frontend/src/styles/
📄 New page                → frontend/src/pages/
```

### Untuk konfigurasi

```
⚙️  Environment variables  → .env file (root of backend/frontend)
📦 Dependencies            → package.json
🚀 Build settings          → Frontend: public/index.html, Backend: src/server.js
```

## 🚀 Ready to Deploy?

### Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] No console errors
- [ ] No API errors
- [ ] Responsive on all devices
- [ ] Performance optimized
- [ ] Security reviewed
- [ ] Documentation updated
- [ ] .env files configured correctly

### Deployment Steps

**Frontend (Vercel/Netlify):**
```bash
cd frontend
npm run build
# Upload folder 'build' to hosting
```

**Backend (Heroku/Railway):**
```bash
cd backend
# Connect with Git or CLI
# Push code
```

## 💡 Development Tips

### 1. Use Browser DevTools
- F12 to open DevTools
- Console tab untuk error messages
- Network tab untuk API debugging
- Elements/Inspector untuk HTML/CSS

### 2. API Testing
```bash
# Install Postman or Insomnia
# Test endpoints before using in frontend
# Save requests untuk reusable testing
```

### 3. Commit Early, Commit Often
```bash
git add .
git commit -m "Clear message about changes"
git push
```

### 4. Keep Code Organized
- One component per file
- Logical folder structure
- Consistent naming conventions
- Comments untuk complex logic

### 5. Test Responsiveness
```bash
# Device toolbar di DevTools
# Test: Mobile, Tablet, Desktop
# Common breakpoints: 320px, 768px, 1200px
```

## 🎓 Useful Commands

### Frontend
```bash
npm start              # Run development server
npm run build          # Build untuk production
npm test              # Run tests
npm run eject         # Advanced config (irreversible)
```

### Backend
```bash
npm run dev           # Run dengan auto-reload
npm start             # Run normal
npm test              # Run tests
npm run lint          # Check code style
```

### Git
```bash
git status            # See changes
git add .             # Stage all changes
git commit -m "msg"   # Commit dengan message
git push              # Push ke server
git pull              # Pull dari server
git log               # Lihat history
```

## 📱 Testing Checklist

### Manual Testing

- [ ] Test di Chrome
- [ ] Test di Firefox
- [ ] Test di Safari
- [ ] Test di Edge
- [ ] Test di mobile browser
- [ ] Test form submission
- [ ] Test filters & pagination
- [ ] Test navigation
- [ ] Test responsiveness
- [ ] Test loading states

### Accessibility Testing

- [ ] Tab navigation works
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast OK
- [ ] Text sizes readable

## 🆘 Getting Help

### Resources

1. **Documentation Files**
   - Baca README.md dan ARCHITECTURE.md
   - Cek file README di backend/ dan frontend/

2. **Browser DevTools**
   - F12 untuk debugging
   - Console untuk error messages

3. **Search Online**
   - Google: "[error message]"
   - Stack Overflow
   - Official documentation

4. **Ask Someone**
   - Colleague/friend
   - Stack Overflow community
   - Project community (if open-source)

## ✨ Next Steps

After completing setup:

1. **Explore the Code**
   - Read through main files
   - Understand file structure
   - Try making small changes

2. **Add Content**
   - Update motivational messages
   - Add more resources
   - Customize About page

3. **Create New Feature**
   - Add new field to story form
   - Create new API endpoint
   - Add new page

4. **Deploy**
   - Choose hosting platform
   - Configure deployment
   - Deploy to live server

## 🎉 Success Criteria

You'll know you're ready when:

- ✅ Both frontend & backend running locally
- ✅ Able to submit a story
- ✅ Can read stories from community
- ✅ Understand the code structure
- ✅ Can make changes without breaking things
- ✅ Feel confident to add new features

## 📞 Support

For issues or questions:

1. Check documentation (README.md, QUICK_START.md)
2. Check browser console (F12)
3. Check terminal output
4. Search for solutions online
5. Ask for help in community forums

---

## 🎯 Your First Tasks (Recommended Order)

### ✅ Day 1: Setup & Explore
- [ ] Complete installation
- [ ] Verify everything works
- [ ] Read documentation
- [ ] Explore the interface

### ✅ Day 2: Make Small Changes
- [ ] Change colors
- [ ] Update text
- [ ] Modify motivational messages
- [ ] Commit changes

### ✅ Day 3: Create Feature
- [ ] Plan simple feature
- [ ] Implement backend
- [ ] Implement frontend
- [ ] Test thoroughly

### ✅ Week 2+: Develop Features
- [ ] Implement new features
- [ ] Improve user experience
- [ ] Optimize performance
- [ ] Prepare for deployment

---

**Selamat memulai! Semoga pengembangan platform ini memberikan manfaat besar bagi komunitas. 💙**

Jika ada pertanyaan, lihat dokumentasi atau hubungi tim support.

Good luck! 🚀
