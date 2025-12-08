import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import businessCard from '../assets/business card.png';
import p3 from '../assets/product 3.jpg';
import p4 from '../assets/product 4.jpg';
import p6 from '../assets/product 6.jpg';
import p7 from '../assets/product 7.jpg';
import p8 from '../assets/product 8.jpg';

const products = [p3, p4, p6, p7, p8 ];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1D1D]">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PARIDO Logo" className="h-12 w-auto object-contain rounded-full" />
            <span className="text-2xl font-bold text-[#FE904D] tracking-wide">PARIDO</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#FE904D] transition-colors duration-300 font-medium">Accueil</a>
            <a href="#products" className="hover:text-[#FE904D] transition-colors duration-300 font-medium">Produits</a>
            <a href="#contact" className="hover:text-[#FE904D] transition-colors duration-300 font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-[#FE904D] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 hover:bg-gray-50 hover:text-[#FE904D] transition-colors duration-300 font-medium">Accueil</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 hover:bg-gray-50 hover:text-[#FE904D] transition-colors duration-300 font-medium">Produits</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 hover:bg-gray-50 hover:text-[#FE904D] transition-colors duration-300 font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative bg-[#FE904D] text-[#1D1D1D] py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
              Bienvenue chez <br/> <span className="text-[#1D1D1D]">PARIDO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light opacity-95">
              Consommables dentaires de qualité supérieure pour les professionnels exigeants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-sm">
                <span className="text-xl">💯</span> <span className="font-medium">Satisfaction garantie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 shadow-sm">
                <span className="text-xl">🚚</span> <span className="font-medium">Livraison rapide partout</span>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-white text-[#FE904D] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 transform">
              Contactez-nous
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-center perspective-1000">
             <img 
                src={products[currentImageIndex]} 
                alt="Dental Product Highlight" 
                className="rounded-2xl shadow-2xl max-w-md w-full object-cover transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 border-4 border-white/20" 
             />
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1D1D1D] mb-4">Nos Produits</h2>
            <div className="w-24 h-1 bg-[#FE904D] mx-auto rounded-full"></div>
            <p className="mt-4 text-[#1D1D1D] max-w-2xl mx-auto">Découvrez notre gamme complète de consommables dentaires conçus pour votre pratique quotidienne.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src={product} 
                    alt={`Produit dentaire ${index + 1}`} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-[#1D1D1D]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Produit de Qualité
                  </span>
                  <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    PARIDO Dentaire
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            
            {/* Contact Info Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full lg:w-5/12 space-y-8 transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-[#FE904D] border-b pb-4">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#FE904D]/10 rounded-2xl flex items-center justify-center text-[#FE904D] group-hover:bg-[#FE904D] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1D1D1D] text-lg">Adresse</p>
                    <p className="text-[#1D1D1D]/80">Marrakech, Maroc</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#FE904D]/10 rounded-2xl flex items-center justify-center text-[#FE904D] group-hover:bg-[#FE904D] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1D1D1D] text-lg">Téléphone</p>
                    <p className="text-[#1D1D1D]/80 text-lg">0660291486</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#FE904D]/10 rounded-2xl flex items-center justify-center text-[#FE904D] group-hover:bg-[#FE904D] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1D1D1D] text-lg">Email</p>
                    <p className="text-[#1D1D1D]/80">parido.sarl0@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-4 border-t border-gray-100">
                <p className="font-bold text-[#1D1D1D] mb-4">Suivez-nous sur les réseaux</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/paridodentaire/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    Instagram
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=100067949507937" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Business Card Image */}
            <div className="w-full lg:w-5/12 flex flex-col items-center">
               <div className="bg-white p-4 rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-500 w-full">
                  <img src={businessCard} alt="Carte de visite PARIDO" className="w-full rounded-lg shadow-inner" />
               </div>
               <p className="mt-6 text-[#1D1D1D]/60 italic text-center">Votre partenaire de confiance pour tous vos besoins dentaires.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1D1D] text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
             <img src={logo} alt="PARIDO Logo" className="h-10 w-auto rounded-full opacity-80" />
             <span className="text-xl font-bold tracking-wider">PARIDO</span>
          </div>
          <p className="text-gray-400 mb-6">&copy; {new Date().getFullYear()} Société PARIDO. Tous droits réservés par <a href="https://github.com/yahyaLMR">Yahya Lmr.</a></p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
