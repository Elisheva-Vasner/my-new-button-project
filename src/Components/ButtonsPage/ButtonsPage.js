import React from 'react';
import './ButtonsPage.css';

const ButtonsPage = () => {
  return (
    <div className="buttons-container">
      {}
      <div className="button-card view-card">
        <img
          src={process.env.PUBLIC_URL + '/view-icon.png'} 
          alt="View productions icon"
          className="button-icon"
        />
        <img
          src={process.env.PUBLIC_URL + '/view-label.png'}
          alt="View productions label"
          className="button-label"
        />
      </div>

      {}
      <div className="button-card upload-card">
        <img
          src={process.env.PUBLIC_URL + '/upload.png'} 
          alt="Upload folder icon"
          className="button-icon upload-icon"
        />
        <img
          src={process.env.PUBLIC_URL + '/label-text.png'} 
          alt="Upload folder label"
          className="button-label"
        />
      </div>
    </div>
  );
};

export default ButtonsPage;