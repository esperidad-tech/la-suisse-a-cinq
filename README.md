# La Suisse à cinq

Carnet de voyage interactif du 24 au 29 octobre 2026.

Ouvrir `index.html` pour la carte : six couleurs, six journées, photos et budget dans un panneau à côté. `guide.html` reprend toutes les informations du carnet PDF et les huit points à calculer ou confirmer.

## Utilisation

- Une connexion internet est nécessaire au fond de carte et au chargement de Leaflet et des polices. Les photos des destinations et les montages sont inclus dans le dossier.
- Le fond de carte utilise swisstopo pour les visites en Suisse et IGN / Géoplateforme pour la vue du circuit en France. Le changement est automatique. Si swisstopo est indisponible, le site passe sur IGN. Aucun compte ni clé n’est nécessaire. Le serveur public de tuiles OpenStreetMap, qui affichait les erreurs « Access blocked », n’est plus utilisé.
- Les photos originales de famille sont incluses dans le dossier `photos` ; les fichiers sources n’ont pas été modifiés. Les cinq portraits détourés sont dans `photos/portraits`, les six montages quotidiens et celui des préparatifs dans `photos/montages`. Les scènes sont signalées comme imaginées.
- Budget de travail : 2 064 € de dépenses réparties sur six jours + 100 € de réserve = 2 164 €, soit 1 082 € par adulte.
- Prix et horaires relevés le 9 octobre 2026. Aucun logement ni billet réservé.
- Les tracés routiers servent à visualiser le circuit. Recalculer le guidage et les restrictions au départ.

## Publication sur GitHub Pages

Placer tous ces fichiers et le dossier `photos` à la racine d’un dépôt dédié. Dans **Settings → Pages**, choisir **Deploy from a branch**, puis **main / (root)** et **Save**.

Le site GitHub Pages et ses photos seront publics. La directive `noindex` demande aux moteurs de ne pas l’indexer ; elle ne constitue pas un contrôle d’accès.

## La version illustrée

- `album.html` présente les six montages personnalisés, agrandissables au clic.
- `guide.html#envies` présente 19 photos : 7 lieux sélectionnés en vert, 12 non sélectionnés en rouge. Les filtres affichent chaque groupe.
- `guide.html#conseils` contient les préparatifs en images.
- `creation-images.json` conserve les consignes finales utilisées avec l’outil intégré de création d’images.
- Budgets, estimations et contenu du carnet conservés.

## Sources et droits

Les liens vers les sites officiels, les hébergements et les sources du budget figurent dans le carnet. Fonds de carte © swisstopo et © IGN / Géoplateforme ; tracés © contributeurs OpenStreetMap, calculés avec OSRM ; interface Leaflet 1.9.4. Sources : https://docs.geo.admin.ch/visualize-data/xyz.html et https://cartes.gouv.fr/aide/fr/partenaires/ign/representations-cartographiques-souveraines/plan-ign/plan-ign-web/ . Conditions swisstopo : https://www.geo.admin.ch/en/general-terms-of-use-fsdi ; Plan IGN sous licence ouverte. Les photographies Wikimedia sont créditées dans chaque fiche avec leur licence et leur page source. Les photographies personnelles restent la propriété de leurs auteurs et ne sont pas placées sous une licence de réutilisation.
