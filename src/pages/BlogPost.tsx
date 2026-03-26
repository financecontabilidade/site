import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/blogData";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="flex flex-col bg-white min-h-screen pb-24">
      {/* Article Header */}
      <section className="bg-brand-navy text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-brand-gold hover:text-white transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-brand-gold pl-4">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-blue max-w-none"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>
          
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="bg-brand-light p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Ficou com alguma dúvida?</h3>
                <p className="text-gray-600">Nossa equipe está pronta para analisar o seu caso específico.</p>
              </div>
              <Link
                to="/contato"
                className="whitespace-nowrap inline-flex justify-center items-center px-6 py-3 text-base font-semibold rounded-md bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
