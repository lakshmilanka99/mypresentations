# GitHub Copilot Microsite Prompt — AI in SDLC for NXOP

## ✅ Single Copy-Paste Prompt for GitHub Copilot Chat

**Instruction to Copilot:**

> Using the repository presentation instruction set (.copilot-instructions.md), generate a complete interactive web microsite presentation about **"AI in SDLC for NXOP"** targeted to **senior airline IT leadership, platform engineering, and SRE stakeholders**.
>
> The goal is to show how AI improves **delivery speed, reliability, vendor alignment, and operational maturity** for the NXOP platform — not just developer productivity.
>
> ### Deliverables
>
> Create the full file structure and working code:
>
> * `index.html` — semantic HTML with section-based layout
> * `styles.css` — modern enterprise UI, responsive, card layouts, gradients, animations
> * `script.js` — scroll animations, counters, Chart.js rendering, navigation
> * `/assets/images` and `/assets/icons` placeholders
>
> The site must run by opening `index.html` locally (no backend).
>
> ### Story Structure (each as a full-screen or near full-screen section)
>
> 1. **Hero — Why This Matters Now**
>
>    * Title: *Accelerating NXOP Delivery with AI Across the SDLC*
>    * Subtitle: *From requirements to reliability — improving speed, quality, and operational confidence*
>    * Animated headline and background gradient
> 2. **Problem — Growing Demand & Complexity**
>
>    * Integration growth, long feedback loops, manual testing, reactive ops
>    * Visual pipeline with bottlenecks highlighted
> 3. **Reframe — What AI in SDLC Really Means**
>
>    * Table or cards showing AI across: Planning, Dev, Test, Release, SRE, Maintenance
>    * Emphasize system-level productivity, not coding shortcuts
> 4. **Target Operating Model — AI-Enabled Pipeline**
>
>    * Horizontal delivery flow with AI assist points at each stage
>    * Animated process visualization
> 5. **NXOP Priority Use Cases**
>
>    * Integration dev acceleration
>    * Automated contract and regression testing
>    * Incident triage and observability intelligence
>    * Runbook and remediation suggestions
> 6. **Impact & Metrics (Charts Section)**
>
>    * Bar chart: Cycle time reduction before vs after AI
>    * Line chart: Deployment frequency trend
>    * Donut chart: Manual vs automated testing coverage
>    * Animated KPI counters (cycle time, MTTR, test coverage)
> 7. **Governance & Risk Controls**
>
>    * Guardrails: human approval, audit logs, security scanning, policy compliance
>    * Emphasize responsible AI usage
> 8. **Vendor & Partner Alignment**
>
>    * Expectations for AI-enabled co-build model
>    * Standardized telemetry and test automation
>    * Benefits: faster onboarding, consistency, lower risk
> 9. **Roadmap**
>
>    * Phase 1: Copilot + test generation
>    * Phase 2: Pipeline intelligence and risk scoring
>    * Phase 3: Predictive operations and proactive remediation
>    * Display as horizontal timeline or stepper
> 10. **Strategic Value to NXOP Platform**
>
>     * Scalability, reliability, vendor independence, faster regulatory response
>     * Business-aligned outcomes, not tool adoption
> 11. **Call to Action**
>
>     * Align on AI-enabled SDLC as operating model
>     * Include AI expectations in vendor contracts
>     * Fund automation alongside feature delivery
>     * Strong executive closing message
>
> ### Design & UX Requirements
>
> * Enterprise-grade modern look
> * Google Fonts (Inter / Poppins / Roboto)
> * Gradient section backgrounds and SVG dividers
> * Card-based layouts with hover effects
> * Scroll-triggered fade/slide animations
> * Smooth anchor navigation between sections
> * Optional light/dark mode toggle
>
> ### Technical Requirements
>
> * Vanilla JavaScript only
> * Chart.js for charts
> * IntersectionObserver for scroll animations
> * All assets referenced via relative paths
> * Comment code explaining major sections and logic
>
> ### Content Tone
>
> * Executive-friendly
> * Outcome-focused
> * Minimal jargon, but technically credible
> * Translate technical benefits into operational and business impact
>
> ### Final Output Expectation
>
> Produce production-quality HTML/CSS/JS that can be:
>
> * Opened locally
> * Hosted on GitHub Pages
> * Used directly in executive presentations
>
> Treat this as a **storytelling product demo**, not slide content converted to HTML.

---

## How to Use This Prompt

1. Create a new presentation folder in `/presentations/`
2. Open GitHub Copilot Chat in VS Code
3. Copy and paste the prompt above
4. Copilot will generate the complete microsite structure
5. Review and customize the generated content

## Alternative: Use Base Template

If you prefer starting with a structured template, use the base template in `/templates/microsite-base-template/` which includes:
- Pre-wired section scaffolding
- Animation hooks ready to use
- Chart.js setup
- KPI counter components
- Navigation structure

Then ask Copilot to fill in the content for specific sections.
