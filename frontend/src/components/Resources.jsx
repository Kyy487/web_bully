import React, { useState, useEffect, useCallback } from "react";
import { FiBookOpen, FiTarget, FiHelpCircle } from "react-icons/fi";
import "../styles/Resources.css";

const Resources = () => {
  const [resources, setResources] = useState(null);
  const [motivation, setMotivation] = useState("");
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  const fetchResources = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/resources`);
      if (!response.ok) throw new Error("Gagal memuat resources");
      const data = await response.json();
      setResources(data);
    } catch (error) {
      console.error(error);
    }
  }, [API_URL]);

  const fetchMotivation = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/resources/motivation/daily`);
      if (!response.ok) throw new Error("Gagal memuat motivasi");
      const data = await response.json();
      setMotivation(data.message);
    } catch (error) {
      console.error(error);
    }
  }, [API_URL]);

  const fetchFaq = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/resources/faq/all`);
      if (!response.ok) throw new Error("Gagal memuat FAQ");
      const data = await response.json();
      setFaq(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchResources();
    fetchMotivation();
    fetchFaq();
  }, [fetchResources, fetchMotivation, fetchFaq]);

  const handleRefreshMotivation = () => {
    fetchMotivation();
  };

  if (loading) {
    return <div className="loading">Memuat sumber daya...</div>;
  }

  return (
    <div className="resources-container">
      {/* Motivation Banner */}
      <div className="motivation-banner">
        <div className="motivation-content">
          <h2>Pesan Motivasi Hari Ini</h2>
          <p className="motivation-text">{motivation}</p>
          <button className="refresh-btn" onClick={handleRefreshMotivation}>
            Minta Pesan Lain
          </button>
        </div>
      </div>

      {/* Support Resources */}
      {resources && (
        <>
          <section className="resources-section">
            <h2>
              <FiTarget /> Langkah-Langkah Mendapat Dukungan
            </h2>
            <div className="support-grid">
              {resources.support.map((item) => (
                <div key={item.id} className="support-card">
                  <h3>{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <p className="advice">
                    <strong>Tips:</strong> {item.advice}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Coping Strategies */}
          <section className="resources-section">
            <h2>
              <FiBookOpen /> Strategi Mengatasi
            </h2>
            <div className="coping-grid">
              {resources.coping.map((item) => (
                <div key={item.id} className="coping-card">
                  <h3>{item.title}</h3>
                  <ul className="tips-list">
                    {item.tips.map((tip, idx) => (
                      <li key={idx}>✓ {tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resources-section">
            <h2>
              <FiHelpCircle /> Edukasi tentang Bullying
            </h2>
            <div className="education-grid">
              {resources.education.map((item) => (
                <div key={item.id} className="education-card">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* FAQ Section */}
      <section className="resources-section faq-section">
        <h2>Pertanyaan Umum (FAQ)</h2>
        <div className="faq-list">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item ${expandedFaq === idx ? "expanded" : ""}`}
              onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-toggle">
                  {expandedFaq === idx ? "−" : "+"}
                </span>
              </div>
              {expandedFaq === idx && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
