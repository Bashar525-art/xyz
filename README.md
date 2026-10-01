# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.












# Projet individuel - XYZ

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : **Bashar**
- Nom : **ALKASER**
- Adresse mail universitaire : **bashar.alkaser2@etu.univ-lorraine.fr**
- Groupe de TD : **1**
- Adresse du dépôt GitHub privé : **https://github.com/Bashar525-art/xyz**

## TD 01

### TD 01 - Élements réalisés

- Création des types `Tweet` et `TweetImage`.
- Création d'un jeu de données contenant 10 tweets.
- Création du composant `TweetPreview` pour afficher un tweet.
- Création du composant `TweetsList` pour afficher la liste des tweets.
- Utilisation de `.map()` pour parcourir et afficher les tweets.
- Affichage du nom de l'auteur, du pseudo, du contenu et de la date.
- Gestion d'une image optionnelle dans un tweet.
- Affichage des dates au format français.
- Intégration de la liste des tweets dans l'application.


### TD 01 - Bonus réalisés

- Aucun bonus réalisé.

### TD 01 - Élements non réalisés

- Aucun élément obligatoire non réalisé.

### TD 01 - Difficultés rencontrées + Solutions appliquées

- Difficulté à comprendre le passage des données entre `App`, `TweetsList` et `TweetPreview`.
  Solution : utilisation des props pour transmettre le tableau de tweets puis chaque tweet individuellement.

- Difficulté avec le typage des props en TypeScript.
  Solution : création de types pour préciser les données attendues par les composants.

- Difficulté avec l'affichage conditionnel des images.
  Solution : vérification de la présence de l'image avant son affichage.


### TD 01 - Déclaration d'usage de l'IA générative

- L'IA a été utilisée pour expliquer certaines syntaxes, le fonctionnement des props, de `.map()` et du typage.
- Le code a été relu, testé et compris avant son intégration au projet

## TD 02

### TD 02 - Éléments réalisés

- Mise en place de la navigation avec React Router (`BrowserRouter`, `Routes` et `Route`).
- Création d'un layout commun avec `App` et `Outlet`.
- Création de la page principale `TweetsMasterPage`.
- Création de la page de détail `TweetDetailsPage`.
- Ajout de liens avec `Link` pour accéder à la discussion d'un tweet.
- Ajout de `parentId` pour représenter les réponses aux tweets.
- Filtrage de la page principale pour afficher uniquement les tweets principaux.
- Récupération de l'identifiant d'un tweet avec `useParams`.
- Recherche du tweet sélectionné et de ses réponses.
- Affichage des réponses avec `TweetsList`.
- Gestion du cas où un tweet n'existe pas.
- Ajout de la prop optionnelle `linkToDetail` dans `TweetPreview`.
- Création de `NotFoundPage` pour gérer les routes inconnues.

### TD 02 - Bonus réalisés

- Aucun bonus réalisé.

### TD 02 - Éléments non réalisés

- Aucun élément obligatoire non réalisé.

### TD 02 - Difficultés rencontrées + Solutions appliquées

- difficulté à comprendre le fonctionnement de `BrowserRouter`, `Routes`, `Route` et `Outlet` : reprise du cheminement de l'URL jusqu'au composant affiché.
- difficulté à comprendre la différence entre `id` et `parentId` : utilisation de `id` pour identifier un tweet et de `parentId` pour relier une réponse à son tweet parent.
- difficulté avec `.find()` et `.filter()` : `.find()` est utilisé pour récupérer un seul tweet et `.filter()` pour récupérer plusieurs réponses.
- difficulté avec l'affichage conditionnel : utilisation de `&&` et de l'opérateur ternaire `? :`.
- difficulté avec `linkToDetail` : ajout d'une valeur par défaut à `true` et passage à `false` sur la page de détail.

### TD 02 - Déclaration d'usage de l'IA générative

- L'IA a été utilisée pour expliquer les notions de routage, `useParams`, `Outlet`, les props, `.find()`, `.filter()` et l'affichage conditionnel.
- Les différentes étapes ont été réalisées progressivement, testées et vérifiées dans l'application.

## TD 03

### TD 03 - Élements réalisés

- **à compléter**

### TD 03 - Bonus réalisés

- **à compléter**

### TD 03 - Élements non réalisés

- **à compléter**

### TD 03 - Difficultés rencontrées + Solutions appliquées

- **à compléter**

### TD 03 - Déclaration d'usage de l'IA générative

- **à compléter**