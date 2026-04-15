# Khaleel · Profile Card

Cyberpunk-styled personal profile card built with vanilla HTML, CSS, and JavaScript.

## Run Locally

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve with a local server
npx serve .
# or
python3 -m http.server 8000
```

## Project Structure

```
.
├── index.html   # Main HTML with semantic markup
├── style.css    # Dark theme styles with cyan/amber accents
├── script.js    # Live epoch timestamp + accessibility features
├── K1.jpg       # Avatar image
└── README.md
```

## Features

- Responsive layout (mobile, tablet, desktop)
- Live epoch timestamp (updates every second)
- Accessibility: ARIA live regions, keyboard navigation, WCAG AA contrast
- `prefers-reduced-motion` support
- Cyberpunk aesthetic with animated avatar ring

## Accessibility

- Semantic HTML (`<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`)
- Screen reader friendly with `aria-live` announcements
- Keyboard navigable with visible focus states
- High contrast text (WCAG AA compliant)
