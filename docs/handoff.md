# Handoff — DRN Tech site vitrine

---

## Session du 2026-06-02

### Infrastructure de base
- `app/layout.tsx` — metadata DRN Tech, fond `bg-drn-bg`, polices Geist
- `app/globals.css` — palette complète définie en tokens Tailwind v4 (`@theme`)

### Page Home — complète
Tous les composants suivants ont été créés dans `app/components/` :

| Composant | Description |
|---|---|
| `Nav.tsx` | Header fixe, transparent → opaque au scroll. Toggle FR/EN visuel (non fonctionnel à ce stade). Client component. |
| `HeroSection.tsx` | Hero plein écran, accroche + 2 CTAs, fond avec grille SVG et glow centré |
| `AboutBrief.tsx` | Présentation 2 colonnes, lien vers /about |
| `OvocioHighlight.tsx` | Carte produit avec "Ovocio" en typographie large, 3 features, CTA |
| `ServicesSection.tsx` | Grille 4 services (Mobile, SaaS, Websites, Automation), hover animé |
| `Footer.tsx` | Adresse, email, liens légaux, copyright |

### Pages créées (session 1)
- `app/about/page.tsx` — 3 sections : hero, piliers, valeurs
- `app/products/page.tsx` — hero intégré + card Ovocio + grille services
- `app/products/ovocio/page.tsx` — hero 2 colonnes avec mockup, features, audiences, CTA closing
- `app/contact/page.tsx` — email cliquable + localisation

### Pages légales
- `app/privacy-policy/page.tsx` — 6 sections RGPD, hébergeur Vercel, responsable DRN Technologies
- `app/terms-of-service/page.tsx` — 5 sections, droit français, tribunal de Nice

---

## Session du 2026-06-03

### Système i18n FR/EN — complet

Architecture choisie : **contexte React côté client**, sans routing i18n, sans `next-intl`. Les URLs ne changent pas. Le toggle FR/EN dans la Nav bascule la langue pour toute l'app instantanément.

Fichiers créés :

| Fichier | Rôle |
|---|---|
| `messages/en.json` | Tout le contenu du site en anglais |
| `messages/fr.json` | Tout le contenu du site en français |
| `app/contexts/LanguageContext.tsx` | Contexte React + hook `useLanguage()` + persistance localStorage |
| `app/components/Providers.tsx` | Wrapper client qui enveloppe le layout (permet à `layout.tsx` de rester server component) |

Tous les composants et pages ont reçu `"use client"` et consomment `useLanguage()` :
- Composants partagés : `Nav`, `Footer`, `HeroSection`, `AboutBrief`, `OvocioHighlight`, `ServicesSection`, `OvocioTeaser`, `ContactCta`
- Pages : `about`, `products`, `products/ovocio`, `contact`, `privacy-policy`, `terms-of-service`

### Persistance de la langue (localStorage)
- Clé : `drn-lang`
- Au montage (`useEffect`), on lit localStorage et on applique la langue sauvegardée
- À chaque changement, on écrit dans localStorage
- Langue par défaut : `en` (compatible SSR — pas de flash côté serveur)

### Corrections de contenu fr.json
- `home.services.label` → "Expertises"
- `home.services.title` → "Ce que nous construisons"
- Description "sites internet" harmonisée sur toutes les pages : "Des sites performants, simples à gérer et pensés pour durer."
- `products.hero.title` → "Ce que nous construisons"
- `products.hero.subtitle` → "Un produit. Des services. Tout pensé pour durer."
- `about.pillars.label` → "Nos activités"
- `about.pillars.items[0].description` → "facilité d'utilisation"
- `about.values.label` → "Notre approche"
- `about.values.title` → "Nos engagements"
- `about.values.items[0]` → "L'utile avant tout" / "Chaque solution que nous créons répond à un problème concret."
- `about.values.items[1]` → "Simple par nature" / "Un produit qui s'explique tout seul est un produit abouti."

### Pages légales bilingues
Les pages `/privacy-policy` et `/terms-of-service` sont désormais connectées au système i18n. Leur contenu est stocké dans `en.json` et `fr.json` sous les clés `privacy_policy` et `terms_of_service`, avec une structure `sections[]` (`title`, `body`, `link: boolean`). Le composant itère sur les sections et affiche le lien email en accent quand `link: true`.

---

## Décisions techniques

- **Thème sombre** : fond principal `#0A1628`, accent argent bleuté `#B8CDE0`
- **Tailwind v4** : tokens via `@theme` dans `globals.css` (pas de `tailwind.config.js`)
- **i18n sans routing** : `typeof en` utilisé comme type `Messages` — TypeScript détecte toute clé manquante en FR
- **Pas de mention micro-entreprise** sur le site (sauf mentions légales obligatoires)
- **Footer** : "French Riviera, France" (EN) / "Côte d'Azur, France" (FR)
- **Mockup Ovocio** : `public/images/ovocio/mockup.png` — à remplacer par le vrai screenshot

---

## État des pages

| Page | État |
|---|---|
| Home | Terminée — bilingue |
| About | Terminée — bilingue |
| Products | Terminée — bilingue |
| Ovocio (`/products/ovocio`) | Terminée — bilingue |
| Contact | Terminée — bilingue |
| Privacy Policy | Terminée — bilingue |
| Terms of Service | Terminée — bilingue |

---

## Session du 2026-06-05

### Liens stores Ovocio
Remplacement de tous les `href="#"` sur la page `/products/ovocio` par les URLs définitives :
- App Store : `https://apps.apple.com/fr/app/ovocio-devis-%C3%A0-la-voix/id6759789723`
- Google Play : `https://play.google.com/store/apps/details?id=com.ovocio.app`
Les 4 boutons (hero × 2 + closing CTA × 2) pointent désormais vers les stores, avec `target="_blank" rel="noopener noreferrer"`.

### Style des boutons CTA closing — aligné sur le hero
Le closing CTA de la page Ovocio avait un style inversé (fond accent) sans icônes. Harmonisé avec le hero :
- Bouton App Store : `bg-white text-drn-bg hover:bg-drn-accent` + icône Apple SVG
- Bouton Google Play : bordure `border-white/8`, hover discret + icône Google Play SVG

### Déploiement
- Repo GitHub créé et poussé (`main`)
- Site déployé sur Vercel — URL Vercel active
- Domaine `drn-tech.com` configuré (DNS pointé sur Vercel)

---

## Ce qui reste à faire

### Fonctionnalités
- [ ] **Menu mobile** — `Nav.tsx` a `hidden md:flex` pour les liens, pas de menu hamburger implémenté
- [ ] **Logo DRN Tech** — placeholder typographique en attendant le logo définitif
- [ ] **Metadata SEO par page** — Open Graph, `title` et `description` spécifiques à chaque route
- [ ] **Vrai mockup Ovocio** — remplacer `public/images/ovocio/mockup.png` par le screenshot définitif
