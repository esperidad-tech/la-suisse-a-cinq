const LINKS = {
  "first": "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
  "firstprice": "https://www.brienzamsee.swiss/erleben/erlebnis-guide/first",
  "taubenloch": "https://taubenloch.ch/fr/",
  "aare": "https://aareschlucht.ch/de/Info/informationen",
  "beatus": "https://shop.e-guma.ch/beatushoehlen/de/tickets/admission-st-beatus-caves-incl-cave-museum-3126879",
  "spiez": "https://www.dieschweizerschloesser.ch/en/our-castles/spiez-castle",
  "gibloux": "https://fribourg.ch/fr/fribourg/architecture-et-monuments/tour-du-gibloux/",
  "giblouxshort": "https://www.loisirs.ch/activite/tour-du-gibloux-une-vue-a-tomber-sur-la-gruyere/",
  "pissevache": "https://www.valais.ch/fr/explorer/activites/sites-naturels/sites-geologiques/cascade-de-la-pissevache",
  "camp": "https://manorfarm.ch/fr",
  "campprice": "https://www.manorfarm.ch/download_file/view/223/202",
  "zfe": "https://zfe.grandlyon.com/particulier/",
  "card": "https://www.habkern.ch/dmxDaten/tourismus/gaesteangebote/verguenstigungen-gaestekarte-interlaken-2026.pdf",
  "fuel": "https://www.prix-carburants.gouv.fr/station/64360000",
  "fx": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-chf.en.html",
  "trient": "https://www.valleedutrient.ch/fr/gorges-du-trient-fp256",
  "leonard": "https://lac-souterrain.com/horaires-tarifs/",
  "leonardfaq": "https://lac-souterrain.com/faq/",
  "oeschinen": "https://www.oeschinensee.ch/fr/rodelbahn/",
  "oeschinenprices": "https://www.oeschinensee.ch/fr/tarife-fahrplan/",
  "oeschinenfaq": "https://www.oeschinensee.ch/fr/faq/",
  "oeschinenlive": "https://www.oeschinensee.ch/fr/live/",
  "bls": "https://www.bls.ch/fr/fahren/autoverlad/kandersteg-goppenstein",
  "blsprices": "https://www.bls.ch/fr/fahren/autoverlad/preise-und-tickets",
  "glacier": "https://www.glacier3000.ch/en/access-and-hours/",
  "glacierfaq": "https://www.glacier3000.ch/en/faq/"
};
const COST_LABELS = [
  "Logement",
  "Gazole estimé",
  "Péages français estimés",
  "Vignette suisse",
  "Stationnement / transferts",
  "Courses et repas",
  "Visites et télécabine"
];
const DAYS = [
  {
    "id": 1,
    "date": "Samedi 24 octobre",
    "short": "Sam. 24",
    "nav": "Cap sur le Jura",
    "title": "En route vers la Suisse",
    "route": "Monein · Pontarlier",
    "color": "#536eb8",
    "hero": "pontarlier",
    "heroLabel": "Pontarlier, porte Saint-Pierre",
    "intro": "Une grande journée de route, puis une vraie nuit de repos avant les premières visites.",
    "drive": "10–11 h",
    "km": "≈ 1 000 km",
    "costs": [
      110,
      195,
      95,
      0,
      0,
      40,
      0
    ],
    "schedule": [
      [
        "06:00",
        "Départ de Monein",
        "Petit-déjeuner et pique-nique préparés. Deux conducteurs, relais et pause environ toutes les deux heures."
      ],
      [
        "Midi",
        "Pause déjeuner",
        "Prendre le temps de marcher et de laisser les enfants se dégourdir."
      ],
      [
        "18–19 h",
        "Arrivée à Pontarlier",
        "Installation, dîner simple et repos. Aucune visite à caser ce soir."
      ]
    ],
    "warning": [
      "Autour de Lyon",
      "Passer par le contournement extérieur A46 / A432. Éviter M6, M7 et Laurent-Bonnevay avec le diesel 2010. Recalculer le trajet avant le départ."
    ],
    "lodging": {
      "name": "Appartement saint pierre",
      "city": "Pontarlier · 24 au 25",
      "price": "110 €",
      "desc": "96 m², deux chambres, cuisine, deux lits doubles et un canapé-lit. Note relevée : 8,4/10.",
      "caveat": "Offre sur demande : réponse de l’hôte sous 24 h. Non remboursable. Option annulable relevée à 122 €. Parking à vérifier.",
      "url": "https://www.booking.com/hotel/fr/le-saint-pierre-pontarlier1.fr.html?checkin=2026-10-24&checkout=2026-10-25&group_adults=2&group_children=3&age=11&age=8&age=8&no_rooms=1&selected_currency=EUR"
    },
    "notes": "Les durées de conduite excluent les pauses. Le tracé passe par l’axe Toulouse–Montpellier, le contournement de Lyon et le Jura. Préparer les courses avant le dimanche.",
    "sources": [
      [
        "Règles de circulation à Lyon",
        "zfe"
      ]
    ],
    "gallery": [],
    "stops": [
      [
        "Monein",
        43.32,
        -0.579
      ],
      [
        "Pontarlier",
        46.903,
        6.355
      ]
    ]
  },
  {
    "id": 2,
    "date": "Dimanche 25 octobre",
    "short": "Dim. 25",
    "nav": "Le grand panorama",
    "title": "Au-dessus des nuages",
    "route": "Pontarlier · Taubenloch · First · Interlaken",
    "color": "#12796e",
    "hero": "first",
    "heroLabel": "First Cliff Walk, Grindelwald",
    "intro": "Une gorge au réveil, puis la passerelle de First face aux sommets. Le grand moment du voyage.",
    "drive": "3 h 30–4 h",
    "km": "≈ 230 km",
    "costs": [
      190.5,
      45,
      0,
      44,
      20,
      45,
      233
    ],
    "schedule": [
      [
        "07:30",
        "Départ de Pontarlier",
        "Petit-déjeuner pris et pique-nique prêt."
      ],
      [
        "09:00",
        "Gorges du Taubenloch",
        "Départ à Frinvillier, retour par le même chemin. Environ 4 km, jusqu’à 10 h 30. Accès gratuit."
      ],
      [
        "12:30",
        "Télécabine de First",
        "Viser le stationnement à Grindelwald vers midi. Montée en environ 25 minutes."
      ],
      [
        "13–15:30",
        "First Cliff Walk",
        "Passerelle, panorama, pique-nique et courte promenade. Pas de grande randonnée ajoutée par défaut."
      ],
      [
        "16:00",
        "Descente puis Interlaken",
        "Garder une heure de marge avant la dernière descente publiée, à 17 h. Installation vers 17 h."
      ]
    ],
    "warning": [
      "First : uniquement le dimanche 25",
      "Révision annoncée du 26 octobre au 27 novembre. En cas de retard, supprimer Taubenloch pour préserver First. En cas de mauvais temps, rester dans la vallée : environ 233 € de billets économisés."
    ],
    "lodging": {
      "name": "New West Station 7",
      "city": "Interlaken · nuits du 25 et du 26",
      "price": "381 € / 2 nuits",
      "desc": "87 m², deux chambres, cuisine et parking privé gratuit. Arrivée entre 16 h et 21 h.",
      "caveat": "Compromis important : note 6,1/10, propreté 6,6. Non remboursable. 190,50 € affectés à chaque jour ; offre annulable pour les deux nuits : 422 €.",
      "url": "https://www.booking.com/hotel/ch/new-west-station-7.fr.html?checkin=2026-10-25&checkout=2026-10-27&group_adults=2&group_children=3&age=11&age=8&age=8&no_rooms=1&selected_currency=EUR"
    },
    "notes": "First : 2 adultes × 76 CHF + 3 enfants × 20 CHF = 212 CHF, soit environ 233 €. Cliff Walk inclus, activités supplémentaires exclues. Passage à l’heure d’hiver ce dimanche. Pour ajouter le Bachalpsee, enlever Taubenloch et vérifier neige et glace.",
    "sources": [
      [
        "Horaires First",
        "first"
      ],
      [
        "Tarifs 2026",
        "firstprice"
      ],
      [
        "Taubenloch",
        "taubenloch"
      ]
    ],
    "gallery": [
      [
        "taubenloch",
        "Les gorges du Taubenloch"
      ]
    ],
    "stops": [
      [
        "Pontarlier",
        46.903,
        6.355
      ],
      [
        "Taubenloch · Frinvillier",
        47.168,
        7.252
      ],
      [
        "Grindelwald · télécabine",
        46.625,
        8.041
      ],
      [
        "First Cliff Walk",
        46.661,
        8.055
      ],
      [
        "Interlaken · 2 nuits",
        46.681,
        7.858
      ]
    ]
  },
  {
    "id": 3,
    "date": "Lundi 26 octobre",
    "short": "Lun. 26",
    "nav": "Gorges, lacs & Spiez",
    "title": "L’eau dans tous ses états",
    "route": "Interlaken · Aar · Brienz · Saint-Beatus · Spiez",
    "color": "#237bba",
    "hero": "aare",
    "heroLabel": "Les gorges de l’Aar",
    "intro": "Les gorges de l’Aar, Brienz, Saint-Beatus et une courte pause dans la baie de Spiez. Spiez passe au lundi pour libérer le mardi des deux envies de Siham.",
    "drive": "2 h 15–2 h 30",
    "km": "≈ 125–140 km",
    "costs": [
      190.5,
      26,
      0,
      0,
      15,
      45,
      139
    ],
    "schedule": [
      [
        "08:30",
        "Départ d’Interlaken",
        "Rejoindre l’entrée ouest de l’Aar. Pique-nique prêt ; parking gratuit."
      ],
      [
        "09:15–11:00",
        "Gorges de l’Aar",
        "Environ 2,8 km aller-retour ; garder le temps de marcher tranquillement."
      ],
      [
        "11:30–12:30",
        "Pique-nique à Brienz",
        "Une vraie pause au bord du lac avant de reprendre la route."
      ],
      [
        "13:15–15:15",
        "Grottes de Saint-Beatus",
        "Environ une heure dans la grotte, plus l’approche et les pauses."
      ],
      [
        "16:00–16:45",
        "Baie et château de Spiez",
        "Promenade dans la baie et extérieurs du château, sans musée payant. Étape déplacée du mardi."
      ],
      [
        "17:15",
        "Retour à Interlaken",
        "Deuxième nuit au même endroit. Dîner maison et repos."
      ]
    ],
    "warning": [
      "Selon la pluie",
      "Les gorges et grottes peuvent fermer en cas de fortes précipitations. Vérifier les avis d’ouverture le matin."
    ],
    "lodging": {
      "name": "New West Station 7",
      "city": "Interlaken · deuxième nuit",
      "price": "190,50 € affectés",
      "desc": "Le même appartement que la veille : pas de bagages à déplacer.",
      "caveat": "Cette somme est la moitié de l’offre à 381 € pour les deux nuits, pas un tarif vendu à la nuit.",
      "url": "https://www.booking.com/hotel/ch/new-west-station-7.fr.html?checkin=2026-10-25&checkout=2026-10-27&group_adults=2&group_children=3&age=11&age=8&age=8&no_rooms=1&selected_currency=EUR"
    },
    "notes": "Aar : 50 CHF ; Saint-Beatus : 76 CHF ; Spiez extérieur : gratuit. Environ 139 € de visites pour cinq. Carte d’hôte : réductions éventuelles non déduites. Journée assez remplie : en cas de retard ou de fatigue, raccourcir la pause à Spiez ou choisir la variante sans Saint-Beatus.",
    "option": [
      "Pour alléger la journée et le budget",
      "Remplacer la visite intérieure de Saint-Beatus par une pause au lac : environ 84 € de billets économisés. Spiez peut alors se faire plus tôt. Avec l’option camping, supprimer Spiez en fin de journée et arriver à Manor Farm vers 16 h pour monter de jour ; ne pas le reporter au mardi déjà rempli."
    ],
    "sources": [
      [
        "Gorges de l’Aar",
        "aare"
      ],
      [
        "Billets Saint-Beatus",
        "beatus"
      ],
      [
        "Carte d’hôte",
        "card"
      ],
      [
        "Camping Manor Farm",
        "camp"
      ],
      [
        "Château de Spiez",
        "spiez"
      ]
    ],
    "gallery": [
      [
        "beatus",
        "L’entrée de Saint-Beatus"
      ],
      [
        "spiez",
        "Spiez, désormais le lundi"
      ]
    ],
    "stops": [
      [
        "Interlaken",
        46.681,
        7.858
      ],
      [
        "Aar · entrée ouest",
        46.72,
        8.198
      ],
      [
        "Brienz",
        46.754,
        8.037
      ],
      [
        "Saint-Beatus",
        46.6846,
        7.7821
      ],
      [
        "Baie et château de Spiez",
        46.6894,
        7.6874
      ]
    ]
  },
  {
    "id": 4,
    "date": "Mardi 27 octobre",
    "short": "Mar. 27",
    "nav": "Les deux lacs de Siham",
    "title": "Un lac dans les Alpes, un lac sous la montagne",
    "route": "Interlaken · Oeschinensee · Lötschberg · Saint-Léonard · Thonon",
    "color": "#bf7923",
    "hero": "oeschinensee",
    "heroLabel": "Le lac d’Oeschinen, au-dessus de Kandersteg",
    "intro": "La luge d’Oeschinensee et son lac le matin, puis une balade en bateau sur le lac souterrain de Saint-Léonard. Le Partner traverse la montagne sur un train : une boucle par le Valais, sans ajouter de nuit.",
    "drive": "3 h 30–4 h",
    "km": "≈ 220–235 km",
    "costs": [
      110,
      45,
      0,
      0,
      48,
      45,
      221
    ],
    "schedule": [
      [
        "08:00",
        "Départ, bagages chargés",
        "Environ 50–60 min jusqu’à Kandersteg. Viser le parking avant 9 h 15."
      ],
      [
        "09:30",
        "Télécabine d’Oeschinensee",
        "Créneau de montée à réserver pour cinq, avec retour. Ne pas rejoindre le lac en voiture."
      ],
      [
        "10:00–10:40",
        "La luge, si la piste est ouverte",
        "Un tour pour Romain et chacun des trois enfants. Horaires français et allemands publiés : dès 10 h en automne ; piste sèche obligatoire."
      ],
      [
        "10:45–12:45",
        "Promenade et pique-nique au lac",
        "Environ 30 min à pied dans chaque sens depuis la station supérieure. Rester sur le chemin direct ouvert, sans boucle de crête. Revenir pour descendre vers 13 h."
      ],
      [
        "13:15–14:15",
        "Le Partner monte dans le train",
        "Rejoindre le chargement BLS de Kandersteg. Prévoir 45–60 min avec attente et embarquement, dont 15 min de traversée. Départs non réservables ; marge indicative."
      ],
      [
        "14:15–15:15",
        "Vers Saint-Léonard",
        "Compter 45–60 min depuis Goppenstein. Arrivée impérative 15 min avant le départ du bateau."
      ],
      [
        "15:30–16:15",
        "Lac souterrain de Saint-Léonard",
        "Visite guidée en bateau d’environ 30 min, plus les espaces de découverte. Créneau de 15 h 30 visé, disponibilité à confirmer : rien n’est réservé."
      ],
      [
        "16:50–17:10",
        "Pissevache, arrêt facultatif",
        "Courte pause au pied de la cascade uniquement si vous êtes à l’heure et s’il fait encore jour. Supprimer cet arrêt en cas de retard."
      ],
      [
        "18:30–19:00",
        "Arrivée à Thonon",
        "Environ 1 h 30 de route depuis Pissevache, via Saint-Gingolph et Évian. Confirmer une arrivée en soirée auprès du logement."
      ]
    ],
    "warning": [
      "Deux envies intégrées, une luge encore conditionnelle",
      "Oeschinensee est prévu le 27, mais la luge ferme si la piste est humide, enneigée ou gelée. Vérifier le statut avant d’acheter la télécabine. Les pages FR/DE annoncent 10 h ; une version anglaise affichait 13 h : confirmer l’horaire à 48 h. Glacier 3000 est fermé du 19 octobre au 6 novembre 2026."
    ],
    "lodging": {
      "name": "Appartement en centre ville",
      "city": "Thonon · 27 au 28",
      "price": "110 €",
      "desc": "54 m², deux chambres, cuisine, deux lits simples, un double et un canapé-lit. Note 7,9/10.",
      "caveat": "Tarif non remboursable. Option annulable relevée à 122 €. Parking à vérifier. Arrivée visée vers 18 h 30–19 h : modalités de remise des clés à confirmer.",
      "url": "https://www.booking.com/hotel/fr/appartement-en-centre-ville-thonon-les-bains.fr.html?checkin=2026-10-27&checkout=2026-10-28&group_adults=2&group_children=3&age=11&age=8&age=8&no_rooms=1&selected_currency=EUR"
    },
    "notes": "Visites : télécabine 2 × 36 + 3 × 18,50 = 127,50 CHF ; luge : enveloppe 4 × 7 = 28 CHF (24 CHF avant 13 h) ; Saint-Léonard : 2 × 12 + 3 × 7 = 45 CHF. Total 200,50 CHF ≈ 221 €. Transferts / parkings : BLS 28 CHF ≈ 31 € + 17 € de stationnements estimés = 48 €. La luge n’est pas prévue pour Siham dans ce calcul ; sa participation pendant la grossesse n’est pas validée. Pour la balade, adapter l’effort à son confort ; accès au lac souterrain par environ 50 marches. Le Gibloux est retiré de la boucle.",
    "sources": [
      [
        "Luge : ouverture & tarifs",
        "oeschinen"
      ],
      [
        "Télécabine : prix",
        "oeschinenprices"
      ],
      [
        "Oeschinensee : état du jour",
        "oeschinenlive"
      ],
      [
        "Lac souterrain : visite & prix",
        "leonard"
      ],
      [
        "BLS : fonctionnement",
        "bls"
      ],
      [
        "BLS : prix actuels",
        "blsprices"
      ],
      [
        "Glacier 3000 : fermeture",
        "glacier"
      ]
    ],
    "gallery": [
      [
        "oeschinen-luge",
        "La piste de luge d’Oeschinensee · photo d’archive"
      ],
      [
        "saint-leonard-bateau",
        "En bateau sur le lac souterrain de Saint-Léonard"
      ],
      [
        "saint-leonard",
        "Les reflets sous la montagne"
      ],
      [
        "loetschberg",
        "Le transport des voitures au Lötschberg"
      ],
      [
        "pissevache",
        "Pissevache, si l’horaire et la lumière le permettent"
      ]
    ],
    "stops": [
      [
        "Interlaken",
        46.681,
        7.858
      ],
      [
        "Oeschinensee · parking / télécabine",
        46.497463,
        7.68239
      ],
      [
        "Oeschinensee · luge",
        46.506,
        7.7045
      ],
      [
        "Lac d’Oeschinen · à pied",
        46.498,
        7.723
      ],
      [
        "Kandersteg · train voitures",
        46.494583,
        7.670219
      ],
      [
        "Goppenstein · sortie du train",
        46.363285,
        7.757526
      ],
      [
        "Lac souterrain de Saint-Léonard",
        46.256725,
        7.425818
      ],
      [
        "Pissevache · facultatif",
        46.143,
        7.03
      ],
      [
        "Thonon",
        46.374,
        6.48
      ]
    ],
    "montage": "photos/montages/jour-4-oeschinensee.png",
    "option": [
      "Si la luge n’ouvre qu’à 13 h",
      "Faire le lac d’abord, puis un seul tour dès 13 h et redescendre rapidement. Ne retenir cette variante qu’avec un bateau de Saint-Léonard à 16 h confirmé (arrivée 15 h 45) ; supprimer Pissevache. Si la météo ferme la luge, aucun tour ne peut être garanti pendant le séjour."
    ]
  },
  {
    "id": 5,
    "date": "Mercredi 28 octobre",
    "short": "Mer. 28",
    "nav": "Dernier matin au lac",
    "title": "Encore un peu de Léman",
    "route": "Thonon · Clermont-Ferrand",
    "color": "#aa5078",
    "hero": "thonon",
    "heroLabel": "Le port de Rives à Thonon, en automne",
    "intro": "Une promenade au bord de l’eau puis une étape à Clermont pour couper le retour en deux.",
    "drive": "≈ 4–5 h",
    "km": "≈ 375 km",
    "costs": [
      57,
      72,
      45,
      0,
      5,
      40,
      0
    ],
    "schedule": [
      [
        "09:00",
        "Promenade au bord du Léman",
        "Une dernière pause au lac si la météo est agréable, jusqu’à 10 h 30."
      ],
      [
        "11:00",
        "Départ pour Clermont-Ferrand",
        "Contournement extérieur de Lyon, pause repas et relais au volant."
      ],
      [
        "16–17 h",
        "Installation et soirée tranquille",
        "Courses, jeux et dîner à l’appartement."
      ]
    ],
    "warning": [
      "Trajet autour de Lyon",
      "Garder le contournement extérieur et éviter la zone interdite au diesel 2010. Les points de passage de la carte sont indicatifs : contrôler le guidage avant de partir."
    ],
    "lodging": {
      "name": "Bulle tropicale jungle",
      "city": "Clermont-Ferrand · 28 au 29",
      "price": "57 €",
      "desc": "48 m², cuisine, une chambre avec lit superposé et deux canapés-lits dans le séjour. Note 7,9/10.",
      "caveat": "Confort simple. Non remboursable. Option annulable relevée à 63 €. Parking à vérifier.",
      "url": "https://www.booking.com/hotel/fr/bulle-tropicale-jungle.fr.html?checkin=2026-10-28&checkout=2026-10-29&group_adults=2&group_children=3&age=11&age=8&age=8&no_rooms=1&selected_currency=EUR"
    },
    "notes": "Alternative logement repérée : Appartement T3 Clermont-Ferrand, 70 m², deux chambres, 82 € ; supplément de 25 € pour une configuration plus classique.",
    "option": [
      "Pour réduire les péages",
      "Départ à 8 h 30–9 h et suppression de la longue promenade du matin. Prévoir 6–7 h de conduite plus les pauses. Cette variante n’est pas le tracé coloré affiché."
    ],
    "sources": [
      [
        "Règles de circulation à Lyon",
        "zfe"
      ]
    ],
    "gallery": [],
    "stops": [
      [
        "Thonon",
        46.374,
        6.48
      ],
      [
        "Clermont-Ferrand",
        45.777,
        3.088
      ]
    ]
  },
  {
    "id": 6,
    "date": "Jeudi 29 octobre",
    "short": "Jeu. 29",
    "nav": "Retour au Béarn",
    "title": "La route des souvenirs",
    "route": "Clermont-Ferrand · Monein",
    "color": "#c85140",
    "hero": "monein",
    "heroLabel": "La place de Monein, retour au Béarn",
    "intro": "La dernière étape, avec un retour en fin d’après-midi par le trajet rapide.",
    "drive": "≈ 5 h 40–6 h",
    "km": "≈ 590 km",
    "costs": [
      0,
      113,
      50,
      0,
      5,
      35,
      0
    ],
    "schedule": [
      [
        "08:30",
        "Départ de Clermont",
        "Pique-nique et boissons à portée de main."
      ],
      [
        "Matin",
        "Route par A89 / A20",
        "Relais au volant et pauses régulières."
      ],
      [
        "Midi",
        "Déjeuner et vraie pause",
        "Garder le rythme des enfants pour cette dernière journée."
      ],
      [
        "16–17 h",
        "Retour à Monein",
        "Fin de la boucle via Toulouse et A64."
      ]
    ],
    "notes": "Aucune sixième nuit à prévoir. Le budget du jour comprend la route et les repas ; la réserve de 100 € reste commune à l’ensemble du voyage.",
    "option": [
      "Variante sans péage",
      "Relevé Google Maps du 9 octobre : 516 km / 7 h 52 via D1089, contre 619 km / 7 h 28 via A75. Avec les pauses, viser un retour vers 18 h 30. Variante à recalculer ; non représentée par le tracé du trajet rapide."
    ],
    "sources": [],
    "gallery": [],
    "stops": [
      [
        "Clermont-Ferrand",
        45.777,
        3.088
      ],
      [
        "Monein",
        43.32,
        -0.579
      ]
    ]
  }
];
const PHOTO_LABELS = {
  "first": "First Cliff Walk",
  "aare": "Gorges de l’Aar",
  "spiez": "Château de Spiez",
  "thonon": "Thonon-les-Bains",
  "taubenloch": "Taubenloch",
  "beatus": "Saint-Beatus",
  "gibloux": "Tour du Gibloux",
  "pontarlier": "Pontarlier",
  "pissevache": "Pissevache",
  "saint-leonard": "Lac souterrain de Saint-Léonard",
  "saint-leonard-bateau": "Saint-Léonard en bateau",
  "oeschinensee": "Lac d’Oeschinen",
  "oeschinen-luge": "Luge d’Oeschinensee",
  "loetschberg": "Train transportant les voitures au Lötschberg"
};
