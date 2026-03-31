import { useEffect } from 'react';
import { getPageContent } from '../lib/cms';

export default function GlobalStyleManager() {
  useEffect(() => {
    // 1. Fetch and Apply Styles
    getPageContent('globals').then(data => {
      if (data.styles) {
        const s = data.styles as Record<string, string>;
        const root = document.documentElement;
        
        if (s.color_navy) root.style.setProperty('--dynamic-navy', s.color_navy);
        if (s.color_gold) root.style.setProperty('--dynamic-gold', s.color_gold);
        if (s.color_light) root.style.setProperty('--dynamic-light', s.color_light);
        if (s.font_sans) root.style.setProperty('--dynamic-font', s.font_sans);
      }

      // 2. Load Google Analytics
      if (data.google_analytics) {
        const ga = data.google_analytics as { measurement_id: string; is_active: boolean };
        if (ga.is_active && ga.measurement_id && ga.measurement_id !== 'G-XXXXXXXXXX') {
          // Check if already loaded
          if (!document.getElementById('google-analytics')) {
            const script1 = document.createElement('script');
            script1.async = true;
            script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga.measurement_id}`;
            script1.id = 'google-analytics';
            document.head.appendChild(script1);

            const script2 = document.createElement('script');
            script2.innerHTML = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga.measurement_id}');
            `;
            document.head.appendChild(script2);
          }
        }
      }
    });
  }, []);

  return null; // This component only performs side effects
}
