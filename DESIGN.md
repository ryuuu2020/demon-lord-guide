# Template B: Dark Fantasy Epic

## Design Overview
A cinematic, immersive game guide site for dark fantasy, souls-like, and ARPG games. Full-screen hero, bottom HUD navigation, gold-rimmed grimoire cards, gothic typography. Enter the archive.

## Design Read
- **Kind**: ARPG/souls-like guide with cinematic immersion
- **Audience**: Hardcore gamers seeking lore and boss strategies
- **Vibe**: Elden Ring wiki meets modern dark fantasy
- **Dials**: VARIANCE=7 / MOTION=5 / DENSITY=5

## Color System
| Token | Hex | Usage |
|---|---|---|
| `abyss` | `#0a0a0f` | Deepest page background |
| `abyss-elevated` | `#111118` | Card surfaces |
| `dark-gold` | `#c9a84c` | Primary accent, headings, borders |
| `dark-gold-glow` | `rgba(201,168,76,0.15)` | Gold background tint |
| `blood-red` | `#8b2020` | Danger/boss indicators |
| `ember` | `#d4713a` | Warm accent |
| `parchment` | `#d4c5a9` | Primary text |
| `parchment-dim` | `#9e8f76` | Secondary text |

## Typography
- **Display/Heading**: Cinzel (serif, uppercase, wide tracking) - dramatic, gothic
- **Body**: Crimson Text (serif, 400 italic for lore, 600 for emphasis)
- **Labels/UI**: Inter (sans-serif, uppercase, tracking) - only for small labels

## Layout Structure
```
[Floating Logo Bar (fixed top)]
[Hero Section (100dvh, atmospheric)]
[Content Sections (centered, max-w-5xl)]
[Footer (above HUD)]
[Bottom HUD Navigation (fixed bottom)]
```

- Hero: Full viewport, dark gradient + smoke effect + gold-accented typography
- HUD Nav: Fixed bottom, game-UI style, gold border top
- Cards: Gold-rimmed with inner shadow glow effect
- All corners: `rounded-none` (sharp, angular)
- Rune pattern: Subtle SVG background on the abyss surface

## Key Components
- `.grimoire-card` - Gold-bordered card with hover glow effect
- `.corner-ornament` - Gold corner accents for hero
- `.hud-nav-item` - Bottom nav button with active gold border-top
- `.blood-strip` - Horizontal red divider (gradient to transparent)
- `.gold-divider` - Horizontal gold divider
- `.danger-tag` - Blood-red tag for boss content
- `.gold-tag` - Gold tag for guides
- `.text-shadow-gold` - Gold text glow utility
- `.text-shadow-blood` - Red text glow utility

## How to Use This Template

### 1. Install and Build
```bash
cd templates/B-dark-fantasy
npm install
npm run dev
npm run export    # Build static export to out/
```

### 2. Replace Placeholders
Search `REPLACE_WITH_`:

| Pattern | Content |
|---|---|
| `REPLACE_WITH_SITE_NAME` | Archive name (e.g. "Ashen Archive") |
| `REPLACE_WITH_GAME_TITLE` | Game title in hero eyebrow |
| `REPLACE_WITH_HERO_HEADLINE` | Hero headline (3-5 words, dramatic) |
| `REPLACE_WITH_HERO_SUBTEXT` | Hero description |
| `REPLACE_WITH_GUIDE_*` | Featured guide data |
| `REPLACE_WITH_BOSS_*` | Boss compendium entries |
| `REPLACE_WITH_LORE_*` | Lore fragments |
| `REPLACE_WITH_COMMUNITY_CTA` | Community join message |

### 3. GA4 and GSC
- GA4: `G-ET6778V62K` (pre-configured in layout.tsx)
- GSC: Replace `REPLACE_WITH_GSC_VERIFICATION_CODE`
- Verification file: `public/google4cd6cdf221ea7b0b.html`

### 4. Afdian Integration
- CTA section near bottom: "SUPPORT ON AFDIAN" button
- Footer link: Afdian reference
- Both point to `https://afdian.com/a/gameguidehub`

### 5. Adding Pages
```
app/
  guides/page.tsx
  bosses/page.tsx
  builds/page.tsx
  lore/page.tsx
  community/page.tsx
```

### 6. Customization
- **Game theme**: Change gold to crimson, frost blue, or void purple by editing `dark-gold` in `tailwind.config.ts`
- **Hero atmosphere**: Edit the gradient in `globals.css` (`abyss-gradient`)
- **Rune pattern**: Replace the SVG background in `tailwind.config.ts`
- **Boss table**: Edit `BOSS_ENTRIES` array

## Anti-AI Design Decisions
- No white or light backgrounds anywhere
- No rounded corners (sharp gothic angles)
- No standard grid layouts
- No Inter as heading font (Cinzel serif instead)
- Fixed bottom HUD nav instead of top nav
- Gold-rimmed cards instead of shadow cards
- Blood-red strips instead of standard dividers
- Atmospheric effects (smoke, flicker, rune pattern)
