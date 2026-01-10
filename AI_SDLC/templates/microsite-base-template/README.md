# Microsite Base Template

## Overview
A production-ready base template for creating interactive web microsite presentations. This template provides all the plumbing pre-wired so you can focus on content rather than infrastructure.

## Features

### ✨ Pre-built Components
- **Responsive Navigation** with smooth scroll
- **Hero Section** with animated stats counters
- **Problem/Solution Sections** with card layouts
- **Interactive Charts** (Chart.js integration)
- **Timeline/Roadmap** visualization
- **Use Cases** showcase
- **Metrics Dashboard** with KPIs
- **CTA Section** with action cards
- **Dark/Light Mode** toggle

### 🎨 Design System
- American Airlines brand colors
- Google Fonts (Inter & Poppins)
- CSS variables for easy customization
- Responsive grid layouts
- Smooth animations
- Accessibility features

### 📊 Chart Types Included
- Bar chart (Cycle time reduction)
- Line chart (Deployment frequency)
- Donut chart (Test coverage)

### 🚀 Performance Optimized
- Lazy loading for images
- Intersection Observer for scroll animations
- Smooth scrolling
- Print-friendly styles

## File Structure

```
microsite-base-template/
├── index.html          # Main HTML with complete structure
├── styles.css          # Complete styling system
├── script.js           # All JavaScript functionality
├── assets/
│   ├── images/         # Place images here
│   │   └── aa-logo.png # American Airlines logo
│   └── icons/          # SVG icons if needed
└── README.md           # This file
```

## Quick Start

### 1. Copy Template
```bash
cp -r templates/microsite-base-template presentations/my-new-presentation
```

### 2. Update Content
Open `index.html` and customize:
- Section titles and content
- Stats numbers (data-target attributes)
- Chart data in `script.js`
- Add your images to `assets/images/`

### 3. Customize Branding
In `styles.css`, update CSS variables:
```css
:root {
    --primary: #004B87;    /* Your primary color */
    --accent: #C80A28;     /* Your accent color */
    --font-heading: 'YourFont', sans-serif;
}
```

### 4. Open in Browser
Simply open `index.html` in any modern browser - no build process required!

## Customization Guide

### Updating Stats Counters
In HTML, modify `data-target` attributes:
```html
<div class="stat-number" data-target="78" data-suffix="%">0</div>
```

### Modifying Charts
In `script.js`, find the chart sections and update data:
```javascript
data: {
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [{
        data: [10, 20, 30]
    }]
}
```

### Adding New Sections
1. Copy a section structure from `index.html`
2. Change the `id` attribute
3. Add animation class: `class="section your-section animate-on-scroll"`
4. Update navigation links

### Changing Color Scheme
All colors are defined in CSS variables at the top of `styles.css`. Update them once and they'll cascade throughout.

## Components Reference

### Hero Stats Card
```html
<div class="stat-card animate-on-scroll">
    <div class="stat-number" data-target="78">0</div>
    <div class="stat-label">% Label</div>
</div>
```

### Problem Card
```html
<div class="problem-card animate-on-scroll">
    <div class="problem-icon"><i class="fas fa-icon"></i></div>
    <h3>Title</h3>
    <p>Description</p>
</div>
```

### Use Case Card
```html
<div class="use-case-card animate-on-scroll">
    <div class="use-case-number">01</div>
    <h3><i class="fas fa-icon"></i> Title</h3>
    <p>Description</p>
    <div class="use-case-impact">Impact: <strong>Result</strong></div>
</div>
```

### Timeline Item
```html
<div class="timeline-item animate-on-scroll">
    <div class="timeline-marker phase-1">1</div>
    <div class="timeline-content">
        <h3>Phase Title</h3>
        <p class="timeline-period">Q1 2026</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</div>
```

## JavaScript Functions

### Available Utilities
```javascript
// Print the presentation
window.micrositeUtils.printPresentation();

// Copy text to clipboard
window.micrositeUtils.copyToClipboard('text');

// Show notification
window.micrositeUtils.showNotification('Message');
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for GitHub Copilot

When asking Copilot to fill in content:

1. **Be Specific**: "Update the use cases section with 4 cards about [topic]"
2. **Reference Existing Structure**: "Add a new section similar to #problem for [topic]"
3. **Update Data**: "Change the cycle time chart to show [new data]"
4. **Keep Branding**: Copilot will maintain AA colors and styling automatically

## Assets Needed

### Logo
Place your American Airlines logo at: `assets/images/aa-logo.png`
- Recommended: PNG with transparent background
- Size: 200px height recommended

### Images (Optional)
Add presentation-specific images to `assets/images/`
- Use lazy loading: `<img data-src="assets/images/photo.jpg" class="lazy">`

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and root folder
4. Your site will be live at `https://username.github.io/repo-name/`

### Local Server
```bash
python -m http.server 8000
# or
npx serve
```

## License
Internal use - American Airlines

## Support
For questions or issues, contact: nxop-platform@aa.com
