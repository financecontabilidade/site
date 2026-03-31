import { useState, useRef } from "react";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export default function ImageUploader({ label, value, onChange, folder = "general" }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    if (!file.type.startsWith('image/')) {
      setError("Por favor, selecione uma imagem válida.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${folder}/${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = fileName;

      const { data, error: uploadError } = await supabase.storage
        .from('cms-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('cms-images')
        .getPublicUrl(filePath);

      onChange(publicUrl);
    } catch (err: any) {
      setError("Erro ao fazer upload: " + err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</label>
      
      <div className="flex flex-col gap-4">
        {value ? (
          <div className="relative group w-full aspect-video md:aspect-auto md:h-48 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
            <img 
              src={value} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <Upload className="h-4 w-4" /> Alterar
              </button>
              <button 
                onClick={() => onChange('')}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full aspect-video md:aspect-auto md:h-48 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all bg-gray-50/50 group"
          >
            {uploading ? (
              <Loader2 className="h-8 w-8 animate-spin text-brand-gold" />
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ImageIcon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <span className="block text-sm font-bold text-gray-900">Clique para fazer upload</span>
                  <span className="block text-xs mt-1">PNG, JPG, WEBP até 5MB</span>
                </div>
              </>
            )}
          </button>
        )}

        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleUpload} 
          className="hidden" 
          accept="image/*"
        />

        {error && <p className="text-xs text-red-500 flex items-center gap-1"><X className="h-3 w-3" /> {error}</p>}
      </div>
    </div>
  );
}
