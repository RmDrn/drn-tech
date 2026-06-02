# Handoff — DRN Tech site vitrine

## Session du 2026-06-02

---

## Ce qui a été fait

### Infrastructure de base
- `app/layout.tsx` — metadata DRN Tech, fond `bg-drn-bg`, polices Geist
- `app/globals.css` — palette complète définie en tokens Tailwind v4 (`@theme`)

### Page Home — complète
Tous les composants suivants ont été créés dans `app/components/` :

| Composant | Description |
|---|---|
| `Nav.tsx` | Header fixe, transparent → opaque au scroll. Toggle FR/EN visuel (non fonctionnel). Client component. |
| `HeroSection.tsx` | Hero plein écran, accroche + 2 CTAs, fond avec grille SVG et glow centré |
| `AboutBrief.tsx` | Présentation 2 colonnes, lien vers /about |
| `OvocioHighlight.tsx` | Carte produit avec "Ovocio" en typographie large, 3 features, CTA |
| `ServicesSection.tsx` | Grille 4 services (Mobile, SaaS, Websites, Automation), hover animé |
| `Footer.tsx` | Adresse, email, liens légaux, copyright |

---

## Décisions prises

### Contenu
- **Pas de mention de statut juridique** sur le site (micro-entreprise non visible, sauf mentions légales obligatoires)
- **Hero** : pas de localisation dans l'accroche principale
- **About** : "Based on the French Riviera" (EN) — formulation choisie à la place de "based in Villefranche-sur-Mer"
- **Footer** : "French Riviera, France" (et non ville précise)
- **Ovocio** : nom affiché en grande typographie stylisée — pas de logo pour l'instant

### Design
- **Thème sombre** avec fond principal `#0A1628`
- **Palette complète** documentée dans CLAUDE.md (voir section Palette de couleurs)
- **Décoration Hero** : grille SVG + double glow centré horizontalement, large et diffus (premium)
- Pas d'illustrations stock, pas d'emojis — typographie et formes géométriques uniquement

### Architecture
- Composants isolés, un par fichier, dans `app/components/`
- Tailwind v4 — tokens personnalisés via `@theme` dans `globals.css` (classes : `bg-drn-bg`, `text-drn-accent`, etc.)
- `Nav.tsx` est le seul client component sur la Home (nécessaire pour l'effet scroll)

---

## Ce qui reste à faire

### Pages
- [ ] `app/about/page.tsx` — Page About
- [ ] `app/products/page.tsx` — Page Products (index)
- [ ] `app/products/ovocio/page.tsx` — Page dédiée Ovocio
- [ ] `app/contact/page.tsx` — Page Contact
- [ ] `app/privacy-policy/page.tsx` — Politique de confidentialité
- [ ] `app/terms-of-service/page.tsx` — Conditions générales

### Fonctionnalités
- [ ] **Menu mobile** — le `Nav.tsx` n'a pas encore de menu hamburger pour les petits écrans
- [ ] **Système bilingue FR/EN** — le toggle est visuel uniquement ; aucune traduction n'est branchée
- [ ] **Logo DRN Tech** — placeholder typographique en attendant le logo définitif
- [ ] **Metadata SEO** par page (Open Graph, title/description spécifiques)

### Déploiement
- [ ] Configurer le domaine `drn-tech.com` sur Vercel
- [ ] Variables d'environnement si nécessaire

---

## État des pages

| Page | État |
|---|---|
| Home | Terminée |
| About | À faire |
| Products | À faire |
| Ovocio | À faire |
| Contact | À faire |
| Privacy Policy | À faire |
| Terms of Service | À faire |
