import React, { useState } from 'react';
import { FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import '../styles/StoryForm.css';

const StoryForm = ({ onStorySubmitted }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'bullying',
    severity: 'moderate',
    typeOfBullying: ['verbal'],
    location: 'school',
    emotion: []
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  const emotions = ['sedih', 'marah', 'takut', 'malu', 'cemas', 'kesepian'];
  const bullying_types = ['verbal', 'physical', 'social', 'cyber', 'prejudicial'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmotionToggle = (emotion) => {
    setFormData(prev => {
      const emotions = prev.emotion.includes(emotion)
        ? prev.emotion.filter(e => e !== emotion)
        : [...prev.emotion, emotion];
      return { ...prev, emotion: emotions };
    });
  };

  const handleBullyingTypeToggle = (type) => {
    setFormData(prev => {
      const types = prev.typeOfBullying.includes(type)
        ? prev.typeOfBullying.filter(t => t !== type)
        : [...prev.typeOfBullying, type];
      return { ...prev, typeOfBullying: types };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`${API_URL}/stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim cerita');
      }

      const data = await response.json();
      setMessage({ type: 'success', text: 'Cerita Anda telah dikirim dengan aman dan rahasia.' });
      
      setFormData({
        title: '',
        content: '',
        category: 'bullying',
        severity: 'moderate',
        typeOfBullying: ['verbal'],
        location: 'school',
        emotion: []
      });

      if (onStorySubmitted) {
        onStorySubmitted(data.story);
      }

      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="story-form-container">
      <div className="form-header">
        <h2>Ceritakan Cerita Anda</h2>
        <p>Berbagi cerita Anda dalam keamanan penuh. Identitas Anda dijaga dengan ketat.</p>
      </div>

      {message && (
        <div className={`message message-${message.type}`}>
          {message.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="story-form">
        <div className="form-group">
          <label htmlFor="title">Judul Cerita *</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Berikan judul singkat untuk cerita Anda"
            value={formData.title}
            onChange={handleChange}
            required
            maxLength={200}
          />
          <span className="char-count">{formData.title.length}/200</span>
        </div>

        <div className="form-group">
          <label htmlFor="content">Cerita Anda *</label>
          <textarea
            id="content"
            name="content"
            placeholder="Ceritakan pengalaman bullying Anda. Semakin detail, semakin kami bisa memahami..."
            value={formData.content}
            onChange={handleChange}
            required
            minLength={50}
            rows={8}
          />
          <span className="char-count">{formData.content.length} karakter (min. 50)</span>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="bullying">Bullying</option>
              <option value="harassment">Pelecehan</option>
              <option value="cyberbullying">Cyberbullying</option>
              <option value="discrimination">Diskriminasi</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="severity">Tingkat Keseriusan</label>
            <select
              id="severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
            >
              <option value="mild">Ringan</option>
              <option value="moderate">Sedang</option>
              <option value="severe">Parah</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Lokasi Kejadian</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="school">Sekolah</option>
              <option value="workplace">Tempat Kerja</option>
              <option value="online">Online</option>
              <option value="home">Rumah</option>
              <option value="other">Lainnya</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Jenis Bullying yang Dialami</label>
          <div className="checkbox-group">
            {bullying_types.map(type => (
              <label key={type} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.typeOfBullying.includes(type)}
                  onChange={() => handleBullyingTypeToggle(type)}
                />
                {type === 'verbal' && 'Verbal (Kata-kata)'}
                {type === 'physical' && 'Fisik'}
                {type === 'social' && 'Sosial'}
                {type === 'cyber' && 'Cyber'}
                {type === 'prejudicial' && 'Diskriminasi'}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Perasaan yang Anda Alami</label>
          <div className="checkbox-group">
            {emotions.map(emotion => (
              <label key={emotion} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.emotion.includes(emotion)}
                  onChange={() => handleEmotionToggle(emotion)}
                />
                {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          <FiSend /> {loading ? 'Mengirim...' : 'Kirim Cerita'}
        </button>
      </form>

      <div className="privacy-notice">
        <FiAlertCircle />
        <p><strong>Privasi Anda Terlindungi:</strong> Identitas Anda tidak akan pernah ditampilkan. Cerita Anda disimpan dengan aman dan hanya Anda yang bisa melihatnya.</p>
      </div>
    </div>
  );
};

export default StoryForm;
