---
name: Vitrina Barrio
description: La cartelera del barrio. A photocopied flyer pinned to warm cork, with tear-off WhatsApp tabs.
colors:
  cork: "#B98A5C"
  cork-dark: "#8E6038"
  cork-light: "#D3A878"
  wood: "#5B3A21"
  wood-dark: "#3F2715"
  wood-light: "#6A4428"
  wood-edge: "#2E1B0E"
  frame-cream: "#F6E9D2"
  paper: "#FBF8F0"
  paper-2: "#F3EEE1"
  receipt-paper: "#FFFDF6"
  ink: "#1B1B1B"
  ink-2: "#4A4740"
  rule-dashed: "#B9B2A6"
  marker: "#C8102E"
  highlighter: "#FFE14A"
  pin-red: "#D7262E"
  whatsapp: "#157F3F"
  whatsapp-ink: "#0E6B33"
  tab-mint: "#E6F3EA"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.2rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.3rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 70"
  price:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 3.3rem)"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
  stamp:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 75"
  hand:
    fontFamily: "Permanent Marker, Comic Sans MS, cursive"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.15
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  gutter: "clamp(16px, 4vw, 40px)"
  column-gap: "clamp(24px, 4vw, 56px)"
  section: "clamp(40px, 7vw, 96px)"
  frame-height: "56px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
    height: "48px"
  button-whatsapp-compact:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "8px 14px"
    height: "40px"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    size: "60px"
  tear-tab:
    backgroundColor: "{colors.tab-mint}"
    textColor: "{colors.whatsapp-ink}"
    rounded: "{rounded.none}"
    height: "132px"
  paper-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 4vw, 44px)"
  sticky-note:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
  section-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "12px 22px 10px"
  stamp:
    textColor: "{colors.marker}"
    typography: "{typography.stamp}"
    rounded: "{rounded.sm}"
    padding: "1px 7px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
    height: "48px"
  choice-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    height: "44px"
  choice-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  choice-chip-disabled:
    backgroundColor: "{colors.paper-2}"
    textColor: "#6E6A62"
  nav-frame:
    backgroundColor: "{colors.wood}"
    textColor: "{colors.frame-cream}"
    height: "{spacing.frame-height}"
    padding: "0 clamp(16px, 4vw, 40px)"
  nav-link:
    textColor: "{colors.frame-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: Vitrina Barrio

## Overview

**Creative North Star: "La cartelera del barrio"**

Vitrina Barrio advertises the way the neighbourhood advertises: a photocopied flyer pinned to the cork board outside the panadería, with a row of tear-off tabs carrying the WhatsApp number. The whole page is that board. Warm cork fills every pixel behind the content; every piece of content is a physical scrap of paper (a flyer, a printed screenshot, a receipt, an index card, a sticky note) held up by a tack or a strip of tape, each one slightly crooked. The wooden frame of the board is the navigation and the footer.

The world is handmade but not sloppy. Paper is off-white and printed in black ink; the only voices on top of print are the ones a shop owner would actually use: a yellow highlighter, a red marker, a rubber stamp. Density is generous and legible for owners reading on a mid-range phone: large body type (18px), big tap targets (44 to 48px), short lines. Interaction is physical: what you touch lifts off the board, and a tear-off tab actually tears away when you take one.

The world explicitly rejects the dark agency hero with floating device mockups and tiered pricing cards, and with it the startup look of the previous site (dark navy, coral, gold).

**Key Characteristics:**
- Full-bleed cork texture (layered radial-gradient grain) as the only page background.
- Every content block is paper: square corners, a soft peel shadow, a tilt between -3deg and 3deg, usually a tack or tape.
- Three type voices: condensed printed headlines, plain typed body, handwritten marker notes.
- WhatsApp green appears only on things that open WhatsApp.
- Motion is paper physics: lift on hover, tear-and-fall on the tabs, nothing else.

## Colors

A warm, earthy board (cork and wood) carrying neutral paper and black ink, with two shop-owner accents (marker red, highlighter yellow) and one reserved functional color (WhatsApp green).

### Primary
- **WhatsApp Green** (`whatsapp`): the single action color. Fills every "Escríbenos" / "Pedir la cita" button and the floating button, colours the WhatsApp glyph on the tear-off tabs. White text on it.
- **WhatsApp Ink** (`whatsapp-ink`): the darker green for WhatsApp text on light surfaces: tab labels on Tab Mint, inline "Pregúntanos por WhatsApp" links.
- **Tab Mint** (`tab-mint`): the pale green paper of the tear-off tabs, so the tabs read as part of the flyer and as the WhatsApp thing at once.

### Secondary
- **Marker Red** (`marker`): the red felt-tip. Handwritten notes, the loop drawn around the price, check marks, step numerals, the "Muestra" rubber stamp, unavailable-schedule lines and form warnings.
- **Highlighter Yellow** (`highlighter`): the yellow highlighter and the sticky note. Highlight stroke under a headline word, highlighted bold phrases, sticky-note and slip backgrounds, menu-item hover, input focus ring, text selection.

### Tertiary
- **Tack Red** (`pin-red`): the plastic push-pin head. Pins also come in yellow and blue variants (recorded in the sidecar); they are hardware, never text or fill colours.

### Neutral
- **Cork** (`cork`) with **Cork Dark** (`cork-dark`) and **Cork Light** (`cork-light`): the board. Base tone plus the dark and light grain specks.
- **Board Wood** (`wood`), **Wood Light** (`wood-light`), **Wood Dark** (`wood-dark`), **Wood Edge** (`wood-edge`): the frame. A three-stop vertical gradient (light to wood to dark) for the sticky header and the footer, closed by a 3px Wood Edge border. Wood Dark is also the browser theme colour.
- **Frame Cream** (`frame-cream`): text on the wooden frame.
- **Bone Paper** (`paper`): every flyer, card and label. **Paper 2** (`paper-2`): disabled controls. **Receipt Paper** (`receipt-paper`): the price receipt, a touch warmer and brighter.
- **Ink** (`ink`): all print text, borders of controls, the selected state. **Ink 2** (`ink-2`): secondary print (captions, explanations, answers).
- **Dashed Rule** (`rule-dashed`): dashed dividers on paper (receipt rows, perforations, the "Ojo" note).

### Named Rules
**The Reserved Green Rule.** WhatsApp green (`whatsapp`, `whatsapp-ink`, `tab-mint`) is used only on elements that open WhatsApp. Nothing decorative, no success states, no other links. If it is green, tapping it writes to Vitrina Barrio.

**The Shop-Owner Accents Rule.** Red is a marker and yellow is a highlighter: they annotate print, they never become the print. Red never fills a surface; yellow never colours text.

## Typography

**Display Font:** Archivo variable, condensed via the width axis (with Arial Narrow, sans-serif)
**Body Font:** Lexend (with system-ui, sans-serif)
**Label/Mono Font:** Permanent Marker for handwriting (with Comic Sans MS, cursive)

**Character:** Archivo squeezed to 68 to 80 percent width at heavy weights reads as the cheap, loud headline of a printed flyer; Lexend is the calm, very legible typed text underneath; Permanent Marker is someone's hand writing on top of the print.

### Hierarchy
- **Display** (900, clamp(2.6rem, 6.4vw, 5.2rem), 0.9, width 68%, uppercase): the flyer headline and the closing flyer headline. Balanced wrapping. One per flyer.
- **Headline** (900, clamp(2rem, 4.6vw, 3.3rem), 0.95, width 70%, uppercase): section titles, always printed on a taped paper label.
- **Price** (900, clamp(2.3rem, 5vw, 3.3rem), 1, width 80%, tabular): the price figure; the receipt total uses the same voice at 1.6rem.
- **Title** (800, 1.3rem, width 80%): slip headings and print captions (receipt and appointment headers go to 900 and uppercase).
- **Body** (400, 18px / 17px under 600px, 1.55): all running text. Lead paragraphs cap at about 44ch, intros at 56ch.
- **Label** (700, 0.95 to 1.12rem): nav links, buttons, form labels, list item leads, FAQ questions.
- **Stamp** (900, 0.78rem, width 75%, 0.12em, uppercase): rubber-stamp labels inside a 2.5px marker border, rotated -6deg.
- **Hand** (400, 1 to 2.6rem, 1.15): handwritten notes, step numerals, disclosure marks; always in Marker Red.

### Named Rules
**The Three Hands Rule.** Each voice has one job: Archivo prints, Lexend types, Permanent Marker writes. Handwriting is for short notes of a line or so (a price condition, "Ojo:", "sin letra pequeña"); never paragraphs, never buttons.

## Layout

The board is a centred 1280px column with a fluid side gutter (`gutter`) and generous section spacing (`section`) between pieces. Paper pieces are laid in asymmetric grids that feel pinned by hand rather than aligned: the hero is 8/4 (flyer plus a column of sample prints), content sections use 7/5 and 6/5 splits, and the samples wall is a 12-column grid where each print spans 3 to 5 columns with staggered top offsets (including small negative ones) so pieces overlap the rhythm. Column gaps are fluid (`column-gap`).

The sticky wooden frame is 56px tall; anchor scrolling is padded by the frame height plus 12px.

Responsive: at 1100px the inline nav collapses into an "Índice" dropdown (a tilted paper menu). At 960px all splits stack to one column, the side prints go two-up, steps go 2x2, the FAQ and appointment card go single column, and the samples wall goes two-up. At 600px everything is single column, body drops to 17px, the brand wordmark hides behind the logo, secondary prints and the phone photo hide, and tilts are reduced (the hero flyer to -0.8deg). The page never scrolls horizontally (the body clips overflow).

### Named Rules
**The Nothing Hangs Straight Rule.** Every paper piece is rotated: large sheets between 0.4 and 1.2 degrees, small prints and notes up to 3 degrees, alternating direction between neighbours. Content inside the paper is never rotated further, except handwritten notes and stamps, which carry their own tilt (-2 to -6deg).

## Elevation & Depth

Depth is physical and comes from one source: how far a piece of paper has peeled off the cork. Paper at rest casts a tight contact shadow plus a short soft one; touched paper lifts higher with a longer, softer shadow; tacks cast an offset shadow down-right as if lit from top-left. The wooden frame is depth by gradient and an edge border, not shadow. Controls inside the paper (inputs, chips) are flat.

### Shadow Vocabulary
- **Paper at rest** (`box-shadow: 0 1px 1px rgba(40,20,5,.25), 0 6px 14px -4px rgba(40,20,5,.35)`): every paper piece.
- **Paper lifted** (`box-shadow: 0 2px 2px rgba(40,20,5,.2), 0 22px 30px -10px rgba(40,20,5,.5)`): hovered sample prints, paired with straightening and a 6px rise.
- **Menu sheet** (`box-shadow: 0 10px 24px -6px rgba(30,15,5,.55)`): the open Índice dropdown.
- **Tack** (`box-shadow: 2px 4px 4px rgba(30,10,0,.45)`): push-pin heads.
- **Tape** (`box-shadow: 0 1px 2px rgba(40,20,5,.2)`): translucent tape strips.
- **Button** (`box-shadow: 0 4px 10px -4px rgba(0,0,0,.45)`, hover `0 10px 18px -6px rgba(0,0,0,.45)`): WhatsApp buttons; the float uses `0 10px 22px -6px rgba(0,0,0,.5)`.

### Named Rules
**The Peel Rule.** A shadow reports how far the paper has lifted, nothing else. Rest is low, touch is higher; no glow, no coloured shadow, no shadow on anything that is not a physical object on the board.

## Shapes

Paper is cut square: flyers, prints, labels, receipts, notes and tabs have no corner radius. Imperfection comes from rotation, tape and tears, not rounding: tape strips are slightly skewed quadrilaterals (clip-path), a torn-off tab leaves a jagged stub, the receipt has a thick top band like a pad stub, the "Cómo funciona" card is ruled like an index card, and perforations are dashed lines. Interactive controls printed on the paper (inputs, day and hour chips, nav links) use a gentle 6px radius; WhatsApp buttons and the rubber stamp use 8px; small stamps 4px; pins and the floating button are circles.

## Components

### Buttons
Tactile and unmistakable: the only filled, coloured controls on the board.
- **Shape:** gently rounded (8px).
- **Primary (WhatsApp):** WhatsApp Green fill, white Label text, WhatsApp glyph at 22px left of the text, 12px 20px padding, at least 48px tall. Compact 40px version in the wooden frame.
- **Hover / Active:** rises 2px with a deeper shadow; presses 1px down with a flatter shadow (0.2s).
- **Focus:** 3px Ink outline offset 3px (global).
- There is no secondary button. Non-WhatsApp actions are underlined text links.

### Tear-off tabs (signature)
The primary action and the memorable moment. A row of vertical Tab Mint strips hanging under the flyer, separated by dashed perforations, each printing the WhatsApp glyph and "WhatsApp 302 774 2140" set vertically in condensed Archivo 800. Some tabs are already gone: a jagged stub remains and the cork shows through. Hover or focus swings the tab -4deg from its top edge; a click tears it off (falls and fades over 0.7s) while WhatsApp opens. Only the first tab in a row is in the tab order and reading order; the rest are aria-hidden duplicates. The floating WhatsApp button hides while a tab row is visible.

### Paper pieces / Containers
- **Corner Style:** square (0).
- **Background:** Bone Paper; Receipt Paper for the price receipt; Highlighter Yellow for sticky notes and the second price slip.
- **Shadow Strategy:** Paper at rest (see Elevation).
- **Fastening:** a tack (red, yellow or blue head, 18px) or a strip of translucent tape (96x28px, skewed) at the top edge.
- **Internal Padding:** fluid, roughly clamp(24px, 4vw, 44px) for sheets, 16 to 22px for notes and slips.

### Section labels
Each section title is a small paper label taped to the board (tape at its top-left corner, -1.5deg or 1.2deg) printing the Headline in uppercase condensed Archivo. This is the section heading itself, not a decoration above it.

### Prints (sample work)
Screenshots of sample sites printed on paper with a 10px border, a 16:10 image cropped to the top, and a caption bar: business name in Archivo 800 and a red "Muestra" rubber stamp for unpublished samples.

### Stamps
Rubber-stamp labels: Marker Red text and 2.5px border, condensed uppercase, rotated -6deg, slightly transparent (0.9). The brand stamp in the flyer corner uses a blue stamp ink with the logo.

### Inputs / Fields
- **Style:** white field, 2px Ink border, 6px radius, at least 48px tall, Lexend 1rem.
- **Focus:** 3px Highlighter Yellow outline, border stays Ink.
- **Error:** no field-level error styling; the form message under the button turns Marker Red and bold and names what is missing.

### Choice chips (day / hour)
Paper-coloured chips with a 2px Ink border and 6px radius, at least 44px tall. Selected inverts to Ink fill with Paper text (aria-pressed). Disabled days go Paper 2 with a faded border and struck-through text. Days scroll horizontally with snap.

### Navigation
The wooden frame: sticky, 56px, wood gradient with a 3px Wood Edge bottom border, Frame Cream text. Logo (36px, 7px radius) plus condensed Archivo wordmark at left; Label-weight links with a faint cream hover wash; compact WhatsApp button at the right. Under 1100px the links become an "Índice" summary button whose menu is a tilted paper sheet with Highlighter Yellow hover. The footer is the bottom rail of the same frame.

### FAQ
Each question is its own paper card (alternating -0.6deg / 0.7deg) using native disclosure; question in Label weight, answer in Ink 2.

## Do's and Don'ts

### Do:
- **Do** keep the full-bleed cork as the only page background, and put every piece of content on paper.
- **Do** rotate every paper piece (0.4 to 3deg, alternating) and fasten primary sheets with a tack or tape.
- **Do** reserve green for WhatsApp: every green thing opens WhatsApp, and every WhatsApp action is green.
- **Do** annotate in Marker Red with Permanent Marker for short notes only, and highlight with Highlighter Yellow as a stroke or a sticky note.
- **Do** set headlines in heavy condensed Archivo (width 68 to 80%) uppercase, and body in Lexend at 18px.
- **Do** keep tap targets at 44px minimum (48px for primary buttons and inputs).
- **Do** let touched paper lift (Paper lifted shadow, 0.3 to 0.35s, cubic-bezier(.2,.8,.2,1)) and turn all paper motion off under reduced motion.
- **Do** mark unpublished sample work with the red "Muestra" stamp.

### Don't:
- **Don't** build a dark agency hero, floating device mockups, or tiered pricing cards; price lives on a receipt.
- **Don't** use green for anything that does not open WhatsApp, including success states.
- **Don't** round the corners of paper pieces or outline them with a border; edges come from cutting, tape, tears and the receipt's pad stub.
- **Don't** fill surfaces with Marker Red or set text in Highlighter Yellow.
- **Don't** set paragraphs or buttons in Permanent Marker.
- **Don't** use coloured glows or shadows on things that are not physical objects on the board.
- **Don't** use decorative gradients; gradients exist only to render materials (cork grain, the wooden frame, the highlighter stroke, index-card ruling, tack heads).
