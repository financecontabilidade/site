import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pb-6 pointer-events-none flex justify-center">
      <div className="bg-brand-navy border border-white/10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-6 md:p-8 max-w-5xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 pointer-events-auto relative animate-fade-in-up">
        <button 
          onClick={declineCookies}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Encerrar aviso"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex-1 pr-6">
          <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
            <span>Sua privacidade é importante</span>
            <span role="img" aria-label="cookie">🍪</span>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Utilizamos cookies essenciais para o funcionamento seguro do nosso portal e cookies analíticos para melhorar continuamente a sua experiência. 
            Ao continuar navegando ou ao clicar em "Aceitar Todos", você concorda com o uso dessas tecnologias conforme a nossa{" "}
            <Link to="/politica-de-privacidade" className="text-brand-gold hover:underline font-medium">
              Política de Privacidade
            </Link>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
          <button 
            onClick={declineCookies}
            className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors text-center w-full md:w-auto"
          >
            Apenas Essenciais
          </button>
          <button 
            onClick={acceptCookies}
            className="px-6 py-3 rounded-full bg-brand-gold text-brand-navy text-sm font-bold hover:bg-brand-gold/90 transition-colors text-center w-full md:w-auto shadow-lg shadow-brand-gold/20"
          >
            Aceitar Todos
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
