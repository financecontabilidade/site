import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogData";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col bg-brand-light min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog e Artigos</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Conteúdo técnico, análises tributárias e orientações estratégicas para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-brand-navy/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-navy mb-4 line-clamp-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-brand-gold transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-8 flex-grow line-clamp-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-brand-navy font-semibold hover:text-brand-gold transition-colors mt-auto"
                  >
                    Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
