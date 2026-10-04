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

- Création des types Tweet et TweetImage.
- Création d'un tableau contenant 10 tweets.
- Création de TweetPreview pour afficher les informations d'un tweet.
- Création de TweetsList pour afficher tous les tweets avec .map().
- Affichage du nom de l'auteur, du pseudo, de la date et du contenu.
- Affichage des dates au format français.
- Gestion des tweets avec ou sans image.
- Intégration des composants dans App.tsx.


### TD 01 - Bonus réalisés

-Ajout d'un compteur affichant le nombre total de tweets du fil.

Tri des tweets du plus récent au plus ancien, sans modifier le tableau d'origine.

Création d'un composant Avatar réutilisable qui affiche les initiales de l'auteur dans un cercle.

### TD 01 - Élements non réalisés

- Aucun élément obligatoire non réalisé.

### TD 01 - Difficultés rencontrées + Solutions appliquées

Au début, j'avais surtout du mal à comprendre comment les données passaient de App vers TweetsList, puis vers TweetPreview. J'ai repris le fonctionnement des props avec des exemples pour mieux comprendre ce que chaque composant reçoit.

J'ai aussi eu quelques difficultés avec la syntaxe TypeScript, notamment pour déclarer les types des props et utiliser .map().

Pour les images, j'ai utilisé un affichage conditionnel afin de ne pas essayer d'afficher une image lorsqu'un tweet n'en possède pas.


### TD 01 - Déclaration d'usage de l'IA générative

J'ai utilisé ChatGPT pour m'aider à comprendre certaines notions, notamment les props, le typage TypeScript et l'utilisation de .map().

L'IA m'a également donné des exemples de code et m'a aidé à corriger certaines erreurs pendant le TD.

## TD 02

### TD 02 - Éléments réalisés

- Installation et utilisation de React Router.
- Mise en place des routes avec BrowserRouter, Routes et Route.
- Utilisation de Outlet dans App pour garder une partie commune entre les pages.
- Création de la page principale TweetsMasterPage.
- Création de TweetDetailsPage pour afficher un tweet et ses réponses.
- Ajout de liens avec Link pour accéder aux discussions.
- Ajout de parentId pour relier une réponse à son tweet parent.
- Filtrage du fil principal pour ne pas afficher directement les réponses.
- Utilisation de useParams pour récupérer l'identifiant depuis l'URL.
- Utilisation de .find() et .filter() pour retrouver un tweet et ses réponses.
- Ajout de linkToDetail pour éviter qu'un tweet renvoie vers sa propre page.
- Création de NotFoundPage pour les URL inconnues.

### TD 02 - Bonus réalisés

Création d'une page /a-propos présentant rapidement l'application XYZ.

Ajout de deux liens dans le header pour naviguer entre l'accueil et la page À propos.

Ajout d'un fil d'Ariane sur la page de détail d'un tweet, permettant de revenir facilement à l'accueil.

### TD 02 - Éléments non réalisés

- Aucun élément obligatoire non réalisé.

### TD 02 - Difficultés rencontrées + Solutions appliquées

J'ai eu du mal au début avec React Router, surtout pour comprendre la différence entre Route, Link et Outlet. J'ai repris le trajet depuis l'URL jusqu'à la page affichée pour mieux comprendre leur rôle.

J'ai également confondu id et parentId. J'ai compris que id sert à identifier un tweet, tandis que parentId permet de savoir à quel tweet une réponse appartient.

Une autre difficulté concernait .find() et .filter(). J'ai utilisé .find() pour récupérer le tweet demandé et .filter() pour récupérer toutes ses réponses.

Enfin, j'ai dû revoir l'affichage conditionnel, notamment avec && et l'opérateur ternaire.

### TD 02 - Déclaration d'usage de l'IA générative

J'ai utilisé ChatGPT pour avoir des explications sur React Router, useParams, Outlet et le fonctionnement des pages.

L'IA m'a aussi proposé des exemples de code et aidé à identifier certaines erreurs. J'ai avancé progressivement en testant les différentes fonctionnalités dans le navigateur.

## TD 03

### TD 03 - Éléments réalisés

- Ajout de likes et likedByMe au type Tweet et aux données initiales.
- Déplacement de l'état des tweets dans App avec useState.
- Création de TweetsContext pour partager les données entre les pages.
- Création d'un formulaire contrôlé TweetForm.
- Limitation du contenu à 280 caractères avec affichage des caractères restants.
- Désactivation du bouton Publier lorsque le contenu est vide ou invalide.
- Création de addTweet pour ajouter un nouveau tweet en haut du fil.
- Réinitialisation du formulaire après la publication.
- Création de toggleLike pour aimer ou retirer un J'aime.
- Transmission de cette fonction entre les composants avec les props.
- Synchronisation des likes entre la page principale et les discussions.
- Affichage du total des likes des tweets du fil principal.
- Création du hook useDocumentTitle avec useEffect pour changer le titre de l'onglet selon la page.
- Personnalisation de l'interface avec les couleurs fournies dans le TD.
- Travail sur le logo et le favicon de XYZ.

### TD 03 - Bonus réalisés

- Aucun bonus facultatif réalisé.

### TD 03 - Éléments non réalisés

- Aucun élément obligatoire restant identifié.

### TD 03 - Difficultés rencontrées + Solutions appliquées

Ce TD a été celui où j'ai rencontré le plus de difficultés, notamment avec la gestion des états dans React.

Au départ, je ne comprenais pas vraiment pourquoi il fallait mettre les tweets dans App ni comment useContext permettait de les partager entre plusieurs pages. J'ai repris ces notions avec des exemples plus simples avant de les appliquer au projet.

La partie la plus compliquée pour moi a été toggleLike. J'avais du mal à comprendre comment parcourir les tweets avec .map(), retrouver le bon tweet et modifier uniquement ses likes sans toucher directement à l'objet d'origine. J'ai donc décomposé le problème en plusieurs étapes pour comprendre la logique.

J'ai également rencontré des erreurs TypeScript en transmettant onToggleLike entre les composants. J'ai corrigé les types et ajouté les props manquantes.

Enfin, j'ai dû corriger quelques erreurs dans les noms des fichiers et dans les imports. Une erreur de compilation venait aussi d'un caractère ajouté accidentellement dans NotFoundPage.tsx.

Après les corrections, j'ai relancé les trois commandes de vérification et elles se sont exécutées sans erreur.

### TD 03 - Déclaration d'usage de l'IA générative


J'ai utilisé ChatGPT (OpenAI) pendant ce TD, principalement pour m'expliquer les notions que je ne comprenais pas et m'aider à avancer lorsque j'étais bloqué.

L'IA m'a notamment aidé sur useState, useContext, useEffect, les callbacks, .map() et le principe d'immutabilité dans React.

Elle m'a aussi proposé plusieurs extraits de code, notamment pour la gestion des likes, ainsi que des modifications CSS pour l'apparence de l'application.

J'ai intégré les propositions dans mon projet, effectué les corrections nécessaires et testé le résultat avec les commandes demandées dans le TD.


### Vérifications finales

Après les dernières corrections, j'ai exécuté les commandes suivantes :

bun run lint : 0 warning et 0 erreur.

bun tsc --noEmit : aucune erreur.

bun run build : compilation réussie.