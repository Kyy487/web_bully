# Bully Support Backend

Backend API untuk platform storytelling dan dukungan korban bullying.

## Setup

### Install Dependencies
```bash
npm install
```

### Environment Configuration
Copy `.env.example` ke `.env` dan sesuaikan:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bully-support
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Run Server
Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### Stories
- `POST /api/stories` - Buat cerita baru
- `GET /api/stories` - Dapatkan semua cerita dengan filter
- `GET /api/stories/:id` - Dapatkan cerita spesifik
- `PUT /api/stories/:id` - Update cerita

### Resources
- `GET /api/resources` - Dapatkan sumber daya dukungan
- `GET /api/resources/motivation/daily` - Dapatkan pesan motivasi harian
- `GET /api/resources/faq/all` - Dapatkan FAQ

### Health
- `GET /health` - Check status server

## Database Schema

### Story Model
- title: String (required)
- content: String (required, min 50 chars)
- category: String (bullying, harassment, cyberbullying, discrimination, other)
- severity: String (mild, moderate, severe)
- typeOfBullying: Array (verbal, physical, social, cyber, prejudicial)
- location: String (school, workplace, online, home, other)
- emotion: Array
- resolved: Boolean
- resolutionStory: String
- createdAt: Date
- updatedAt: Date
