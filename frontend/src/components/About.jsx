import React from 'react';
import { FiHeart, FiUsers, FiShield } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Tentang Kami</h1>
        <p className="subtitle">Platform Dukungan untuk Korban Bullying</p>
      </div>

      <section className="about-section">
        <h2>Misi Kami</h2>
        <p>
          Kami percaya bahwa setiap orang berhak merasa aman dan dihargai. Bullying adalah masalah serius 
          yang berdampak pada ribuan orang setiap hari. Website ini diciptakan sebagai ruang yang aman bagi 
          korban bullying untuk berbagi pengalaman mereka tanpa takut akan penilaian atau pengungkapan identitas.
        </p>
      </section>

      <section className="about-section">
        <h2>Bagaimana Cara Kerjanya?</h2>
        <div className="how-it-works">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Berbagi Cerita</h3>
            <p>Ceritakan pengalaman bullying Anda dengan aman dan rahasia</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Validasi & Edukasi</h3>
            <p>Kami memvalidasi perasaan Anda dan memberikan edukasi tentang bullying</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Dukungan & Sumber Daya</h3>
            <p>Dapatkan tips, strategi coping, dan sumber daya untuk membantu Anda</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Ambil Tindakan</h3>
            <p>Kami sarankan langkah-langkah konkret untuk mengatasi bullying</p>
          </div>
        </div>
      </section>

      <section className="about-section values-section">
        <h2>Nilai-Nilai Kami</h2>
        <div className="values-grid">
          <div className="value-card">
            <FiShield className="value-icon" />
            <h3>Privasi & Keamanan</h3>
            <p>Identitas Anda dijaga dengan ketat. Kami tidak menyimpan atau membagikan informasi pribadi Anda.</p>
          </div>
          <div className="value-card">
            <FiHeart className="value-icon" />
            <h3>Empati & Dukungan</h3>
            <p>Kami mengerti bahwa apa yang Anda alami itu nyata dan penting. Anda tidak sendirian.</p>
          </div>
          <div className="value-card">
            <FiUsers className="value-icon" />
            <h3>Komunitas</h3>
            <p>Dengan berbagi cerita, Anda menjadi bagian dari komunitas yang saling mendukung dan memperkuat.</p>
          </div>
        </div>
      </section>

      <section className="about-section important-note">
        <h2>Penting untuk Diketahui</h2>
        <div className="note-box">
          <p>
            <strong>Website ini bukan pengganti konseling profesional.</strong> Jika Anda mengalami kesulitan 
            mental yang serius atau berpikir untuk menyakiti diri sendiri, silakan hubungi:
          </p>
          <ul>
            <li>Profesional kesehatan mental atau psikolog</li>
            <li>Pihak berwenang setempat jika Anda dalam bahaya</li>
            <li>Guru, orang tua, atau orang terpercaya lainnya</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Bantuan & Kontak</h2>
        <p>
          Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan, silakan hubungi kami melalui 
          formulir kontak atau email support kami.
        </p>
      </section>
    </div>
  );
};

export default About;
