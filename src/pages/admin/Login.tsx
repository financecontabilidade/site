import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, ArrowRight, Lock, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      navigate("/admin");
    } catch (err: any) {
      setError(err.message === "Invalid login credentials" 
        ? "E-mail ou senha incorretos." 
        : "Erro ao realizar login: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block group cursor-pointer mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-brand-gold font-bold text-lg font-serif">F</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-navy">Finance <span className="text-brand-gold font-light">Admin</span></span>
            </div>
          </Link>
          <h2 className="text-3xl font-light text-gray-800">
            Painel de <span className="font-bold">Controle</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Insira suas credenciais para gerenciar o conteúdo do site.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-navy"></div>
          
          {error && (
            <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm animate-shake">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                E-MAIL INSTITUCIONAL
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#EFECE5] rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" 
                  placeholder="admin@financecontabil.com.br"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Lock className="w-3 h-3" /> SENHA DE ACESSO
              </label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#EFECE5] rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all font-mono" 
                  placeholder="••••••••"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 px-8 py-4 text-sm font-bold rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors group mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
              ) : (
                <Shield className="w-4 h-4 text-brand-gold" />
              )}
              {loading ? "AUTENTICANDO..." : "ENTRAR NO PAINEL"}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
