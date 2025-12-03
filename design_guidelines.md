# Design Guidelines: Sivil Toplum Kuruluşu Web Sitesi

## Design Approach
**System-Based with Custom Adaptation**: Using Material Design principles for clean, accessible forms and admin interfaces, adapted with the organization's color identity and community-focused aesthetic.

## Color Palette
**Primary Yellow Tones:**
- Accent Yellow: #F59E0B (amber-500) - for CTAs and highlights
- Light Yellow: #FEF3C7 (amber-100) - for backgrounds and subtle accents
- Yellow Hover: #D97706 (amber-600)

**Primary Navy Tones:**
- Navy Blue: #1E40AF (blue-700) - for headings and primary text
- Medium Navy: #3B82F6 (blue-500) - for interactive elements
- Light Navy: #DBEAFE (blue-100) - for section backgrounds

**Foundation:**
- Base: #FFFFFF - main background
- Light Gray: #F3F4F6 (gray-100) - card backgrounds
- Text: #1F2937 (gray-800) - body text
- Border: #E5E7EB (gray-200)

## Typography System
**Fonts:** Inter (primary), system-ui fallback

**Hierarchy:**
- Hero/H1: 3xl to 4xl, font-bold, navy blue
- Section Headers/H2: 2xl to 3xl, font-semibold, navy blue
- Subsection/H3: xl to 2xl, font-semibold
- Body: base to lg, regular, gray-800
- Form Labels: sm, font-medium, gray-700
- Buttons: base, font-medium

## Layout System
**Spacing Units:** Tailwind's 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Single-Page Structure:**
1. **Header/Navigation** - sticky, white background with subtle shadow, yellow accent on active items
2. **Hero Section** - 60vh, light navy gradient background, centered content with organization logo and tagline
3. **Hakkımızda** - full-width, white background, max-w-4xl content
4. **Üyeler** - positioned as a floating card in top-right (desktop) or below Hakkımızda (mobile), light gray background
5. **Etkinlikler** - light yellow background section, grid layout for event cards
6. **Üye Kayıt Formu** - white background, centered, max-w-2xl, navy border accents

**Container Widths:**
- Main content: max-w-6xl
- Forms: max-w-2xl
- Text blocks: max-w-4xl

## Component Library

### Navigation
- Horizontal menu with logo left, links right
- Yellow underline on active/hover states
- Mobile: hamburger menu with slide-in drawer

### Üyeler Card (Floating)
- White card with subtle shadow
- Grid of member entries (3 columns on desktop)
- Each member: avatar placeholder circle (navy background), name bold, role text-sm gray

### Etkinlikler Cards
- White cards on light yellow background
- Date badge in top-right corner (navy background, yellow text)
- Title (navy), description (gray), subtle hover lift effect

### Üye Kayıt Form
- Clean, spacious form layout (gap-6)
- Input fields: border-gray-300, focus ring yellow
- Textarea for "kendinizi tanıtın" and "mesaj" - min-height adequate
- Primary button: yellow background, navy text, hover state darker yellow
- All inputs with proper labels above

### Admin Panel
**Login Page:**
- Centered card (max-w-md)
- Simple username/password fields
- Yellow submit button

**Dashboard Layout:**
- Sidebar navigation (navy background, yellow active state)
- Main content area with tabs for different sections
- Clean tables for viewing submissions
- Inline editing capability for content sections
- Action buttons: yellow primary, gray secondary

### Buttons
- Primary: yellow background, navy text, rounded-lg, px-6 py-3
- Secondary: white background, navy border and text
- All buttons with subtle shadow and smooth hover transitions

### Form Inputs
- Consistent height (h-12 for inputs, min-h-32 for textareas)
- Rounded corners (rounded-lg)
- Clear focus states with yellow ring
- Error states with red border and text

## Images
**Hero Section:**
- Large background image showcasing community/organization activities
- Subtle navy overlay (opacity 40%) for text readability
- Centered white text with organization name and mission statement

**Member Photos:**
- Circular avatars (96x96px) for each member
- Placeholder navy circles with initials if no photo

**Event Cards:**
- Optional featured image at top of each card (16:9 ratio)
- If no image, use solid light yellow background

## Accessibility & Interaction
- All form fields with visible labels and placeholders
- Minimum touch target 44x44px
- Focus indicators on all interactive elements (yellow ring)
- High contrast text throughout (WCAG AA)
- Smooth scroll behavior for navigation links
- Loading states for form submissions (yellow spinner)

## Admin Panel Specific
- Clean data tables with alternating row backgrounds
- Modal overlays for editing content (white background, centered)
- Toast notifications for successful actions (yellow accent)
- Confirmation dialogs for deletions (red accent button)
- Rich text editor for "Hakkımızda" section with simple formatting tools

## Responsive Behavior
**Mobile (< 768px):**
- Single column layouts
- Üyeler section moves below Hakkımızda
- Stacked navigation menu
- Full-width form inputs

**Desktop (≥ 768px):**
- Multi-column grids where appropriate
- Floating Üyeler card
- Horizontal navigation
- Optimized form widths

## Design Principles
- **Clarity over complexity** - clean, uncluttered layouts
- **Community warmth** - yellow accents create welcoming feel
- **Professional trust** - navy provides stability and credibility
- **Easy management** - admin interface prioritizes simplicity
- **Accessible to all** - high contrast, clear labels, logical flow