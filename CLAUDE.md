# Rilaxx — Project Context for AI Assistants

## What is Rilaxx?
Rilaxx is an alcoholic beverage brand (cocktail con vodka). The brand is night-life focused, young, bold, and community-driven. Mascot: a cool fox with sunglasses.

## Brand Personality
- 70% Alma de la fiesta (fun, adventurous, brave)
- 30% Seductor (sensual, desirable, intriguing)
- Tone: enthusiastic, humorous, young, innovative

## Taglines
- Primary: "Follow the Foxx, Chill & Drink"
- Secondary: "Wilder Times", "Zorro Vibes, Zero Stress!", "Chill Out & Take it Easy"

## Brand Essence
Experiencias satisfactorias y sofisticadas para pasar un buen rato.

## Color Palette (from brandbook)
| Name         | Hex       | Use                          |
|-------------|-----------|------------------------------|
| Purple      | #862660   | Primary brand, backgrounds   |
| Hot Pink    | #D33661   | Accents, CTAs                |
| Teal        | #037262   | Secondary backgrounds        |
| Green       | #79B92E   | Yerba Buena flavor, accents  |
| Orange      | #F39200   | Warm accents                 |
| Dark Orange | #EB631A   | Naranja Maracuyá flavor      |
| Yellow      | #FEC900   | Mango flavor, highlights     |
| Amber       | #FAB434   | Warm accents                 |
| Light Pink  | #F4A9BE   | Soft backgrounds             |
| Lime        | #C7D42D   | Fresh accents                |
| Pale Yellow | #FCF100   | Highlights                   |
| White       | #FFFFFF   | Text on dark                 |
| Black       | #000000   | Text on light                |

## Key Gradients
- Hero: purple (#862660) → hot pink (#D33661) → orange (#F39200)
- Frutos Rojos: purple → pink → orange
- Yerba Buena: teal (#037262) → green (#79B92E)
- Mango: amber (#FAB434) → yellow (#FEC900)
- Naranja Maracuyá: orange (#F39200) → dark orange (#EB631A)

## Typography
- **Titles/Headlines:** Savate (rounded, bold) — using Nunito as web placeholder until Savate font file is added
- **Body/Paragraphs:** Space Mono (monospace)
- **Script/Mascot accent:** Yellowtail (cursive)

## Flavors (4 SKUs)
1. **Frutos Rojos** — Berry mix, purple/pink gradient
2. **Yerba Buena** — Mint/herb, green gradient
3. **Mango** — Tropical mango, yellow gradient
4. **Naranja Maracuyá** — Orange passionfruit, orange/red gradient

## Mascot
Fox with sunglasses. Multiple poses: DJ, dancing, upside down, holding drink, in cocktail glass.
- Placeholder: SVG fox silhouettes in `/public/assets/placeholders/`
- Replace with final PNGs from brandbook when available

## File Structure Conventions
- Brand assets: `/public/assets/brand/` (logos, final PNGs)
- Placeholders: `/public/assets/placeholders/` (temporary SVGs/illustrations)
- Brandbook: `/docs/rilaxx-brandbook.pdf` (ONLY valid brand source — no other PDF)
- Components: `/src/components/sections/` (one file per landing section)

## Development Rules
- Branch: always work on `dev`
- Deploy target: Vercel (from GitHub)
- Package manager: npm
- Framework: Next.js 16 + Tailwind CSS 4 + TypeScript
- Never invent new branding — always reference the brandbook
- Placeholders must be clearly marked for easy swap with final assets
- Visual direction: elegant minimalism with powerful assets, NOT maximalismo colorido
- Base: white/off-white (#FFFFFF or subtle warm white), editorial, generous negative space
- Text: black (#000000) as primary text color for maximum contrast
- Color lives in: product shots, mascot, brand seal, CTA accents — NOT in full-section gradient backgrounds
- Gradients: NEVER as full-section backgrounds. Only as small controlled accents (badges, borders, glows behind assets)
- Reference: "minimalismo con assets potentes" — contrast, air, sophistication with attitude
- Feel: editorial, premium, sophisticated — NOT fun/childish/noisy

## Ruflo Integration
- Ruflo is installed as an AI agent orchestration layer
- MCP server configured for Claude Code integration
- 99 agents, 30 skills, 10 commands available
- Runtime config in `.claude-flow/`, Claude integration in `.claude/`
- See `README-ruflo.md` for usage details
