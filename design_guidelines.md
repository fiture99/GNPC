# GNPC Multi-Page Website Design Guidelines

## Design Approach
**Corporate Professional with Environmental Focus** - Drawing inspiration from energy sector leaders like Shell, BP, and Aramco, combined with modern government portal aesthetics. The design emphasizes trust, authority, and sustainability through rich green gradients and structured layouts.

## Color Palette (User-Specified)
- **Primary Dark Green**: #166534 (headings, primary buttons, key elements)
- **Primary Medium Green**: #15803d (cards, accents, active states)
- **Primary Light Green**: #22c55e (highlights, success states, subtle backgrounds)
- **Accent Yellow**: #eab308 (CTAs, highlights, important information badges)
- **Neutrals**: White (#ffffff), off-white (#f9fafb), gray scale for text hierarchy

**Gradient Applications**: Use green-to-green gradients (dark to medium) for hero sections, section backgrounds, and card overlays. Yellow accents sparingly for urgent CTAs and badges.

## Typography Hierarchy
**Font Stack**: Inter, -apple-system, Segoe UI, Roboto, sans-serif

- **H1 (Hero Headlines)**: 48-64px, font-weight 700, dark green, tight letter-spacing
- **H2 (Section Headers)**: 36-42px, font-weight 600, dark green
- **H3 (Card Titles)**: 24-28px, font-weight 600
- **Body Large**: 18-20px, font-weight 400, line-height 1.7
- **Body Standard**: 16px, font-weight 400, line-height 1.6
- **Small/Meta**: 14px, font-weight 400-500, reduced opacity

## Spacing System
**Tailwind Units**: Primarily use 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Component gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with px-6

## Layout Structure - Multi-Page Architecture

### Global Header (All Pages)
- Sticky navigation with subtle shadow on scroll
- Logo left (GNPC emblem + text lockup), navigation center/right
- Desktop: horizontal menu, Mobile: hamburger with slide-in overlay
- Navigation items: Home, About, Services, Products, Stations, Exploration, News, Contact
- Background: white with subtle green accent border-bottom on scroll

### Page-Specific Layouts

**Home Page**:
- **Hero Section**: Full-width gradient background (dark to medium green), centered content
  - Badge: "The Gambia's National Oil Company" (yellow background)
  - Headline + Subtext + 2 CTAs (primary yellow, secondary outlined)
  - Height: 85vh, no background image - pure gradient
- **Statistics Banner**: 4-column grid (mobile: 2x2), cards with icons, numbers, and labels
- **About Preview**: 2-column (60/40) - text left, Vision/Mission card right with green accent border
- **Services Preview**: 3-column grid, icon-title-description cards with hover lift effect
- **CTA Section**: Centered with gradient background, large button

**About Page**:
- **Hero**: Medium height (50vh) with gradient, breadcrumb navigation
- **History Timeline**: Vertical timeline with alternating content blocks
- **Vision/Mission**: Large feature cards, side-by-side on desktop
- **Values Grid**: 4-column icon cards (Strategic Exploration, Capacity Building, Good Governance, Excellence)

**Services Page**:
- **Hero**: Gradient with service overview text
- **Services Grid**: 2-column layout, each service gets substantial space with icon, title, detailed description, and "Learn More" link
- Alternating card backgrounds (white, light green tint)

**Products Page**:
- **Hero**: Product category overview
- **Product Categories**: Card-based grid
  - Fuel products (petrol, diesel, kerosene)
  - Lubricants (car oil, related products)
  - Additional services (car wash, spare parts, tire inflation)
- Each card: product image placeholder, title, description, specifications list

**Stations Page**:
- **Interactive Map Section**: Embedded map showing 7 locations with custom green markers
- **Station Cards Grid**: 3-column, each card contains:
  - Location name, address, operating hours
  - Services available icons
  - Directions link
- Locations: Banjul, Brikama Town, Bijilo, Farafenni, Basse Santa Su, Soma, and 7th station

**Exploration/Investment Page**:
- **Hero**: Compelling gradient background with opportunity headline
- **Opportunity Overview**: 2-column text + statistics
- **Partner Benefits**: Icon grid highlighting advantages
- **Inquiry Form Section**: Prominent card-based form
  - Fields: Company Name, Email, Area of Interest (dropdown), Message (textarea)
  - Green primary button
  - Side panel: Why Partner with GNPC points

**News Page**:
- **Hero**: Latest news headline feature
- **News Grid**: 3-column cards (mobile: 1-column)
  - Featured image placeholder
  - Date badge (yellow)
  - Title, excerpt
  - "Read More" link
- **Pagination**: Simple numbered navigation

**Contact Page**:
- **Hero**: Contact us message
- **3-Column Cards**: Address, Phone, Email with icons
- **Contact Form**: Full-width below cards
- **Map Embed**: GNPC headquarters location

### Global Footer (All Pages)
- Dark green background (#166534), light text
- 4-column layout: 
  - Column 1: GNPC logo + description
  - Column 2: Quick Links (All pages)
  - Column 3: Resources (Reports, Publications)
  - Column 4: Legal (Privacy, Terms)
- Bottom bar: Copyright, social links (if applicable)

## Component Library

**Buttons**:
- Primary: Yellow background (#eab308), dark text, rounded, px-8 py-3
- Secondary: Outlined green border, green text, same padding
- Hover: Slight lift (translateY), subtle shadow increase

**Cards**:
- White background, rounded corners (rounded-lg)
- Subtle shadow (shadow-md), hover: shadow-lg with slight lift
- Padding: p-6 to p-8
- Border option: 2px accent green or yellow for featured cards

**Icons**:
- Use Font Awesome or Heroicons via CDN
- Size: 24-32px for feature icons, 16-20px for inline icons
- Color: Inherit from parent or green accent

**Forms**:
- Input fields: Border gray, focus: green border, rounded
- Labels: Above inputs, medium font-weight
- Validation: Green success, red error states
- Submit buttons: Primary yellow style

**Badges/Tags**:
- Small rounded rectangles, yellow background for highlights
- px-3 py-1, uppercase text, 12-14px

## Images

**Hero Sections**: NO background images - use green gradients exclusively for corporate professionalism and brand consistency

**Content Images** (use placeholders):
- Service icons: 64x64px, simple line icons in green
- Product images: 400x300px rectangles for product cards
- News thumbnails: 16:9 ratio, 600x338px
- Station photos: 400x300px for location cards
- Team/facilities: 800x600px for about page

**Image Treatment**: Subtle rounded corners (rounded-lg), optional green tint overlay for brand consistency

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Interaction Patterns
- Smooth scroll between sections (within page)
- Page transitions: Instant load, fade-in content
- Hover effects: Cards lift (translateY -2px), buttons darken/lighten
- Navigation: Highlight active page with yellow underline
- Forms: Real-time validation feedback
- Mobile menu: Slide-in from right with overlay

## Accessibility
- Maintain WCAG AA contrast ratios (dark green on white passes)
- Focus indicators: Yellow outline on interactive elements
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support

## Performance Priorities
- Lazy load images below fold
- Optimize gradient rendering
- Minimize animation usage - only purposeful hover/scroll effects
- Use system fonts (already specified) for instant loading

This creates a cohesive, professional multi-page experience that positions GNPC as a modern, trustworthy national petroleum corporation while maintaining government-appropriate formality and accessibility.