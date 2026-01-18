import React from 'react';
import Resources from '../components/Resources';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <div className="page-header">
        <h1>Sumber Daya & Dukungan</h1>
        <p>Panduan praktis, strategi coping, dan informasi yang Anda butuhkan untuk menghadapi bullying.</p>
      </div>
      <Resources />
    </div>
  );
};

export default ResourcesPage;
