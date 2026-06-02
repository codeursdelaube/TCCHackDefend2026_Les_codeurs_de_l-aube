import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChefHat, Utensils, Soup, Info } from 'lucide-react'

import platsTogolais from '@/app/Plats/plat'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PlatDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const plat = platsTogolais.find((p) => p.id === resolvedParams.id)
  if (!plat) notFound()

  const getBadgeColor = (categorie: string) => {
    switch (categorie) {
      case 'Plat Principal': return 'bg-emerald-600'
      case 'Sauce':          return 'bg-red-600'
      case 'Street Food':    return 'bg-amber-600'
      case 'Accompagnement': return 'bg-blue-600'
      default:               return 'bg-base-content/40'
    }
  }

  return (
    <main className="relative min-h-screen w-full bg-base-100 text-base-content
                     pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Halos décoratifs */}
      <div className="absolute top-1/3 left-1/4 w-125 h-125
                      bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100
                      bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* Bouton Retour */}
        <Link
          href="/cuisine"
          className="btn btn-ghost btn-sm text-base-content/50
                     hover:text-base-content hover:bg-base-content/5
                     rounded-full mb-6 inline-flex items-center gap-2 transition-all"
        >
          <ArrowLeft size={16} />
          Retour aux saveurs
        </Link>

        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12
                        items-start bg-base-200 border border-base-content/10
                        shadow-2xl rounded-3xl p-5 sm:p-6 md:p-8">

          {/* COLONNE GAUCHE : Image */}
          <div className="relative w-full h-80 sm:h-112.5 md:h-125
                          rounded-2xl overflow-hidden shadow-2xl
                          border border-base-content/5 group bg-base-300">
            <Image
              src={plat.image}
              alt={plat.nom}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000
                         ease-out group-hover:scale-105"
            />
            {/* Overlay — toujours sombre sur photo */}
            <div className="absolute inset-0 bg-linear-to-t
                            from-black/40 via-transparent to-transparent" />

            {/* Badge catégorie */}
            <span className={`absolute top-4 left-4 badge border-none text-white
                              font-bold text-xs tracking-wider uppercase
                              px-3 py-2 rounded-full shadow-lg
                              ${getBadgeColor(plat.catégorie)}`}>
              {plat.catégorie}
            </span>
          </div>

          {/* COLONNE DROITE : Infos */}
          <div className="flex flex-col justify-between h-full space-y-6 lg:pt-2">
            <div>

              {/* Étiquette terroir */}
              <div className="inline-flex items-center gap-2 text-xs font-bold
                              text-amber-500 tracking-wider uppercase
                              bg-amber-400/10 border border-amber-400/20
                              px-3 py-1.5 rounded-xl">
                <ChefHat size={14} />
                <span>Patrimoine Culinaire</span>
                <span className="text-base-content/20">•</span>
                <span className="text-base-content/40 font-medium lowercase italic">
                  Togo
                </span>
              </div>

              {/* Nom du plat */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black
                             tracking-tight text-base-content
                             mt-4 mb-4 uppercase">
                {plat.nom}
              </h1>

              {/* Séparateur */}
              <div className="h-px w-full bg-linear-to-r
                              from-base-content/10 to-transparent my-4" />

              {/* Description */}
              <div className="bg-base-300 rounded-2xl p-4
                              border border-base-content/5 mb-6 shadow-inner">
                <p className="text-base-content/60 text-sm leading-relaxed italic">
                  {plat.description}
                </p>
              </div>

              {/* Histoire */}
              <div className="space-y-3">
                <h2 className="text-lg font-black text-emerald-500 uppercase
                               tracking-wide flex items-center gap-2">
                  <Soup size={18} className="animate-pulse" />
                  Origine & Tradition
                </h2>
                <p className="text-base-content/70 text-justify leading-relaxed
                              text-sm md:text-base font-medium whitespace-pre-line">
                  {plat.histoire}
                </p>
              </div>
            </div>

            {/* Pied : Accompagnements + CTA */}
            <div className="pt-6 border-t border-base-content/5 mt-auto
                            flex flex-col sm:flex-row justify-between
                            items-center gap-4">

              {/* Accompagnement */}
              <div className="text-xs text-base-content/50 font-medium
                              flex items-start gap-2 max-w-sm">
                <Info size={16} className="text-amber-500 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-amber-500 tracking-wide uppercase
                                     font-bold block mb-0.5">
                    Accompagnement idéal :
                  </strong>
                  <span className="text-base-content/70 font-medium">
                    {plat.accompagnementsIdaux}
                  </span>
                </span>
              </div>

              {/* CTA */}
              <Link href="/restaurants" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn rounded-xl border-none
                                   bg-linear-to-r from-emerald-500 to-green-600
                                   text-white font-bold hover:scale-105
                                   transition-transform shadow-lg
                                   shadow-emerald-600/10 gap-2">
                  <Utensils size={16} />
                  {"Trouver à proximité"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}