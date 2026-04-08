# 🎨 Sito per Anna — Master Plan

**Aggiornato**: 2026-04-08

> ⚠️ **NOTA PER CICCIO**: Questo file è il documento di riferimento del progetto. Tienilo SEMPRE aggiornato dopo ogni sessione di lavoro.

---

## 🧠 Contesto
- **Cliente**: Anna — web designer, food designer, artista
- **Sviluppatore AI**: Ciccio (Pi)
- **Tech lead**: Gian (contattare per problemi tecnici/decisioni)
- **Repo**: `/home/gian/projects/anna-site` (branch `main`)
- **Staging URL**: `http://192.168.1.120:4300`
- **Cron check-in Anna**: ogni giorno alle 11:30 Paris time (ID: `82f9ba74`)

---

## 🔑 Requisiti fondamentali
1. **Framework**: **Svelte + Vite** + TypeScript (NON React, NON webpack)
2. **CSS**: normalize.css installato, CSS custom properties per colori/spacing
3. **Responsive**: Mobile (375px), Tablet (768px), Desktop (1440px) — testare SEMPRE
4. **Accessibilità**: aria labels, contrasti, semantica HTML
5. **Allineamento**: Anna è ossessionata dall'allineamento → griglia rigorosa, sempre chiedere HEX per i colori
6. **Git**: Commit frequenti + push su GitHub (auth SSH funziona)
7. **Screenshot**: Mandare sempre screenshot dopo ogni modifica
8. **Feedback**: Chiedere sempre approvazione ad Anna. Problemi tecnici → contattare Gian
9. **Lingua**: Parlare con Anna sempre in **inglese**

---

## 🎭 Stile visivo (ispirazione)
- Homepage: curtain effect copiato identico dal progetto originale (`ineedanicewebsite`)
- Font: **Ultra** (serif) per titoli, **Poppins** per body
- Colore background: `#faf7f0` (crema)
- Colore titolo: `#2b6bac` (blu)
- Sezioni con look diversi (colori, font, layout per sezione)
- Screenshot/brief da Anna: **in arrivo dopo briefing**

---

## 📐 Layout / Struttura Sito (da Anna — briefing 2026-04-08)

### Step 1 — Intro / Curtain Hero ✅ FATTO
- Main picture / curtain effect ← identico all'originale
- Messaggio: "I'm so happy to see you here"
- Da aggiungere dopo briefing: "How can I help you?" / "What are you looking for?"

### Step 2 — 50/50 Split ⏳ DA FARE dopo briefing
- Scroll down → pagina si divide esattamente a metà
- Metà sinistra: **Art Projects** (foto)
- Metà destra: **Food Design Projects** (foto)
- Click immediato sulla categoria → easy navigation

### Step 3 — Project Thumbnails ⏳ DA FARE dopo briefing
- Griglia: 1 foto = 1 progetto per ogni categoria

### Step 4 — Project Detail Page ⏳ DA FARE dopo briefing
- Click su thumbnail → pagina dedicata
- Immagini + breve descrizione

### Step 5 — Manifesto ⏳ DA FARE dopo briefing
- Pagina separata per il manifesto di Anna

---

## 📋 Task Board

### ✅ Fatto
- [x] Setup nuovo progetto Svelte + Vite + TypeScript
- [x] normalize.css, CSS custom properties
- [x] Curtain hero identico all'originale (immagini copiate, CSS compilato dal vecchio progetto)
- [x] Font Ultra + Poppins da Google Fonts
- [x] Approvato Anna nel sistema Telegram (ID: 666323902)
- [x] Cron daily check-in con Anna alle 11:30
- [x] Primo contatto con Anna (briefing domande inviate)

### 🚧 In attesa
- [ ] **BRIEFING con Anna** → raccogliere foto, testi, colori, stile preferito

### 📌 Da fare (dopo briefing)
- [ ] Aggiungere "How can I help you?" nella hero
- [ ] Step 2: sezione 50/50 split (art vs food)
- [ ] Step 3: griglia thumbnails per progetto
- [ ] Step 4: pagina dettaglio progetto
- [ ] Step 5: pagina manifesto
- [ ] Navbar
- [ ] Test responsive completo
- [ ] Accessibilità check
- [ ] Deploy (GitHub Pages o Netlify)

---

## 📞 Comunicazione
- **Con Anna**: nel gruppo Telegram, in inglese, spiegare tutto semplice (no gergo tecnico)
- **Con Gian**: per problemi tecnici/decisioni architetturali
- **Link per Anna**: `http://192.168.1.120:4300`

---

## 🗒️ Note tecniche
- CSS della landing copiato direttamente dall'originale (SASS compilato → CSS)
- Se Anna dà un colore vago → chiedere HEX esatto
- CSS custom property per colori e spacing (facile da modificare)
- GitHub SSH autenticato (`Hi GiovanniFerrara!`), ma token PAT scaduto per creare nuovi repo → Gian deve creare il repo `anna-site` su GitHub
