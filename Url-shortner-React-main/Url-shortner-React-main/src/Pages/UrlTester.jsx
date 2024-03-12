import React, { useState } from 'react';
import Iframe from 'react-iframe';

const UrlTester = () => {
  const [url, setUrl] = useState('https://www.example.com');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <h2>URL Tester</h2>
      <div>
        <label htmlFor="urlInput">Enter URL: </label>
        <input
          type="text"
          id="urlInput"
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Iframe  url={url} width="100%" height="500px" />
      </div>
    </div>
  );
};

export default UrlTester;
