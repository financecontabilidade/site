import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSection } from '../lib/cms';

interface WhatsAppConfig {
  is_active: boolean;
  phone: string;
  position: 'left' | 'right';
  message: string;
}

export default function WhatsAppButton() {
  const [config, setConfig] = useState<WhatsAppConfig | null>(null);

  useEffect(() => {
    async function loadConfig() {
      const data = await getSection<WhatsAppConfig>('globals', 'whatsapp_plugin');
      if (data) setConfig(data);
    }
    loadConfig();
    
    // Check for updates every 30 seconds for real-time-ish feel
    const interval = setInterval(loadConfig, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!config || !config.is_active || !config.phone) return null;

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(config.message || "Olá! Gostaria de falar com um consultor.");
    const url = `https://wa.me/${config.phone}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className={`fixed bottom-6 z-[9998] w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors ${
          config.position === 'left' ? 'left-6' : 'right-6'
        }`}
        title="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></span>
      </motion.button>
    </AnimatePresence>
  );
}
