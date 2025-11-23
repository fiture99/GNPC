# GNPC Multi-Page Website Design Guidelines

## Design Approach
**Modern Energy Sector Authority** - Drawing inspiration from Shell, BP, and Equinor's sophisticated digital presence. Rich photography with dark overlays establishes credibility and scale. Professional corporate aesthetic balanced with environmental consciousness through strategic green/yellow branding.

## Color Palette
- **Primary Dark Green**: #166534 (headings, primary elements, footer)
- **Primary Medium Green**: #15803d (cards, accents, active states)
- **Primary Light Green**: #22c55e (highlights, success indicators)
- **Accent Yellow**: #eab308 (CTAs, badges, important highlights)
- **Neutrals**: White (#ffffff), off-white (#f9fafb), gray scale (#1f2937 to #f3f4f6)
- **Overlay**: rgba(22, 101, 52, 0.75) - dark green tint for hero images

## Typography Hierarchy
**Font Stack**: Inter via Google Fonts CDN

- **H1 (Hero)**: 56-72px, font-weight 700, white on images, tight tracking
- **H2 (Sections)**: 36-48px, font-weight 600, dark green
- **H3 (Cards)**: 24-28px, font-weight 600
- **Body Large**: 18-20px, line-height 1.7
- **Body Standard**: 16px, line-height 1.6, #374151
- **Small/Meta**: 14px, font-weight 500, reduced opacity

## Spacing System
**Tailwind Units**: 4, 6, 8, 12, 16, 20, 24, 32

- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card padding: p-8
- Grid gaps: gap-8
- Container: max-w-7xl with px-6

## Layout Structure

### Global Header
Sticky white background with shadow on scroll. Logo left, horizontal navigation right (desktop). Green underline on active page. Hamburger menu (mobile) slides from right with green overlay background.

**Navigation**: Home | About | Services | Products | Stations | Exploration | News | Contact

### Page Layouts

**Home Page**:
- **Hero**: Full-width image (oil refinery/offshore platform) with dark green overlay (85vh), centered white text with yellow badge, 2 CTAs with backdrop-blur
- **Stats Banner**: 4-column grid, white cards with green accent borders, large numbers in green
- **About Preview**: Image-text split (50/50), facility photo left, mission/vision right with green border-left accent
- **Services Grid**: 3 cards with service imagery backgrounds, dark overlays, white text
- **Products Showcase**: 3-column grid, product photography cards
- **Stations Map**: Interactive section with embedded map + 3 featured station cards
- **News Section**: 3 latest articles, image thumbnails, yellow date badges
- **CTA Banner**: Exploration opportunity image background with overlay, centered content

**About Page**:
- **Hero**: Team/facility image, dark overlay, 60vh
- **History Timeline**: Vertical with alternating image blocks
- **Leadership Grid**: 4-column cards with professional headshots
- **Values**: 2x2 grid, icon-driven cards with light green backgrounds

**Services Page**:
- **Hero**: Industrial operations image, 50vh
- **Services**: 2-column alternating layout, each service features relevant photo (exploration, refining, distribution, retail)

**Products Page**:
- **Hero**: Fuel station/products image
- **Categories Grid**: 3-column, product photography (fuel pumps, lubricants, convenience items)
- Each card: image, title, specs list, learn more link

**Stations Page**:
- **Hero**: Modern GNPC station exterior
- **Map Section**: Full-width interactive map with 7 green markers
- **Station Grid**: 3-column cards with station photos, details, hours, amenities icons

**Exploration Page**:
- **Hero**: Offshore platform/seismic survey imagery, 70vh
- **Opportunity Overview**: Large stats with oil/gas field imagery backgrounds
- **Benefits Grid**: 3-column, icon-driven
- **Contact Form**: Side-by-side form + info panel, white card on light green background

**News Page**:
- **Featured Article**: Large image card spanning 2 columns
- **News Grid**: 3-column with article thumbnails (press conferences, operations, community events)
- Pagination at bottom

**Contact Page**:
- **Hero**: GNPC headquarters building
- **Info Cards**: 3-column (address, phone, email) with icons
- **Form + Map**: 60/40 split layout
- Embedded Google Maps for headquarters

### Global Footer
Dark green (#166534) background, 4-column layout:
- Logo + tagline (white text)
- Quick Links
- Resources (Annual Reports, Safety Guidelines)
- Contact info

Bottom bar: Copyright, social icons (LinkedIn, Twitter)

## Component Library

**Buttons**:
- Primary: Yellow (#eab308), dark text, rounded-lg, px-8 py-4, shadow-lg
- On Images: backdrop-blur-md, semi-transparent white background, no special hover states
- Secondary: Outlined green, transparent background
- All: hover shadow-xl, no transform

**Cards**:
- White background, rounded-lg, shadow-md
- Image cards: overflow-hidden, hover shadow-xl
- Featured: 3px yellow border-top
- Padding: p-8

**Image Overlays**:
- Standard: linear-gradient(to bottom, rgba(22, 101, 52, 0.7), rgba(22, 101, 52, 0.85))
- Light: rgba(0, 0, 0, 0.4) for product/station cards

**Forms**:
- Inputs: border-gray-300, focus:border-green-600, rounded, px-4 py-3
- Labels: font-medium, mb-2
- Submit: Primary yellow button style

**Icons**: Heroicons CDN, 24-32px, green or inherit color

**Badges**: Yellow background, dark text, rounded-full, px-3 py-1, uppercase, 12px

## Images

**Hero Images** (16:9 ratio, high resolution):
- Home: Offshore oil platform or refinery at golden hour (1920x1080)
- About: Modern office building or team collaboration (1920x1080)
- Services: Industrial operations, pipelines, distribution (1920x1080)
- Products: GNPC fuel station with customers (1920x1080)
- Stations: Exterior of flagship station (1920x1080)
- Exploration: Seismic survey ship or geological mapping (1920x1080)
- News: Press conference or ribbon cutting (1920x1080)
- Contact: GNPC headquarters building (1920x1080)

**Content Images**:
- Service cards: 800x600 (refining equipment, tanker trucks, retail operations, quality testing)
- Product cards: 400x300 (fuel pumps, lubricant bottles, convenience store)
- Station cards: 600x400 (various GNPC locations)
- News thumbnails: 600x400 (events, announcements)
- Team photos: 400x400 (leadership headshots)
- Timeline: 500x350 (historical milestones)

**Image Treatment**: Dark overlays for text legibility, rounded-lg corners, subtle zoom on hover for cards

## Responsive Breakpoints
- Mobile (< 768px): Single column, stacked layouts, reduced hero heights (50vh)
- Tablet (768-1024px): 2-column grids
- Desktop (> 1024px): Full multi-column layouts

## Interactions
- Smooth scroll within pages
- Image cards: subtle scale (1.02) on hover
- Navigation: underline slide-in animation on active page
- Forms: inline validation with green/red indicators
- Mobile menu: slide-in with fade overlay
- Map: custom green markers with info popups

## Accessibility
- WCAG AA contrast (white text on dark overlays, dark green on white)
- Yellow focus outlines (2px)
- Alt text for all imagery describing context
- Keyboard navigation
- Semantic HTML5 structure

This creates a premium petroleum industry digital experience with sophisticated photography, professional layouts, and strategic use of GNPC's brand colors throughout the multi-page architecture.