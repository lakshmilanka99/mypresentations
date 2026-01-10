# Presentation Creation Guide

## Quick Start

1. **Create a presentation folder**
   ```bash
   mkdir presentations/my-presentation-name
   ```

2. **Ask GitHub Copilot**
   ```
   Create a presentation about [your topic] with:
   - Interactive charts showing [data/metrics]
   - Beautiful graphics and animations
   - Professional color scheme
   - Code examples with syntax highlighting
   ```

3. **Save and view**
   - Save as `presentations/my-presentation-name/index.html`
   - Open in browser to view

## Folder Organization

### For Each Presentation

```
presentations/my-presentation/
├── index.html              # Main presentation file
├── assets/
│   ├── images/            # Presentation images
│   ├── data/              # JSON/CSV data files
│   └── custom.css         # Additional styles (optional)
└── README.md              # Presentation notes
```

## Customization Tips

### Using Shared Assets

Reference shared resources from presentations:
```html
<!-- Shared logo -->
<img src="../../shared-assets/images/logo.png">

<!-- Shared stylesheet -->
<link rel="stylesheet" href="../../shared-assets/css/common.css">
```

### Adding Custom Styles

Create `assets/custom.css` in your presentation folder for additional styling without modifying the main HTML.

### Data-Driven Charts

Store data in `assets/data/` folder:
```
assets/data/
├── sales-data.json
├── metrics.csv
└── timeline.json
```

## Best Practices

1. **One presentation = One folder** - Keep everything organized
2. **Use descriptive names** - `agile-methodology` not `presentation1`
3. **Document your presentations** - Add a README.md with context
4. **Optimize images** - Compress before adding to reduce file size
5. **Test responsiveness** - View on mobile/tablet before presenting

## Copilot Prompts Examples

### For Technical Presentations
```
Create a technical presentation about Kubernetes architecture with:
- Architecture diagrams
- Interactive deployment examples
- Code snippets with YAML configurations
- Performance comparison charts
```

### For Business Presentations
```
Create a business presentation about Q4 results with:
- Revenue charts and growth metrics
- Market comparison visualizations
- Professional blue/gray color scheme
- Executive summary slide
```

### For Educational Content
```
Create an educational presentation about Python basics with:
- Interactive code examples
- Step-by-step tutorials
- Quizzes for each section
- Colorful, engaging design
```

## Troubleshooting

**Charts not displaying?**
- Check console for CDN errors
- Verify Chart.js is loaded
- Ensure data format is correct

**Images not loading?**
- Use absolute or correct relative paths
- Check file extensions match
- Verify images exist in assets folder

**Animations not smooth?**
- Test in different browsers
- Check GPU acceleration
- Reduce animation complexity

## Resources

- [Reveal.js Documentation](https://revealjs.com/)
- [Chart.js Examples](https://www.chartjs.org/docs/latest/samples/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
