---
name: Gordonridge Civic Bloom
colors:
  surface: '#f8f9ff'
  surface-dim: '#d4dae6'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e8eefa'
  surface-container-high: '#e2e9f5'
  surface-container-highest: '#dce3ef'
  on-surface: '#151c25'
  on-surface-variant: '#43474e'
  inverse-surface: '#2a313a'
  inverse-on-surface: '#eaf1fd'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#435f89'
  primary: '#001e3e'
  on-primary: '#ffffff'
  primary-container: '#13335a'
  on-primary-container: '#809cc9'
  inverse-primary: '#acc8f7'
  secondary: '#006e25'
  on-secondary: '#ffffff'
  secondary-container: '#95f99a'
  on-secondary-container: '#007528'
  tertiary: '#2a1b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#452f00'
  on-tertiary-container: '#cb9100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#acc8f7'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#2b4870'
  secondary-fixed: '#95f99a'
  secondary-fixed-dim: '#79dc80'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531a'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#fdbb32'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#f8f9ff'
  on-background: '#151c25'
  surface-variant: '#dce3ef'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: 4.25rem
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.625rem
    fontWeight: '700'
    lineHeight: 2.125rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.35rem
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system reflects the optimism, warmth, and resilience of the Gordonridge Community Development Initiative in Scarborough, Toronto. Rooted in the lived experiences of diverse generations—from active youth to valued seniors—the aesthetic embodies an uplifting, civic-modern style that marries community warmth with functional clarity.

The visual direction centers on **Warm Organic Modernism**:
- **Human-Centric & Accessible:** Designed with exceptional readability and clarity at its core to support multilingual families, youth, and elders.
- **Vibrant & Grounded:** Rich botanical greens and warm sun-drenched golds balance against a deep civic navy, channeling urban growth, parks, and shared community horizons.
- **Friendly Geometry:** Soft curvatures, generous touch targets, and clear structural hierarchy foster an approachable, non-institutional atmosphere.

## Colors

The palette directly honors the emblem's core narrative: deep civic trust, flourishing greenery, and the rising sun of communal growth.

### Palette Architecture
- **Primary Navy (`#13335A`):** The foundational anchor representing governance, safety, and institutional trust. Used for high-contrast headers, essential action states, and structural framing.
- **Community Forest Green (`#228838`):** The secondary anchor embodying vitality, parks, and grassroots prosperity. Used for positive affirmation, community initiatives, and primary buttons.
- **Leaf Accent Green (`#48B258`):** An energetic accent for progress indicators, interactive hover micro-states, and success notifications.
- **Sunrise Gold (`#F3B228`):** An evocative tertiary highlight providing warmth, celebration, youth highlights, and attention callouts. Paired with dark navy text to maintain strict WCAG AA contrast.
- **Canvas & Surface Neutrals:**
  - Base Background: `#FAFAF8` (warm alabaster).
  - Tonal Surface Tiers: `#F4F8F4` (botanical tint for service cards) and `#FFFDF8` (warm cream for community notices).
  - High-Contrast Text: `#111E2E` (near-black navy body copy, yielding >10:1 contrast on white).

## Typography

The typography leverages **Plus Jakarta Sans** across all levels. Its open apertures, tall x-height, and humanist geometric shapes guarantee high legibility for senior readers and multilingual residents while retaining a fresh, energetic cadence.

### Editorial Guidelines
- **Scalable Hierarchy:** Headlines employ strong weights (`700` and `800`) with slight optical kerning to anchor page sections firmly.
- **Reading Comfort:** Body copy is calibrated at `1rem` or `1.125rem` with a generous `1.6` line-height ratio, avoiding eye fatigue on neighborhood notices and registration workflows.
- **Universal Clarity:** Labels and micro-copy never fall below `12px` (`0.75rem`) and maintain uppercase or bold sentence-case treatments for immediate scanning.

## Layout & Spacing

Layouts rely on an adaptable 12-column responsive grid on desktop and tablet, collapsing to a 4-column flow on mobile viewport sizes.

### Structure & Adaptability
- **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, with max-width content boundaries set at 1280px to preserve comfortable scan lengths.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 24px screen margin.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 20px (`1.25rem`) outer canvas margins ensuring touch-friendly thumb corridors.
- **Rhythm:** Standard increments of 8px base units (`0.5rem`, `1rem`, `1.5rem`, `2.5rem`) maintain clean horizontal cadence between headlines, visual cards, and programmatic callouts.

## Elevation & Depth

This system avoids aggressive, dark drop-shadows in favor of soft, natural ambient illumination tinted subtly with warm neutral and navy undertones.

### Depth Hierarchy
- **Level 0 (Flat / Canvas):** Applied to the main backdrop (`#FAFAF8`).
- **Level 1 (Card Rest):** Subtle border of `1px solid rgba(19, 51, 90, 0.08)` accompanied by an ambient diffusion: `0 4px 16px -2px rgba(19, 51, 90, 0.04)`.
- **Level 2 (Interactive Hover / Priority Modals):** Slight elevation lift with `0 12px 28px -4px rgba(19, 51, 90, 0.08), 0 4px 10px -2px rgba(34, 136, 56, 0.04)`.
- **Tonal Backplates:** Key sections utilize alternating surface containers (`#F4F8F4` for environmental/sports programming and `#FFFDF8` for family and senior hubs) rather than multi-layered physical drop shadows.

## Shapes

The geometric approach embraces soft, generous curvature inspired by the sweeping community leaf and arch silhouettes in the logo emblem.

### Radius Assignments
- **Micro Elements (Tags, Indicators, Badges):** Pill-shaped (`9999px`) or `rounded-md` (`0.5rem`) to maintain clarity at tiny scales.
- **Interactive Controls (Inputs, Buttons, Dropdowns):** `rounded-lg` (`0.75rem`) providing comfortable ergonomics and clear visual targets.
- **Structural Containers (Event Cards, Feature Panels, Modals):** `rounded-2xl` (`1rem`) up to `rounded-3xl` (`1.5rem`) for distinct, friendly enclosure.

## Components

### Buttons
- **Primary Community Action:** Background `#228838`, text `#FFFFFF`, rounded `0.75rem`, padding `0.875rem 1.75rem`. Hover shifts to `#1D7430` with subtle upward transform.
- **Civic Anchor Action:** Background `#13335A`, text `#FFFFFF`, for formal registrations and portal access.
- **Warm Spotlight (Tertiary):** Background `#F3B228`, text `#13335A` (font-weight `700` to exceed AA contrast requirements).
- **Secondary / Outlined:** Background `transparent`, border `2px solid #13335A`, text `#13335A`.

### Micro Badges & Chips
- **Category Chips:** Soft pastel backgrounds with saturated foreground text.
  - Youth & Sports: Background `rgba(72, 178, 88, 0.15)`, text `#1D7430`.
  - Seniors & Elders: Background `rgba(243, 178, 40, 0.20)`, text `#8A5E00`.
  - Family & Housing: Background `rgba(19, 51, 90, 0.10)`, text `#13335A`.
- Radii are full pill (`9999px`) with `0.25rem 0.75rem` padding and `label-sm` typography.

### Cards & Content Surfaces
- Built on white (`#FFFFFF`) or pale botanical (`#F4F8F4`) surfaces with `1.5rem` internal padding.
- Card borders use a crisp hairline border (`rgba(19, 51, 90, 0.08)`) with `1rem` to `1.5rem` rounded corners.
- Featured event cards include a top accent band in either Sunrise Gold (`#F3B228`) or Community Green (`#228838`).

### Form Inputs & Controls
- **Fields:** Minimum height of `48px` to ensure effortless mobile tapping for all ages. Border `1.5px solid #D2D9E0`, background `#FFFFFF`. Active focus state features an outline ring of `3px solid rgba(34, 136, 56, 0.35)`.
- **Checkboxes & Radios:** `20px x 20px` touch areas with `#228838` checked states and distinct check/dot graphics for accessibility.

### Community Notice Banners
- Gently framed horizontal banners with soft gold or leaf green gradient strokes, accompanied by prominent community icon markers to highlight news, workshops, and seasonal gatherings.