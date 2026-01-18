import React from 'react';
import StoryList from '../components/StoryList';
import '../styles/StoriesPage.css';

const StoriesPage = () => {
  return (
    <div className="stories-page">
      <div className="page-header">
        <h1>Cerita-Cerita Dari Komunitas Kami</h1>
        <p>Baca bagaimana orang lain menghadapi dan mengatasi bullying. Inspirasi dan dukungan nyata.</p>
      </div>
      <StoryList />
    </div>
  );
};

export default StoriesPage;
