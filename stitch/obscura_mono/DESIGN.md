# Design System Documentation: The Curated Manuscript

## 1. Overview & Creative North Star
### The Creative North Star: "The Typographic Brutalist"
This design system is built on the philosophy that information is architecture. By stripping away the "crutches" of modern UI—photography, shadows, and rounded corners—we elevate typography and geometry to the status of art. This is not just a portfolio; it is a high-end editorial statement. 

We break the "template" look through **Intentional Asymmetry** and **Aggressive Scale**. By utilizing oversized display type and varying line weights, we create a rhythmic experience that feels like a premium avant-garde magazine. The absence of imagery is not a limitation; it is a deliberate choice to focus the viewer's attention on the intellectual weight of the content.

---

## 2. Colors
The palette is restricted to a pure monochrome scale to ensure maximum focus and a "printed-matter" aesthetic. 

### The "Structural Contrast" Rule
In this design system, we do not use shadows to create depth. Instead, we use **Hard Tonal Shifts**. 
- **Surface Hierarchy:** Use `surface` (#F9F9F9) for the primary canvas. When nesting content, transition to `surface-container-low` (#F3F3F3) to define distinct zones. 
- **The Hairline vs. The Block:** Boundaries are defined by two extremes: the 1px `outline` (#777777) for delicate containment and the 4px-8px `primary` (#000000) rules for structural dominance.
- **Color Roles:**
    - **Primary (#000000):** Used for structural rules, primary headings, and button states.
    - **Background (#FFFFFF):** The default state for cards and active text areas.
    - **Muted Background (#F5F5F5):** Used for sectioning large areas of the layout.
    - **Secondary Text (#525252):** Reserved for metadata and labels to reduce visual noise.

*Director's Note: Do not settle for "grey." Use the contrast between the paper-white surface and the deep black ink to create a sense of authority. If a section feels "flat," do not add a shadow—increase the typographic scale or add a 4px horizontal rule.*

---

## 3. Typography
Typography is the "image" in this design system. We use a high-contrast Serif to provide a sense of history and prestige, paired with a Monospace font to ground the design in technical precision.

- **Display & Headlines (Playfair Display / Serif):** These should be oversized. Do not be afraid to let a `display-lg` headline take up 50% of the viewport. This creates the "Editorial" feel.
- **Body (Source Serif 4):** Chosen for its exceptional legibility and high-end feel. Use ample line-height (1.6 - 1.8) to allow the text to "breathe."
- **Labels & Captions (JetBrains Mono / Monospace):** All-caps Monospace should be used for labels, buttons, and navigation. This adds a "brutalist" utility to the elegant serif environment.

---

## 4. Elevation & Depth
Traditional elevation (Z-axis) is discarded in favor of **Tonal Layering** and **Line Weight**.

- **The Stacking Principle:** To create a "lifted" effect for a card, place a `#FFFFFF` container on a `#F5F5F5` background. The sharp 1px black border provides the only "physical" edge required.
- **The "No-Shadow" Mandate:** Shadows are strictly prohibited. Movement and focus are communicated through **Inversion**. If a user interacts with an element, the colors should flip (e.g., White background/Black text becomes Black background/White text).
- **Rule Hierarchy:**
    - **1px (Hairline):** For subtle grouping and table rows.
    - **4px (Standard Rule):** For separating major sections (e.g., Header from Body).
    - **8px (Structural Rule):** For the "Hero" section or to anchor the bottom of a page.

---

## 5. Components

### Buttons
- **Style:** Rectangular, 0px border radius, 1px solid black border.
- **Interaction:** On hover, the button must **Invert** (Background becomes `#000000`, Text becomes `#FFFFFF`).
- **Padding:** Use the `spacing.4` (1.4rem) for horizontal padding to maintain a wide, stable footprint.

### Cards
- **Style:** 1px black border (`outline`), white background (`surface-container-lowest`).
- **Constraint:** No shadows. To highlight a "Hover" state, increase the border weight to 2px or invert the header label of the card.
- **Content:** Use Monospace labels for dates/categories at the top, followed by an oversized Serif title.

### Input Fields
- **Style:** Underline only (2px black rule). Labels should be Monospace and positioned above the input.
- **Focus State:** The 2px rule becomes 4px. No "glow" or blue outlines.

### Dividers & Rules
- Use the `spacing.16` or `spacing.20` scale to create massive gaps between sections. 
- A horizontal rule should never be "just a line." It is a structural anchor. Ensure the 4px or 8px rules span the full width of their container.

---

## 6. Do's and Don'ts

### Do:
- **Do** use extreme white space. If you think there is enough space, double it.
- **Do** treat typography as a geometric shape. Align text to a strict 0px-radius grid.
- **Do** ensure accessibility. With a monochrome palette, ensure all text meets WCAG AAA contrast ratios (Black on White is 21:1).
- **Do** use line-based icons with a stroke weight that matches your 1px hairline or 2px text weight.

### Don't:
- **Don't** use any border-radius. Every corner must be a sharp 90-degree angle.
- **Don't** use photography. If you need to represent a project, use typographic compositions, wireframes, or geometric patterns.
- **Don't** use "Grey" for primary actions. Stick to the high-contrast Black/White inversion.
- **Don't** use standard 12-column grids if they feel restrictive. Experiment with offset columns and intentional asymmetry where text blocks are pushed to the far edges of the canvas.