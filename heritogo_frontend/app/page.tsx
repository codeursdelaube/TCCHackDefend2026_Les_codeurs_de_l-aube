'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scan, Map, Utensils, Sparkles, ArrowRight, PlayCircle, Volume2 } from 'lucide-react'

import HeroBanner1 from '@/public/Hero1.jpg'
import HeroBanner2 from '@/public/Hero2.jpg'
import HeroBanner3 from '@/public/Hero3.jpg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { StaticImageData } from 'next/image'

interface SlideItem {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: StaticImageData;
}

interface FeatureCardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  link: string;
}

export default function AcceuilPage() {
  
  const slides: SlideItem[] = [
    {
      title: "Heritogo",
      subtitle: "Le Guide Touristique Intelligent du Togo",
      description: "Identifiez les monuments nationaux en un instant grâce à notre IA",
      buttonText: "Tester la Démo IA (Scanner)",
      buttonLink: "/scan",
      image: HeroBanner1
    },
    {
      title: "Tourisme facile",
      subtitle: "Naviguez vers l'Inconnu",
      description: "Découvrez les lieux secrets du Togo avec notre système de guide intelligent.",
      buttonText: "Explorer les Lieux (GPS)",
      buttonLink: "/lieux",
      image: HeroBanner2 
    },
    {
      title: "Saveurs Locales",
      subtitle: "Le Patrimoine Culinaire",
      description: "Trouvez les meilleurs restaurants qui hébergent le patrimoine culinaire à proximité grâce à notre carte interactive.",
      buttonText: "Découvrir la Cuisine",
      buttonLink: "/cuisine",
      image: HeroBanner3
    }
  ]

  const features: FeatureCardItem[] = [
    {
      title: "Scanner Intelligent Gemini IA",
      description: "Prenez ou importez une photo d'un monument historique ou culturel au Togo. Notre application transmet l'image à l'API Gemini 1.5 Flash pour analyser l'élément en temps réel, vous renvoyer son histoire complète et l'associer à notre base de données locale.",
      icon: <Scan className="h-6 w-6 text-green-500" />,
      badge: "Gemini 1.5 Flash API",
      link: "/scan"
    },
    {
      title: "Géolocalisation & Proximité",
      description: "Explorez une base de données locale des sites et complexes hôteliers togolais. L'application utilise les coordonnées GPS de votre appareil pour calculer instantanément les distances en kilomètres à l'aide de la formule mathématique de Haversine.",
      icon: <Map className="h-6 w-6 text-amber-500" />,
      badge: "Algorithme Haversine",
      link: "/lieux"
    },
    {
      title: "Patrimoine Culinaire & Restos",
      description: "Découvrez l'histoire des plats traditionnels togolais emblématiques (Fufu, Ablo, Kom). En sélectionnant une spécialité culinaire, l'application interroge le backend pour lister les maquis et restaurants les plus proches proposant ce plat spécifique.",
      icon: <Utensils className="h-6 w-6 text-emerald-500" />,
      badge: "FastAPI Backend",
      link: "/cuisine"
    }
  ]

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-base-100">
      
      {/* ============================================
          SECTION 1 : BANNIÈRE CARROUSEL PLEIN ÉCRAN
          L'image couvre tout — texte toujours blanc
          car sur fond photo sombre
      ============================================ */}
      <section className="relative h-screen w-full overflow-hidden bg-base-100">
        <Swiper
          spaceBetween={0}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="h-full w-full"
        >
          {slides.map((slide: SlideItem, index: number) => (
            <SwiperSlide key={index} className="relative h-full w-full overflow-hidden">
              
              {/* Image de fond */}
              <div className="absolute inset-0 h-full w-full opacity-90">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill 
                  priority={index === 0} 
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Overlay — toujours sombre pour que le texte blanc soit lisible
                  sur la photo, peu importe le thème */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Contenu — texte toujours blanc car sur fond photo */}
              <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <motion.div
                  className="pointer-events-none opacity-0 in-[.swiper-slide-active]:pointer-events-auto"
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="hidden in-[.swiper-slide-active]:block">
                    <motion.h2 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-2 text-sm font-bold uppercase tracking-widest text-green-400"
                    >
                      {slide.subtitle}
                    </motion.h2>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-6 text-5xl font-black md:text-7xl lg:text-8xl tracking-tight text-white"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                    >
                      <Link href={slide.buttonLink}>
                        <button className="btn btn-lg rounded-full px-8 border-none bg-linear-to-r from-emerald-500 via-green-600 to-amber-500 hover:scale-105 text-white font-black tracking-wide transition-all shadow-xl shadow-green-500/20 gap-2">
                          <PlayCircle size={20} className="animate-pulse" />
                          {slide.buttonText}
                        </button>
                      </Link>
                      
                      <a href="#presentation">
                        <button className="btn btn-outline btn-lg rounded-full border-white/60 text-white px-8 hover:bg-white hover:text-black transition-all">
                          En savoir plus
                        </button>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Badge Hackathon */}
        <div className="absolute bottom-10 right-10 z-30 hidden md:block">
          <div className="badge badge-outline border-white/20 p-4 text-xs opacity-60 font-mono text-white">
            #TCCHackDefend2026
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2 : CARDS — s'adapte au thème
          Utilise les variables DaisyUI sémantiques
      ============================================ */}
      <section
        id="presentation"
        className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 scroll-mt-6"
      >
        
        {/* Halos décoratifs */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-100 h-100 bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-75 h-75 bg-amber-500/5 blur-[90px] rounded-full pointer-events-none" />

        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="animate-pulse" />
            Valorisation du patrimoine national
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-base-content">
            Explorez les fonctionnalités clés
          </h3>
          <p className="mt-4 text-base-content/60 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Heritogo combine intelligence artificielle et services de géolocalisation
            pour offrir une immersion complète au cœur de la culture et de la
            gastronomie togolaise.
          </p>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group relative bg-base-200 border border-base-content/10
                         hover:border-base-content/20 rounded-3xl p-6 md:p-8
                         transition-all duration-300 hover:-translate-y-1
                         shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Icône */}
                <div className="p-4 bg-base-300 border border-base-content/5
                                rounded-2xl w-fit mb-6
                                group-hover:bg-green-500/10
                                group-hover:border-green-500/20
                                transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Titre + badge */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <h4 className="text-xl font-bold tracking-wide text-base-content
                                 group-hover:text-green-500 transition-colors">
                    {feature.title}
                  </h4>
                  {feature.badge && (
                    <span className="text-[10px] font-mono font-semibold
                                     bg-base-300 border border-base-content/10
                                     text-base-content/50 px-2 py-0.5 rounded-md">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Lien bas de carte */}
              <div className="pt-4 border-t border-base-content/5">
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-xs font-bold
                             text-base-content/50 group-hover:text-base-content
                             transition-all gap-1 group-hover:gap-2"
                >
                  <span>Accéder à la fonctionnalité</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière TTS */}
        <div className="bg-base-200 border border-base-content/10 rounded-3xl
                        p-6 md:p-8 flex flex-col sm:flex-row items-center
                        justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20
                            rounded-xl text-emerald-500">
              <Volume2 size={24} className="animate-bounce" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-base-content">
                Audio Intégré
              </h4>
              <p className="text-sm text-base-content/60 max-w-xl mt-1">
                {"L'application intègre un module de synthèse vocale (TTS) natif pour écouter l'histoire des monuments directement depuis votre navigateur."}
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}