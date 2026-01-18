import React, { useState } from 'react';
import StoryForm from '../components/StoryForm';
import '../styles/HomePage.css';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Cerita Anda Penting</h1>
          <p>Ruang yang aman untuk berbagi pengalaman bullying Anda, tanpa rasa takut akan penilaian.</p>
          <button 
            className="cta-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Tutup' : 'Mulai Cerita Anda Sekarang'}
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">💙</div>
        </div>
      </section>

      {showForm && <StoryForm onStorySubmitted={() => setShowForm(false)} />}

      <section className="features">
        <h2>Mengapa Berbagi Cerita?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privasi Terjaga</h3>
            <p>Identitas Anda 100% aman dan rahasia. Tidak ada yang perlu dikhawatirkan tentang privasi Anda.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Didengar & Divalidasi</h3>
            <p>Perasaan Anda valid. Kami memahami bahwa apa yang Anda alami itu nyata dan penting.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Tidak Sendirian</h3>
            <p>Baca cerita dari orang lain yang mengalami hal serupa. Komunitas ini saling mendukung.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Belajar & Berkembang</h3>
            <p>Dapatkan tips, strategi, dan sumber daya untuk mengatasi bullying dengan lebih baik.</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>Dampak Positif Bersama</h2>
        <p>Dengan berbagi cerita, Anda tidak hanya membantu diri sendiri tetapi juga membantu orang lain yang sedang berjuang.</p>
        <div className="impact-stats">
          <div className="stat">
            <h3>Cerita Dibagikan</h3>
            <p className="stat-number">+1000</p>
          </div>
          <div className="stat">
            <h3>Orang Terbantu</h3>
            <p className="stat-number">+5000</p>
          </div>
          <div className="stat">
            <h3>Dukungan 24/7</h3>
            <p className="stat-number">Selalu Ada</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Siap untuk Berbagi?</h2>
        <p>Ingat: Cerita Anda penting. Pengalaman Anda berharga. Mari kita ciptakan komunitas yang saling mendukung.</p>
        <button 
          className="cta-button-secondary"
          onClick={() => setShowForm(!showForm)}
        >
          Mulai Cerita Saya
        </button>
      </section>
    </div>
  );
};

export default HomePage;
