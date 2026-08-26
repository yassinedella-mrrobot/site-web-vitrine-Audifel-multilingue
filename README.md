# AUDIFEL — Centre de Correction Auditive 🦻

Site web moderne et vitrine pour **AUDIFEL**, centre spécialisé en dépistage auditif et appareillage sur mesure.

## 🚀 Caractéristiques & Fonctionnalités

- **Multilingue (3 langues) :** Français 🇫🇷, Anglais 🇬🇧, Arabe 🇩🇿 (avec support complet du sens de lecture **RTL**).
- **Design Responsive :** Optimisé pour Mobile, Tablette et Desktop.
- **Performant & Léger :** Vanilla HTML5, CSS3 modulaire et JavaScript moderne (zéro dépendance lourde).
- **Déploiement Automatisé :** Pipeline GitHub Pages prêt à l'emploi via GitHub Actions.

## 📁 Architecture du Dépôt

```
audifel/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Déploiement automatique GitHub Pages
├── css/
│   └── style.css               # Feuilles de style et variables CSS
├── js/
│   └── main.js                 # Logique JS, sélecteur et traductions multilingues
├── images/
│   ├── audifel-logo.svg        # Logo AUDIFEL
│   ├── favicon.svg             # Favicon
│   └── README.md               # Guide des ressources visuelles
├── index.html                  # Structure principale du site
├── .gitignore                  # Fichiers à ignorer par Git
└── README.md                   # Documentation du projet
```

## 🛠️ Commandes Git pour publier sur GitHub

```bash
# 1. Initialiser le dépôt local
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Effectuer le premier commit
git commit -m "feat: initial commit - site vitrine Audifel multilingue"

# 4. Renommer la branche en main
git branch -M main

# 5. Lier votre dépôt distant GitHub
git remote add origin https://github.com/<VOTRE-UTILISATEUR>/<NOM-DU-DEPOT>.git

# 6. Pousser les fichiers vers GitHub
git push -u origin main
```

## 🌐 Activer GitHub Pages

1. Rendez-vous sur votre dépôt GitHub : **Settings** > **Pages**.
2. Dans **Build and deployment** > **Source**, sélectionnez **GitHub Actions** (ou la branche `main` / `root`).
3. Votre site sera instantanément accessible en ligne !

---
Développé avec soin pour **AUDIFEL**.