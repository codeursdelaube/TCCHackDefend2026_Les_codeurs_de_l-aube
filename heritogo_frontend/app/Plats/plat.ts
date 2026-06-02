import ImPlat1 from '@/public/Cuisine/fufu.jpeg';
import ImPlat2 from '@/public/Cuisine/ablo.jpeg';
import ImPlat3 from '@/public/Cuisine/khom (2).jpeg';
import ImPlat4 from '@/public/Cuisine/ayimolou.jpg';
import ImPlat5 from '@/public/Cuisine/djenkoume.jpeg';
import ImPlat6 from '@/public/Cuisine/gboma.jpg';
import ImPlat7 from '@/public/Cuisine/akoume_ademe.jpg';
import ImPlat8 from '@/public/Cuisine/koliko.jpg';
import ImPlat9 from '@/public/Cuisine/azidessi.jpg';

import { StaticImageData } from 'next/image';

export interface Plat {
  id: string;
  nom: string;
  catégorie: 'Accompagnement' | 'Plat Principal' | 'Street Food' | 'Sauce';
  description: string;
  histoire: string;
  accompagnementsIdaux: string;
  image: StaticImageData;
}

export const platsTogolais: Plat[] = [
  {
    "id": "fufu_togolais",
    "nom": "Fufu (Foufou)",
    "catégorie": "Plat Principal",
    "description": "L'incontournable de la cuisine togolaise, obtenu en pilant vigoureusement de l'igname bouillie dans un mortier.",
    "histoire": "Véritable institution nationale, le Fufu est traditionnellement consommé en famille, particulièrement le week-end et lors des fêtes. Sa préparation demande une force physique remarquable : les morceaux d'igname chaude sont pilés à l'aide d'un grand pilon en bois jusqu'à obtenir une pâte lisse, élastique et onctueuse.",
    "accompagnementsIdaux": "Sauce claire (pimentée), Sauce Graine (Noix de palme), Arachide ou Arbi (Tomate concentrée) accompagnée de viande de mouton, de bœuf ou de poulet.",
    "image": ImPlat1
  },
  {
    "id": "ablo_togolais",
    "nom": "Ablo",
    "catégorie": "Accompagnement",
    "description": "Petits gâteaux de riz légèrement sucrés, cuits à la vapeur, à la texture douce, alvéolée et moelleuse.",
    "histoire": "D'origine du Sud du Togo et du Bénin, l'Ablo est le roi de la street-food côtière. Sa fermentation délicate lui donne ce goût acidulé et sucré unique. Historiquement vendu par les femmes au bord des routes et dans les gares routières, il accompagne traditionnellement les pique-niques à la plage de Lomé ou Aného.",
    "accompagnementsIdaux": "Poisson frit ou grillé, piment noir (piment noir séché pilé ou 'Yébéessé Sourou') et une salade d’oignons et tomates fraîches.",
    "image": ImPlat2
  },
  {
    "id": "kom_togolais",
    "nom": "Kohm",
    "catégorie": "Accompagnement",
    "description": "Une boule de pâte de maïs fermentée, dense et légèrement aigre, enveloppée et cuite dans des feuilles de maïs.",
    "histoire": "Aussi appelé 'Galo' ou 'Come', ce plat d'origine Ga (Ghana) l'est devenu un pilier de l'alimentation quotidienne au Togo. La technique de fermentation de la pâte de maïs sur plusieurs jours permet de conserver le plat longtemps, ce qui en faisait la nourriture idéale pour les pêcheurs de la côte maritime.",
    "accompagnementsIdaux": "Poisson frit, piment vert écrasé frais, piment noir (Shito) et des oignons émincés.",
    "image": ImPlat3
  },
  {
    "id": "ayimolou_togolais",
    "nom": "Ayimolou",
    "catégorie": "Plat Principal",
    "description": "Le riz au gras traditionnel togolais cuit ensemble avec des haricots, lui donnant sa couleur brune caractéristique.",
    "histoire": "Plat populaire par excellence au Togo, l'Ayimolou est le petit-déjeuner favori des Loméens. Traditionnellement vendu très tôt le matin par les 'Ayimolou-tché' (vendeuses de rue), il est reconnaissable à sa couleur sombre obtenue grâce à l'ajout de tiges de sorgho ou de potasse lors de la cuisson du riz et des haricots.",
    "accompagnementsIdaux": "Huile de friture rouge (Wagasi), piment noir en poudre, œuf bouilli, poisson frit, ou spaghettis en garniture.",
    "image": ImPlat4
  },
  {
    "id": "djenkoume_togolais",
    "nom": "Djinkoumé (Djenkoume)",
    "catégorie": "Plat Principal",
    "description": "Une pâte de maïs rouge savoureuse cuite directement dans un bouillon de tomate épicé et de concentré de viande.",
    "histoire": "Plat ancestral du peuple Éwé du Sud-Togo, le Djinkoumé se distingue des autres pâtes car la farine de maïs n'est pas cuite à l'eau claire, mais directement infusée dans le jus de cuisson d'un poulet frit bien assaisonné d'ail, d'oignon et de gingembre. C'est un plat de célébration riche en saveurs.",
    "accompagnementsIdaux": "Poulet local ('poulet bicyclette') frit ou braisé et piment frais.",
    "image": ImPlat5
  },
  {
    "id": "gboma_dessi",
    "nom": "Gboma Dessi",
    "catégorie": "Sauce",
    "description": "Une sauce riche et onctueuse à base de feuilles vertes flétries, mijotée avec une grande variété de viandes et de poissons fumés.",
    "histoire": "Le mot 'Dessi' signifie sauce en Éwé, et le 'Gboma' fait référence à une variété d'épinards locaux légèrement amers. Cette sauce est le symbole de l'hospitalité togolaise : plus elle contient de variétés de protéines (crabe, peau de bœuf séchée, crevettes, poisson fumé), plus l'invité est honoré.",
    "accompagnementsIdaux": "Idéal avec de la pâte de maïs blanche (Akoumé) ou du riz blanc.",
    "image": ImPlat6
  },
  {
    "id": "adzeme_togolais",
    "nom": "Adèmè (Adémé Dessi)",
    "catégorie": "Sauce",
    "description": "Une sauce verte gluante et nutritive faite à base de feuilles de corète, très prisée pour sa texture unique.",
    "histoire": "L'Adèmè est l'une des sauces les plus emblématiques du littoral togolais. La texture gluante (similaire au gombo) est obtenue en faisant bouillir les feuilles de corète avec une pincée de potasse. C'est un plat réconfortant réputé pour ses vertus digestives et sa richesse en fer.",
    "accompagnementsIdaux": "Se consomme exclusivement avec l'Ewassa ou l'Akoumé (pâte de maïs).",
    "image": ImPlat7
  },
  {
    "id": "koliko_togolais",
    "nom": "Koliko",
    "catégorie": "Street Food",
    "description": "Frites d'igname croustillantes à l'extérieur et fondantes à l'intérieur, coupées en dés ou en bâtonnets.",
    "histoire": "Le Koliko est le snack nocturne incontournable des rues de Lomé, Kara et d'Atakpamé. Les vendeuses s'installent au coin des rues dès le coucher du soleil avec de grands chaudrons d'huile bouillante. C'est le repas rapide, chaud et économique préféré des étudiants et des travailleurs du soir.",
    "accompagnementsIdaux": "Sauce pimentée à la tomate, piment en poudre (Kankan) ou accompagnées de morceaux de dinde ou poulet frit.",
    "image": ImPlat8
  },
  {
    "id": "vebe_togolais",
    "nom": "Vèbè (Sauce d'Arachide)",
    "catégorie": "Sauce",
    "description": "Une sauce onctueuse et veloutée à la pâte d'arachide grillée, relevée aux épices locales.",
    "histoire": "La sauce d'arachide traverse toutes les régions du Togo, du Sud au Nord (où l'arachide est largement cultivée). Elle démontre la capacité du patrimoine culinaire togolais à lier des saveurs douces et grasses avec des piments forts pour créer un équilibre parfait.",
    "accompagnementsIdaux": "Riz blanc, fufu d'igname, ou pâte de maïs.",
    "image": ImPlat9
  }
];

export default platsTogolais;