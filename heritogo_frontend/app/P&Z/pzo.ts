import Im1 from '@/public/parks/tatapark.jpg';
import Im2 from '@/public/parks/amoukadi.png';
import Im3 from '@/public/parks/aqualand.jpg';
import Im4 from '@/public/parks/nyumba.jpg';
import Im5 from '@/public/parks/filoparc.jpg';
import Im6 from '@/public/parks/funny park.jpg';
import Im7 from '@/public/parks/ludiparc.jpg';
import Im8 from '@/public/parks/olodge.jpg';
import Im9 from '@/public/parks/temedja.jpg';
import Im10 from '@/public/parks/faunacultura.jpg';
import Im11 from '@/public/parks/kodegbe.jpg';
import Im12 from '@/public/parks/o2zoo.png';
import Im13 from '@/public/parks/aleapark.jpg';
import Im14 from '@/public/parks/falzao.jpg';
import Im15 from '@/public/parks/keran.jpg';
import Im16 from '@/public/parks/fosseaulion.jpg';

import { StaticImageData } from 'next/image';

export interface Parc {
  id: string;
  nom: string;
  description: string;
  lng: number;
  lat: number;
  numero: string;
  tarif: string;      // Nouveau champ
  image: StaticImageData;
}

export const parcs: Parc[] = [
  {
    id: "africa_park_tata_park",
    nom: "Africa Park (Tata Park)",
    description: "Le plus grand parc d'attractions du Togo. On y trouve des manèges motorisés et gonflables, des gyropodes, une salle de cinéma 3D, un restaurant et un bar.",
    lng: 1.222186,
    lat: 6.136629,
    numero: "+228 90 41 12 12",
    tarif: "Entrée : 1000-2000 FCFA, manèges en supplément (200-500 FCFA)",
    image: Im1
  },
  {
    id: "amoukadi_paradis",
    nom: "Amoukadi Paradis",
    description: "Un complexe de loisirs à Adétikopé, offrant des services variés comme des piscines.",
    lng: 1.266667,
    lat: 6.216667,
    numero: "+228 98 38 23 73 / +228 70 45 77 58",
    tarif: "Piscine : 1500 FCFA / Adulte, 1000 FCFA / Enfant",
    image: Im2
  },
  {
    id: "espace_aere_aqualand",
    nom: "Espace Aéré Aqualand",
    description: "Un cadre naturel et magnifique, à la fois restaurant et parc de jeux. Propose des attractions pour petits et grands (toboggan, piscine gonflable, balançoires, baby-foot).",
    lng: 1.21227,
    lat: 6.13748,
    numero: "+228 98 84 ...",
    tarif: "Entrée gratuite, consommations à la carte",
    image: Im3
  },
  {
    id: "espace_loisirs_nyumba",
    nom: "Espace Loisirs Nyumba",
    description: "Un espace de loisirs pour tous les âges, proposant manèges, jeux, animations et services de restauration, dans un cadre sécurisé et divertissant.",
    lng: 1.3252103,
    lat: 6.1697653,
    numero: "+228 90 21 54 21",
    tarif: "Entrée : 500 FCFA / personne, manèges payants",
    image: Im4
  },
  {
    id: "fil_o_parc",
    nom: "Fil O Parc",
    description: "Un complexe de loisirs et de détente comprenant une aire de jeux, une piscine et un restaurant.",
    lng: 1.21227,
    lat: 6.13748,
    numero: "+228 22 25 08 36 / +228 22 35 18 28",
    tarif: "Piscine : 2000 FCFA / Adulte, 1500 FCFA / Enfant",
    image: Im5
  },
  {
    id: "funny_park",
    nom: "Funny Park",
    description: "Un parc d'attractions proposant une variété d'attractions, y compris une salle de jeux climatisée, un restaurant extérieur, un parc aquatique et un club de poney.",
    lng: 1.18585,
    lat: 6.21389,
    numero: "+228 92 11 01 10",
    tarif: "Parc aquatique : 2000 FCFA / personne, manèges : 300-500 FCFA",
    image: Im6
  },
  {
    id: "ludi_park",
    nom: "Ludi Park",
    description: "Un parc d'attractions avec un parcours de mini-golf de 12 trous et une aire de jeux.",
    lng: 1.21227,
    lat: 6.13748,
    numero: "+228 91 53 66 93 / +228 92 74 10 68",
    tarif: "Entrée : 1000 FCFA, mini-golf : 2000 FCFA supplémentaire",
    image: Im7
  },
  {
    id: "olodge",
    nom: "O'Lodge",
    description: "Un complexe hôtelier et un parc aquatique situé au bord du lac Togo. (Actuellement signalé comme définitivement fermé)",
    lng: 1.46314,
    lat: 6.2096,
    numero: "+228 90 10 94 94",
    tarif: "Fermé – Plus de tarifs disponibles",
    image: Im8
  },
  {
    id: "parc_zoologique_temedja",
    nom: "Parc Zoologique de Témédja (Zoo Tali N'na)",
    description: "Un parc animalier situé à Témédja, offrant l'opportunité de découvrir une variété d'animaux sauvages dans un environnement sécurisé et naturel.",
    lng: 1.04313,
    lat: 7.53055,
    numero: "+228 98 47 87 87 / +228 91 64 33 33",
    tarif: "Entrée : 2000 FCFA (Adulte), 1000 FCFA (Enfant)",
    image: Im9
  },
  {
    id: "zoo_fauna_cultura",
    nom: "Zoo Fauna Cultura",
    description: "Un mini-zoo privé et une ferme d'élevage. On peut y observer plus de 80 espèces animales.",
    lng: 1.16614,
    lat: 6.17316,
    numero: "+228 92 03 59 99",
    tarif: "Entrée : 2000 FCFA / personne, visite guidée incluse",
    image: Im10
  },
  {
    id: "parc_evou_kpodegbe",
    nom: "Parc Evou-Kpodegbe",
    description: "Un parc zoologique situé à proximité du Parc Zoo de Témédja.",
    lng: 1.04313,
    lat: 7.52946,
    numero: "+228 90 15 81 84",
    tarif: "Entrée : 1500 FCFA / personne",
    image: Im11
  },
  {
    id: "o2_zoo",
    nom: "O2 Zoo",
    description: "Un parc zoologique situé à proximité de l'université UCAO-UUT.",
    lng: 1.09892,
    lat: 6.23064,
    numero: "Non disponible",
    tarif: "Entrée gratuite (donations acceptées)",
    image: Im12
  },
  {
    id: "alea_park",
    nom: "Aléa Park",
    description: "Un complexe sportif et récréatif érigé sur une superficie de 7 000 m², proposant une large gamme d'activités.",
    lng: 1.16614,
    lat: 6.17316,
    numero: "+228 92 66 77 77 / +228 93 45 30 30 / +228 98 05 70 70",
    tarif: "Formule journée : 5000 FCFA (accès à toutes les activités), forfaits réduits par activité",
    image: Im13
  },
  {
    id: "parc_national_fazao_malfakassa",
    nom: "Parc National Fazao-Malfakassa",
    description: "Le plus grand parc national du Togo, refuge pour environ 50 éléphants de savane, des buffles, des antilopes, des phacochères et parfois même des chimpanzés.",
    lng: 0.8064,
    lat: 8.7362,
    numero: "Non disponible",
    tarif: "Entrée : environ 5000-10000 FCFA selon nationalité (guide obligatoire)",
    image: Im14
  },
  {
    id: "parc_national_keran",
    nom: "Parc National de la Kéran",
    description: "Un parc national situé dans le nord du Togo, refuge pour de nombreuses espèces d'animaux, dont des éléphants et des antilopes.",
    lng: 0.63305,
    lat: 10.10698,
    numero: "Non disponible",
    tarif: "Entrée : 5000 FCFA (résidents), 10000 FCFA (non-résidents)",
    image: Im15
  },
  {
    id: "parc_national_fosse_aux_lions",
    nom: "Parc National de la Fosse aux Lions",
    description: "Le plus petit des trois parcs nationaux togolais, établi en 1954.",
    lng: 0.15907,
    lat: 10.7524,
    numero: "Non disponible",
    tarif: "Entrée : 3000 FCFA / personne",
    image: Im16
  }
];

export default parcs;