import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS بتاع المكتبة

import LandingPage from './LandingPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      once: true,     // يعمل مرة واحدة بس
    });
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
