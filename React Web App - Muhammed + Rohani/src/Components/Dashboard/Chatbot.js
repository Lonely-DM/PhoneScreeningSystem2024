// Chatbot.js
import React, { useEffect } from 'react';


const Chatbot = () => {
  useEffect(() => {
    
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/3b4efb4d-62d3-49ad-b51a-e786b77c7b61/webchat/v2.1/config.js'; 
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup when the component is unmounted
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // The chatbot UI will appear in the bottom right corner
};

export default Chatbot;
