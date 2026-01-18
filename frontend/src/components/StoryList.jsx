import React, { useState, useEffect, useCallback } from "react";
import { FiHeart, FiMessageCircle, FiCalendar } from "react-icons/fi";
import "../styles/StoryList.css";

const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    severity: "",
    location: "",
  });
  const [page, setPage] = useState(1);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  const fetchStories = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.category) params.append("category", filters.category);
      if (filters.severity) params.append("severity", filters.severity);
      if (filters.location) params.append("location", filters.location);
      params.append("page", page);
      params.append("limit", 10);

      const response = await fetch(`${API_URL}/stories?${params}`);
      if (!response.ok) throw new Error("Gagal memuat cerita");

      const data = await response.json();
      setStories(data.stories);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [API_URL, filters, page]);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPage(1);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateContent = (content, maxLength = 150) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  const severityBadgeClass = (severity) => {
    return `badge severity-${severity}`;
  };

  if (loading && stories.length === 0) {
    return <div className="loading">Memuat cerita-cerita inspiratif...</div>;
  }

  return (
    <div className="story-list-container">
      <div className="list-header">
        <h2>Cerita-Cerita Dari Komunitas</h2>
        <p>
          Baca cerita dari orang lain. Anda tidak sendirian dalam perjalanan
          ini.
        </p>
      </div>

      <div className="filter-section">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Semua Kategori</option>
          <option value="bullying">Bullying</option>
          <option value="harassment">Pelecehan</option>
          <option value="cyberbullying">Cyberbullying</option>
          <option value="discrimination">Diskriminasi</option>
        </select>

        <select
          name="severity"
          value={filters.severity}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Semua Tingkat</option>
          <option value="mild">Ringan</option>
          <option value="moderate">Sedang</option>
          <option value="severe">Parah</option>
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Semua Lokasi</option>
          <option value="school">Sekolah</option>
          <option value="workplace">Tempat Kerja</option>
          <option value="online">Online</option>
          <option value="home">Rumah</option>
        </select>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="stories-grid">
        {stories.length === 0 ? (
          <div className="no-stories">
            <p>
              Belum ada cerita dengan filter ini. Jadilah yang pertama untuk
              berbagi!
            </p>
          </div>
        ) : (
          stories.map((story) => (
            <div key={story._id} className="story-card">
              <div className="story-card-header">
                <h3>{story.title}</h3>
                <div className="badges">
                  <span className={severityBadgeClass(story.severity)}>
                    {story.severity === "mild"
                      ? "Ringan"
                      : story.severity === "moderate"
                        ? "Sedang"
                        : "Parah"}
                  </span>
                  {story.resolved && (
                    <span className="badge badge-resolved">Terselesaikan</span>
                  )}
                </div>
              </div>

              <p className="story-content">{truncateContent(story.content)}</p>

              <div className="story-meta">
                <span className="category-tag">{story.category}</span>
                <span className="location-tag">{story.location}</span>
              </div>

              <div className="story-footer">
                <div className="story-info">
                  <FiCalendar size={14} />
                  <span>{formatDate(story.createdAt)}</span>
                </div>
                <div className="story-actions">
                  <button className="action-btn">
                    <FiHeart size={18} />
                  </button>
                  <button className="action-btn">
                    <FiMessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {stories.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
          >
            Sebelumnya
          </button>
          <span>Halaman {page}</span>
          <button onClick={() => setPage(page + 1)}>Selanjutnya</button>
        </div>
      )}
    </div>
  );
};

export default StoryList;
