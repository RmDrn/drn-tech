# DRN Tech — Instructions du projet

## Contexte

Site vitrine professionnel pour DRN Tech, entreprise française spécialisée dans le développement d'applications mobiles, SaaS, sites web, et solutions d'automatisation sur mesure pour les entreprises. Ce site a notamment pour but d'obtenir le statut Organization sur l'App Store Connect (Apple) et de figurer sur le DUNS.
Note : DRN Tech est en statut micro-entreprise. Ne pas le mentionner sur le site sauf là où c'est légalement obligatoire (mentions légales).

## Informations clés

- Domaine : drn-tech.com
- Email de contact : contact@drn-tech.com
- Siège : Villefranche-sur-Mer, France
- Produit principal : Ovocio (app mobile iOS/Android de création de devis et factures à la voix)

## Stack technique

- Framework : Next.js (App Router)
- Style : Tailwind CSS
- Langue : TypeScript
- Déploiement : Vercel

## Langue

- Le site est bilingue : français et anglais
- Les fichiers de code et commentaires sont en anglais
- Les échanges avec moi restent en français

## Structure des pages

- Home
- À propos (About)
- Produits (Products) — avec une page dédiée Ovocio
- Contact
- Privacy Policy
- Terms of Service

## Conventions

- Composants dans app/components/
- Pages dans app/ (App Router Next.js)
- Images et assets dans public/
- Un composant par fichier
- Noms de composants en PascalCase (ex: HeroSection.tsx)
- Noms de fichiers de pages en minuscules (ex: about/page.tsx)

## Design

- Style professionnel, sobre et moderne — inspire confiance
- Pas de design générique ou "template" — identité visuelle distincte
- Compatible mobile (responsive)
- Performances optimisées (important pour le référencement et l'App Store)
- Logo : pas encore disponible — utiliser un placeholder typographique "DRN Tech" en attendant

## Palette de couleurs

- Fond principal : #0A1628
- Fond secondaire : #112240
- Fond tertiaire : #1A3A5C
- Accent : #B8CDE0 (argent bleuté)
- Fond clair : #E6EEF5
- Texte principal : #FFFFFF
- Texte secondaire : rgba(255,255,255,0.55)
- Bordures : rgba(255,255,255,0.08)

## Avant de modifier le code

- Toujours me montrer le plan avant d'agir
- Me demander confirmation avant de modifier des fichiers existants
- Pour une nouvelle page ou fonctionnalité, présenter la structure avant de coder

## Compaction

Lors d'une compaction, toujours conserver :

- La liste des fichiers modifiés dans la session
- Les décisions de design ou d'architecture prises
- L'état d'avancement des pages (terminée / en cours / à faire)
