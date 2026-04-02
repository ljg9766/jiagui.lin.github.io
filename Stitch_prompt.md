# Stitch Prompt: Personal Practice Website (Prototype)

Use this document as a single prompt for generating **personal website prototype screens** (wireframe to high-fidelity layout). **Do not include any photographs, avatars, portraits, or illustrative images of people.** Use typography, rules, borders, geometric blocks, and labeled placeholders only.

---

## Role

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your task is to produce a **coherent multi-page prototype** for a small personal / portfolio practice site.

**Output expectations**

- Deliver **clear screen designs** (one per main page) with consistent navigation, spacing, and hierarchy.
- Treat this as a **design prototype**, not production code. No need to reference an existing codebase unless the user later asks for implementation.
- Prioritize **accessibility**: contrast, focus states, touch targets (min 44×44px on mobile), logical heading order, visible skip link concept.
- Layouts must be **responsive** (desktop and mobile variants or notes).
- Make **deliberate editorial choices** (scale, rhythm, negative space) that express the design system’s personality—avoid generic template UI.

Before laying out screens, internalize the **information architecture** and the **Minimalist Monochrome** system below. Every screen should feel like the same publication, not a mix of styles.

---

## Site brief (information architecture)

**Overall**

- **Site type:** Personal homepage / lightweight portfolio (practice project—not a blog CMS, not e-commerce).
- **Primary goal:** Showcase work; secondary: provide a simple way to contact.

**Pages (4)**

1. **Home**
   - One short introductory line (placeholder copy is fine, e.g. a name + one line of role).
   - A **non-photographic** decorative element: simple **geometry** (e.g. bordered square, thick rule, or abstract line composition)—no photos.
   - Two primary actions: **View work** and **Contact** (buttons or strong text links).

2. **About**
   - Short personal / learning context: placeholder paragraphs (skills in progress, practice projects). Flexible layout.

3. **Works**
   - **3–6 project cards**: each with title, one line description, and a **text or outline “Details”** control (link placeholder—no screenshots required; optional empty bordered frame labeled “Project preview” if needed, still no photos).

4. **Contact**
   - **Email** and **GitHub** as text links or labeled rows. No WeChat QR codes, no avatars. Optional note like “Other channels: TBD” in small type.

**Navigation**

- **Position:** Top navigation—either **centered** primary links or **left site wordmark + right-aligned links** (pick one and keep it on all pages).
- **Items:** Home · About · Works · Contact (order may match this or be logical; stay consistent).
- **Behavior:** Conventional **page-to-page** navigation (not long single-page anchor scrolling). Prototype may show separate frames per route.

**Motion / interaction (prototype-level)**

- **Page change:** Simple **fade** or **subtle horizontal slide** between views—or state “no transition” if static frames only.
- **Scrolling:** No parallax, no scroll-jacking.
- **Hover:** Subtle state change on links/buttons (e.g. inversion or underline) consistent with the design system.
- **Loading:** Optional **minimal** indicator (e.g. small monochrome spinner or text “Loading”)—**not** illustrated TV or decorative loaders with imagery.

---

## Visual system: Minimalist Monochrome (strict reference)

Apply this system to **all** screens. Do **not** introduce accent colors, gradients for decoration, or rounded corners for UI chrome.

### Philosophy

- **Reduction to essence:** Black, white, and typography. No accent hues; no soft gradients to hide weak hierarchy.
- **Vibe:** Austere, editorial, timeless, intellectual, refined—high-end editorial / gallery catalog, not playful or “startup gradient.”

### What this is NOT

- No colorful or playful palette; no soft pill buttons; no blue/orange accent schemes; no drop shadows for depth; no busy dashboards.

### DNA (non-negotiable)

1. **Palette:** True **#000000** and **#FFFFFF** as primary pair. **#F5F5F5** for subtle fills; **#525252** for secondary text; **#E5E5E5** for light dividers only. **No other colors.**
2. **Typography hero:** **Serif** for display and body (e.g. Playfair Display–class for headlines; Source Serif 4–class for body). **Monospace** optional for labels/metadata (e.g. JetBrains Mono).
3. **Oversized scale:** At least one **very large** headline treatment on Home (display type as graphic).
4. **Line-based structure:** Hairlines, **thick horizontal rules** (4px or 8px black) between major sections; borders instead of shadows.
5. **Geometry:** **Border radius 0** everywhere (sharp corners).
6. **Negative space:** Generous margins and section padding; whitespace is active.
7. **Emphasis:** Use **inversion** (black block, white type) sparingly for CTAs or highlighted strips—not new colors.

### Tokens (summary)

- Background: `#FFFFFF` · Foreground: `#000000` · Muted bg: `#F5F5F5` · Muted text: `#525252` · Borders: `#000000` or `#E5E5E5` for subtle lines.

### Type scale (directional)

- Wide range from small metadata (≈12px) to **hero display** (very large, e.g. 96px+ on desktop). Tight tracking on large headlines; comfortable leading on body.

### Components (prototype appearance)

- **Primary button:** Black fill, white text, uppercase wide tracking, rectangular, generous padding; hover = invert (white bg, black text, black border).
- **Outline button:** Transparent, 2px black border, black text; hover fill black / text white.
- **Cards:** White (or muted) with **1px black border**, no shadow, **0 radius**. Optional hover: full inversion for emphasis.
- **Inputs (if shown on Contact):** Bottom or full **2px black** border, no radius; focus = thicker border—no colored rings.

### Textures (subtle, optional in mockups)

- Very light **horizontal lines**, **grid**, or **noise** at low opacity (as in the full design spec) to avoid flat emptiness—keep barely visible.

### Motion

- **Minimal:** 0–100ms transitions; binary hover states; no bounce, no parallax.

### Icons

- Thin **outline** icons only, **black** stroke—no colored icon fills.

### Responsive

- On small screens: stack columns, preserve monochrome drama, reduce extreme display sizes but keep one strong typographic moment on Home.

### Accessibility (show in prototype annotations if useful)

- Skip link (visible, black on white).
- **Focus-visible** outlines: ~3px black, offset on interactive elements.
- Touch targets ≥ 44×44px.

### Bold choices to include in the prototype

- At least one **hero** with oversized serif headline + **thick rule** and/or small **bordered square** punctuation.
- **Heavy black rules** between major sections on long pages (About, Works).
- **No images of people**; typography and line are the visuals.

---

## Explicit constraints for Stitch

1. **No photography:** No stock photos, no avatars, no headshots, no illustrated characters.
2. **No image-heavy hero:** Replace imagery with type, rules, and geometry.
3. **Project thumbnails:** If needed, use **empty bordered rectangles** with labels (e.g. “Project 01”) or simple line icons—no screenshots unless they are abstract patterns (prefer none).
4. **Consistent system:** Same nav, same type families, same black/white rules on every page.

---

## Deliverables

Produce **four main screens** (Home, About, Works, Contact) plus **mobile adaptations** or a single responsive description for each. Optionally add a **style tile** or **component strip** (buttons, links, card, rule styles) to lock the system.

End of prompt.
