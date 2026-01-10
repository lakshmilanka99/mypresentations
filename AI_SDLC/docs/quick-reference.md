# Quick Reference: Creating Presentations with GitHub Copilot

## Two Approaches

### 1️⃣ Slide-Based Presentation (Reveal.js)
**Best for:** Traditional presentations, manual advancement, PDF export

**Template:** `templates/american-airlines-template.html`

**Quick Start:**
```bash
# Copy template
cp templates/american-airlines-template.html presentations/my-presentation/index.html

# Ask Copilot:
"Update this presentation to cover [topic] with [key points]"
```

---

### 2️⃣ Microsite Presentation (Scrolling)
**Best for:** Executive briefings, web deployment, rich interactivity

**Template:** `templates/microsite-base-template/`

**Option A - Copy & Customize:**
```bash
cp -r templates/microsite-base-template presentations/my-microsite
```

**Option B - Use Copilot Prompt:**
See [docs/copilot-microsite-prompt.md](copilot-microsite-prompt.md) for complete prompt

---

## Common Copilot Prompts

### For Slide Presentations
```
Create a presentation about [topic] with:
- Title slide
- Problem statement with current metrics
- Solution overview
- Impact metrics with charts
- Implementation roadmap
- Call to action

Use the American Airlines template styling.
```

### For Microsites
```
Using the microsite base template, create a presentation about [topic] targeted to [audience].

Include sections for:
1. Hero with key stats
2. Problem/Challenge
3. Solution approach
4. Use cases
5. Metrics with charts
6. Roadmap
7. Call to action

Update the chart data in script.js to show [specific data].
```

### Updating Existing Content
```
In the [section name] section, add/update:
- [Specific change]
- Keep the existing styling and animations
```

### Adding Charts
```
Add a new bar chart comparing [before] vs [after] for [metric].
Place it in the metrics section after the KPI cards.
```

---

## File Organization

```
presentations/
├── my-presentation-1/
│   ├── index.html          # Main file
│   ├── assets/             # Presentation-specific assets
│   └── README.md           # Documentation
│
├── my-microsite/
│   ├── index.html          # Main HTML
│   ├── styles.css          # Styles
│   ├── script.js           # JavaScript
│   ├── assets/
│   │   └── images/
│   └── README.md
```

---

## Logo & Assets

**AA Logo Location:** `shared-assets/images/aa.png`

**Using in slides:**
```html
<img src="../../shared-assets/images/aa.png" alt="American Airlines">
```

**Using in microsite:**
```html
<img src="assets/images/aa-logo.png" alt="American Airlines">
```
*(Copy logo to local assets folder first)*

---

## Customization Quick Wins

### Change Colors
In slide template (HTML `<style>` section):
```css
--aa-red: #C80A28;
--aa-dark-blue: #004B87;
```

In microsite (styles.css):
```css
:root {
    --primary: #004B87;
    --accent: #C80A28;
}
```

### Update Stats/Numbers
Find elements with `data-target`:
```html
<div class="stat-number" data-target="78">0</div>
```
Change `78` to your number - animation updates automatically!

### Modify Charts
In JavaScript section, find chart definition:
```javascript
data: {
    labels: ['Before', 'After'],
    datasets: [{
        data: [18, 3]  // Update these numbers
    }]
}
```

---

## Deployment

### Local Preview
Just open `index.html` in browser - no build needed!

### GitHub Pages
1. Push to GitHub
2. Settings > Pages > Select branch
3. Live at: `https://username.github.io/repo-name/`

### Share as File
Zip the folder and share - recipients just unzip and open `index.html`

---

## Tips for Best Results with Copilot

✅ **DO:**
- Be specific about data and metrics
- Reference existing sections by name
- Ask for "similar to [section]" when adding new content
- Specify audience (technical, executive, etc.)

❌ **DON'T:**
- Ask to "make it better" without specifics
- Mix slide and microsite templates
- Forget to specify data sources for charts

---

## Example Workflows

### Create New Slide Presentation
1. Copy template
2. Ask: "Create a 10-slide presentation about [topic] for [audience]"
3. Review and refine specific slides
4. Update charts with real data
5. Open in browser to present

### Create New Microsite
1. Copy base template OR use full prompt from docs
2. Customize hero stats
3. Update chart data
4. Add content to each section
5. Test scrolling and animations
6. Deploy to GitHub Pages

---

## Support & Documentation

- **Full Instructions:** [.copilot-instructions.md](.copilot-instructions.md)
- **Microsite Prompt:** [docs/copilot-microsite-prompt.md](docs/copilot-microsite-prompt.md)
- **Usage Guide:** [docs/usage-guide.md](docs/usage-guide.md)
- **Template READMEs:** Check each template folder

---

**Need help?** Ask Copilot:
```
"How do I [specific task] in this presentation?"
```

Copilot has access to all instruction files and will guide you!
