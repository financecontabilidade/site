import { Link } from "react-router-dom";

export default function Footer() {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = "Olá, vim pelo site e gostaria de falar com vocês.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5522992458575?text=${encodedMessage}`, "_blank");
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-12 mb-12 gap-8">
          <h2 className="text-xl md:text-2xl font-bold text-white max-w-sm leading-tight">
            Receba conteúdos sobre<br />tributação e gestão.
          </h2>
          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-white/5 border border-white/10 text-white rounded-l-full px-6 py-3 md:w-80 focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm"
            />
            <button 
              type="submit" 
              className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-r-full hover:bg-brand-gold/90 transition-colors text-sm"
            >
              Inscrever-se
            </button>
          </form>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Info */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-brand-gold p-2 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                <span className="text-brand-navy font-bold text-xs">F</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Finance Contabilidade</span>
            </Link>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Finance Gestão e Negócios LTDA</p>
              <p>CNPJ 10.379.943/0001-20</p>
              <p>Fundada em Macaé · 29/09/2008</p>
              <p>R. Visconde de Quissama, 98 · Centro</p>
              <p>CEP 27910-020 · Macaé, RJ</p>
            </div>
          </div>

          {/* Column 2: Serviços */}
          <div>
            <h3 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li><Link to="/servicos/escrituracao-contabil" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Escrituração Contábil e Fiscal</Link></li>
              <li><Link to="/servicos/planejamento-tributario" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Planejamento Tributário</Link></li>
              <li><Link to="/servicos/folha-de-pagamento" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Folha de Pagamento e eSocial</Link></li>
              <li><Link to="/servicos/abertura-de-empresas" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Abertura e Regularização de Empresas</Link></li>
              <li><Link to="/servicos/compliance-auditoria" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Compliance e Auditoria Interna</Link></li>
              <li><Link to="/servicos/contabilidade-consultiva" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Contabilidade Consultiva e Estratégica</Link></li>
            </ul>
          </div>

          {/* Column 3: Segmentos */}
          <div>
            <h3 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-6">Segmentos</h3>
            <ul className="space-y-4">
              <li><Link to="/servicos/mercado-imobiliario" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Mercado Imobiliário</Link></li>
              <li><Link to="/servicos/saude-terceiro-setor" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Saúde e Terceiro Setor</Link></li>
              <li><Link to="/servicos/holdings" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Holding Familiar e Imobiliária</Link></li>
            </ul>
          </div>

          {/* Column 4: Contatos */}
          <div>
            <h3 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-6">Contatos</h3>
            <ul className="space-y-4">
              <li><a href="#" onClick={handleWhatsApp} className="text-sm text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">(22) 99245-8575</a></li>
              <li><Link to="/contato" className="text-sm text-gray-400 hover:text-brand-gold transition-colors flex items-start gap-2">R. Visconde de Quissama, 98<br/>Centro, Macaé - RJ</Link></li>
              <li className="text-sm text-gray-400 flex items-start gap-2">Seg a Quinta: 08h às 17h30<br/>Sexta: 08h às 17h</li>
              <li><Link to="/contato" className="text-sm text-brand-gold font-bold hover:text-white transition-colors mt-2 inline-block">Fale Conosco &rarr;</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[#64748B] text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Finance Gestão e Negócios LTDA · CNPJ 10.379.943/0001-20 · Macaé, RJ
            </p>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/politica-de-privacidade" className="text-[#64748B] hover:text-white text-xs transition-colors">Política de Privacidade</Link>
              <Link to="/termos-de-uso" className="text-[#64748B] hover:text-white text-xs transition-colors">Termos de Uso</Link>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#64748B] text-xs font-medium tracking-wide">Desenvolvido pelo Grupo 1925</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
