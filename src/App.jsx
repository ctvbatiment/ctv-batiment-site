import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageSquare, FileText, Lightbulb, ChevronRight, Star } from 'lucide-react';

export default function ConstructionSite() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [quoteData, setQuoteData] = useState({ name: '', email: '', projectType: '', budget: '', description: '' });
  const [consultData, setConsultData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const projects = [
    { id: 1, title: 'Façade Moderne', category: 'Façade', image: '/photos_optimisees/6b452778e0b5428aba8414571f871d6c_optimized.jpg' },
    { id: 2, title: 'Chantier en Cours', category: 'Gros Œuvre', image: '/photos_optimisees/bf2f2c3c13c242cc86b7c7a25ad80aed_optimized.jpg' },
    { id: 3, title: 'Installation Électrique', category: 'Installation', image: '/photos_optimisees/556f2ffffa604692a2f82c72cf309de1_optimized.jpg' },
    { id: 4, title: 'Chauffage et Isolation', category: 'Énergie', image: '/photos_optimisees/38c0b473fbf8491081e1764cb1d3e5a8_optimized.jpg' },
    { id: 5, title: 'Couverture Toiture', category: 'Toiture', image: '/photos_optimisees/506c2e6674a34fe08387f3cbcb98d66d_optimized.jpg' },
    { id: 6, title: 'Projet Complet', category: 'Bâtiment', image: '/photos_optimisees/7332a74a79f64ecbbfdc12f8b55a6bf3_optimized.jpg' },
    { id: 7, title: 'Construction Neuve', category: 'Bâtiment', image: '/photos_optimisees/99502d8e60f34301848796e3344daeb5_optimized.jpg' },
    { id: 8, title: 'Rénovation Complète', category: 'Rénovation', image: '/photos_optimisees/1457e21921104ff18a51ad1af4f0096c_optimized.jpg' },
    { id: 9, title: 'Extension Maison', category: 'Extension', image: '/photos_optimisees/16830cd5dfdc495dbd1d760c1f547004_optimized.jpg' },
    { id: 10, title: 'Travaux Intérieurs', category: 'Aménagement', image: '/photos_optimisees/d22cf2ef083f4eaca9f41f1366ff122e_optimized.jpg' },
    { id: 11, title: 'Finitions Qualité', category: 'Finitions', image: '/photos_optimisees/d22cf2ef083f4eaca9f41f1366ff122e_1_optimized.jpg' },
    { id: 12, title: 'Projet en Détail', category: 'Portfolio', image: '/photos_optimisees/WhatsApp_Image_20260424_at_16_41_53_optimized.jpg' },
  ];

  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    alert(`Merci! Votre ${type} a été envoyé. Nous vous contacterons rapidement.`);
    if (type === 'message') setFormData({ name: '', email: '', phone: '', message: '' });
    if (type === 'devis') setQuoteData({ name: '', email: '', projectType: '', budget: '', description: '' });
    if (type === 'conseil') setConsultData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                CB
              </div>
              <span className="font-bold text-lg text-slate-900">CTV Bâtiment</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                { label: 'Accueil', id: 'accueil' },
                { label: 'Projets', id: 'projets' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Items */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {[
                { label: 'Accueil', id: 'accueil' },
                { label: 'Projets', id: 'projets' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    activeSection === item.id ? 'bg-orange-100 text-orange-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'accueil' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-orange-500 font-bold text-sm mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-600 rounded" />
                  EXPERT EN BÂTIMENT
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Construisons votre vision
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Construction, rénovation et conseil en bâtiment. Expertise depuis plus de 15 ans.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setActiveSection('projets')}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition flex items-center gap-2 justify-center"
                  >
                    Voir nos projets <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => setActiveSection('contact')}
                    className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-medium transition"
                  >
                    Nous contacter
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl">🏗️</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projets Section */}
      {activeSection === 'projets' && (
        <div className="min-h-screen py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos Projets</h2>
              <p className="text-xl text-slate-600">Découvrez nos réalisations en construction et rénovation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map(project => (
                <div key={project.id} className="group cursor-pointer">
                  <div className="rounded-lg h-64 overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-lg bg-slate-200">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-4">{project.title}</h3>
                  <p className="text-sm text-orange-600 font-medium">{project.category}</p>
                </div>
              ))}
            </div>

            {/* Localisation */}
            <div className="mt-20 pt-20 border-t border-slate-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Nous trouver</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <MapPin className="text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">Adresse</p>
                        <p className="text-slate-600">25 Rue des Beauvettes, 95370 Montigny-lès-Cormeilles, France</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">Téléphone</p>
                        <p className="text-slate-600">+33 (0)7 60 62 87 39</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">Email</p>
                        <p className="text-slate-600">ctv.entreprise@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-300 rounded-lg h-64 flex items-center justify-center text-4xl">
                  🗺️
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <div className="min-h-screen py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos Services</h2>
              <p className="text-xl text-slate-600">Construction et rénovation </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: '🏢', title: 'Construction', desc: 'Bâtiments neufs avec expertise structurelle' },
                { icon: '🔨', title: 'Rénovation', desc: 'Transformation et isolation de bâtiments' },
                { icon: '🎓', title: 'Consultation', desc: 'Conseils d\'expert en projets de bâtiment' },
                { icon: '⚡', title: 'Installations', desc: 'Électricité, chauffage, plomberie, menuiserie' },
              ].map((service, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-8 hover:border-orange-600 hover:shadow-lg transition">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-lg p-8 hover:shadow-lg transition text-center"
              >
                <MessageSquare size={32} className="mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Demander un Devis</h4>
                <p className="text-sm opacity-90">Obtenez une estimation rapide</p>
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-gradient-to-br from-slate-700 to-slate-600 text-white rounded-lg p-8 hover:shadow-lg transition text-center"
              >
                <Phone size={32} className="mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Contact Rapide</h4>
                <p className="text-sm opacity-90">Parlez avec nos experts</p>
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-gradient-to-br from-slate-600 to-slate-500 text-white rounded-lg p-8 hover:shadow-lg transition text-center"
              >
                <Lightbulb size={32} className="mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Demander Conseil</h4>
                <p className="text-sm opacity-90">Consultation d'expert</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="min-h-screen py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nous Contacter</h2>
              <p className="text-xl text-slate-600">Plusieurs façons de nous joindre</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Rapide */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <MessageSquare className="text-orange-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Rapide</h3>
                <form onSubmit={(e) => handleSubmit(e, 'message')} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, setFormData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, setFormData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, setFormData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-lg transition">
                    Envoyer
                  </button>
                </form>
              </div>

              {/* Demande de Devis */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <FileText className="text-orange-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Demander un Devis</h3>
                <form onSubmit={(e) => handleSubmit(e, 'devis')} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={quoteData.name}
                    onChange={(e) => handleInputChange(e, setQuoteData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={quoteData.email}
                    onChange={(e) => handleInputChange(e, setQuoteData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <select
                    name="projectType"
                    value={quoteData.projectType}
                    onChange={(e) => handleInputChange(e, setQuoteData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  >
                    <option value="">Type de projet</option>
                    <option value="construction">Construction</option>
                    <option value="renovation">Rénovation</option>
                    <option value="extension">Extension</option>
                  </select>
                  <textarea
                    name="description"
                    placeholder="Description du projet"
                    rows="3"
                    value={quoteData.description}
                    onChange={(e) => handleInputChange(e, setQuoteData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-lg transition">
                    Demander un devis
                  </button>
                </form>
              </div>

              {/* Consultation */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <Lightbulb className="text-orange-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Demander Conseil</h3>
                <form onSubmit={(e) => handleSubmit(e, 'conseil')} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={consultData.name}
                    onChange={(e) => handleInputChange(e, setConsultData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={consultData.email}
                    onChange={(e) => handleInputChange(e, setConsultData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={consultData.phone}
                    onChange={(e) => handleInputChange(e, setConsultData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                  />
                  <select
                    name="service"
                    value={consultData.service}
                    onChange={(e) => handleInputChange(e, setConsultData)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
                    required
                  >
                    <option value="">Type de consultation</option>
                    <option value="structure">Structure bâtiment</option>
                    <option value="renovation">Plan de rénovation</option>
                    <option value="cout">Évaluation des coûts</option>
                  </select>
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-lg transition">
                    Demander un RDV
                  </button>
                </form>
              </div>
            </div>

            {/* Infos de contact */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="text-orange-600 mx-auto mb-4" size={32} />
                <p className="font-medium text-slate-900">Téléphone</p>
                <p className="text-slate-600">+33 (0)7 60 62 87 39</p>
              </div>
              <div>
                <Mail className="text-orange-600 mx-auto mb-4" size={32} />
                <p className="font-medium text-slate-900">Email</p>
                <p className="text-slate-600">ctv.entreprise@gmail.com</p>
              </div>
              <div>
                <MapPin className="text-orange-600 mx-auto mb-4" size={32} />
                <p className="font-medium text-slate-900">Localisation</p>
                <p className="text-slate-600">25 Rue des Beauvettes, 95370 Montigny-lès-Cormeilles</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg" />
                <span className="font-bold">CTV Bâtiment</span>
              </div>
              <p className="text-slate-400">Expert en construction et rénovation</p>
            </div>
            {[
              { title: 'Services', items: ['Construction', 'Rénovation', 'Consultation'] },
              { title: 'Contact', items: ['+33 (0)7 60 62 87 39', ' ctv.entreprise@gmail.com'] },
              { title: 'Localisation', items: ['25 Rue des Beauvettes, 95370 Montigny-lès-Cormeilles', 'France'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-slate-400 hover:text-white transition cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 CTV Bâtiment. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
