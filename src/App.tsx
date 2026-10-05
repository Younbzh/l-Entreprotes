import React from 'react';
import { Pizza, Mic, Users, Clock, MapPin, Phone, Facebook, Flame, Check, Music } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section with Wood Texture */}
      <header className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-red-900 text-white">
        {/* Wood texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-amber-900 rounded-full font-bold shadow-lg animate-bounce">
              <Flame className="w-5 h-5" />
              <span className="text-sm tracking-wide">OUVERT MER-DIM 19H-1H</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight">
              <span className="block text-yellow-400 drop-shadow-2xl" style={{ fontFamily: "'Anton', sans-serif" }}>
                L'ENTREPÔTES
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300">
              {siteConfig.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 border-2 border-white/50"
              >
                <Facebook className="w-6 h-6" />
                Facebook
              </a>
            </div>

            {/* Concept */}
            <div className="pt-8">
              <p className="text-xl sm:text-2xl text-yellow-100 font-medium italic">
                {siteConfig.about.concept}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#fafaf9"/>
          </svg>
        </div>
      </header>

      {/* Pizza Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pizza Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-amber-900 rounded-full font-bold text-sm mb-4">
                  <Pizza className="w-4 h-4" />
                  <span>NOS PIZZAS</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-amber-900 mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
                  Composez VOTRE pizza
                </h2>
                <p className="text-xl text-stone-600 font-medium">
                  {siteConfig.pizza.slogan}
                </p>
              </div>

              {/* Pizza Pricing */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl border-4 border-amber-300">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-amber-900">{siteConfig.pizza.size}</span>
                    <span className="text-lg text-stone-700">Pizza personnalisable</span>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold text-stone-800">{siteConfig.pizza.base.name}</span>
                      <span className="text-3xl font-black text-red-600">{siteConfig.pizza.base.price.toFixed(2)}€</span>
                    </div>
                    <div className="text-amber-900 font-bold text-lg border-t-2 border-dashed border-amber-300 pt-3 mt-3">
                      + {siteConfig.pizza.toppings.price.toFixed(2)}€ par ingrédient
                    </div>
                  </div>

                  {/* Toppings list with checkmarks */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {siteConfig.pizza.toppings.list.map((topping, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 animate-fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0 shadow">
                          <Check className="w-4 h-4 text-amber-900 stroke-[3]" />
                        </div>
                        <span className="text-stone-800 font-semibold">{topping}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold">
                  <Check className="w-5 h-5" />
                  <span>À emporter</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-lg font-semibold">
                  <Check className="w-5 h-5" />
                  <span>Livraison Uber Eats</span>
                </div>
              </div>
            </div>

            {/* Pizza Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/625898095_122188125134517130_8553124274192476666_n.jpg"
                  alt="Affiche pizzas L'Entrepôtes"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-400 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Karaoke Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            {/* Title */}
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg mb-6">
                <Music className="w-6 h-6" />
                <span>KARAOKÉ</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6" style={{ fontFamily: "'Anton', sans-serif" }}>
                CHANTEZ, DANSEZ,<br />AMUSEZ-VOUS !
              </h2>
              <p className="text-2xl text-yellow-100 max-w-3xl mx-auto">
                {siteConfig.karaoke.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {siteConfig.features.map((feature, idx) => {
                const icons = {
                  pizza: Pizza,
                  mic: Mic,
                  party: Flame,
                  users: Users
                };
                const Icon = icons[feature.icon as keyof typeof icons];

                return (
                  <div 
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-amber-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-yellow-100 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-amber-900" style={{ fontFamily: "'Anton', sans-serif" }}>
              L'HISTOIRE DE L'ENTREPÔTES
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              {siteConfig.about.story}
            </p>
            <p className="text-lg text-stone-500 italic">
              {siteConfig.about.history}
            </p>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-amber-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 text-amber-900 rounded-full font-bold text-xl mb-4">
                <Clock className="w-6 h-6" />
                <span>HORAIRES</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {Object.entries(siteConfig.hours.schedule).map(([day, hours]) => (
                <div 
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl ${
                    hours === 'Fermé' 
                      ? 'bg-stone-100 text-stone-400' 
                      : 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 font-bold'
                  }`}
                >
                  <span className="capitalize text-lg">{day}</span>
                  <span className="text-lg">{hours}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-6 border-t-2 border-amber-200">
              <p className="text-lg text-stone-600 font-semibold">
                {siteConfig.hours.service}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-amber-900 mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
              VENEZ NOUS VOIR !
            </h2>
            <p className="text-xl text-stone-600">
              En plein cœur de Quimper
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-amber-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 text-xl mb-1">Adresse</h3>
                      <p className="text-stone-600 text-lg">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-amber-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 text-xl mb-1">Téléphone</h3>
                      <a 
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="text-red-600 hover:text-red-700 font-bold text-lg"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-amber-100">
                    <h3 className="font-bold text-amber-900 text-xl mb-4">Suivez-nous</h3>
                    <a 
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all duration-300 hover:scale-105"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-amber-900" />
                  <h3 className="font-black text-amber-900 text-xl">PRIVATISATION</h3>
                </div>
                <p className="text-amber-900 font-bold">
                  Réservez L'Entrepôtes pour vos événements (minimum 20 personnes)
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5!2d${siteConfig.contact.location.lng}!3d${siteConfig.contact.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU5JzM2LjYiTiA0wrAwNScxMS4zIlc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation L'Entrepôtes Quimper"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-red-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
                {siteConfig.name}
              </h3>
              <p className="text-yellow-200 text-lg">{siteConfig.tagline}</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-yellow-400">Contact</h4>
              <div className="space-y-2 text-yellow-100">
                <p>{siteConfig.contact.address}</p>
                <p className="font-bold">{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-yellow-400">Horaires</h4>
              <p className="text-yellow-100 font-semibold">Mercredi au Dimanche</p>
              <p className="text-yellow-100 text-lg font-bold">19h - 1h</p>
              <p className="text-yellow-200 text-sm mt-2">{siteConfig.hours.service}</p>
            </div>
          </div>

          <div className="border-t border-yellow-700 pt-8 text-center text-yellow-200 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
            <p className="mt-2">Bar à pizzas & Karaoké à Quimper, Finistère (29)</p>
            <p className="mt-4 text-yellow-300/80">
              Site créé par <a href="https://www.avalon-stratege.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 underline decoration-yellow-300/50">Avalon Stratège</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default App;