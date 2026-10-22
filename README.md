# Mon Vieux Grimoire — front

Front React du site de notation de livres **Mon Vieux Grimoire**
(parcours Développeur Web — OpenClassrooms).

> **Démo en ligne : https://oc-projet6-mon-vieux-grimoire-front-kappa.vercel.app**
>
> Compte de test : `lecteur@grimoire.test` / `Grimoire1`
>
> La démo revient à son état de départ toutes les heures : les livres, notes et comptes
> ajoutés par les visiteurs sont supprimés.

## Ce qui vient de moi, et ce qui ne vient pas de moi

**Ce front a été fourni par OpenClassrooms**
([dépôt d'origine](https://github.com/OpenClassrooms-Student-Center/P7-Dev-Web-livres)).
Le projet consistait à écrire **l'API** :
[OC-Projet6-Mon-Vieux-Grimoire](https://github.com/grdRaphael/OC-Projet6-Mon-Vieux-Grimoire)
(Node.js, Express 5, MongoDB, JWT, Sharp).

L'historique d'OpenClassrooms est conservé. Mes modifications sont dans les derniers
commits :

| Commit | Modification |
|---|---|
| *Restyle the site to match the mockup* | Habillage conforme à la maquette : polices, étoiles de notation, logo SVG, pied de page, accueil, `lang="fr"` |
| *Submit the sign-in form with the Enter key* | La connexion s'envoie aussi avec la touche Entrée (`<form>` + `onSubmit`) |
| *Read the API address from an environment variable* | L'adresse de l'API vient de `REACT_APP_API_URL`, avec `http://localhost:4000` par défaut |

## Lancer le projet en local

Il faut que l'API tourne sur le port 4000 (voir son README).

```bash
git clone https://github.com/grdRaphael/OC-Projet6-Mon-Vieux-Grimoire-Front.git
cd OC-Projet6-Mon-Vieux-Grimoire-Front
npm install
npm start        # http://localhost:3000
```

Pour utiliser une autre API, définir `REACT_APP_API_URL` (voir `.env.example`). La valeur
est écrite dans le JavaScript **au moment de la construction** : il faut relancer
`npm start` ou reconstruire le site après l'avoir changée.

## Mise en ligne sur Vercel

Deux variables d'environnement dans le projet Vercel :

| Variable | Valeur | Pourquoi |
|---|---|---|
| `REACT_APP_API_URL` | `https://grd-raphael.alwaysdata.net/grimoire` | L'adresse de l'API en ligne |
| `CI` | `false` | Vercel règle `CI=true`, et Create React App traite alors chaque avertissement ESLint comme une erreur. Le code d'origine en contient (`console.log`, `alert`) |

Les vraies erreurs bloquent toujours la construction. Le rechargement direct d'une page
comme `/livre/:id` fonctionne sans configuration : Vercel reconnaît Create React App.

## Stack technique

React 18 · Create React App · React Router 6 · react-hook-form · Axios

## Pistes d'amélioration

- Remplacer les `alert` et `confirm` par des messages intégrés à la page, et retirer les
  `console.log`. La construction n'aurait alors plus besoin de `CI=false`.
- Afficher un état de chargement pendant l'envoi d'une couverture : en ligne, une
  photo de téléphone met 3 à 4 secondes à être envoyée et traitée.
