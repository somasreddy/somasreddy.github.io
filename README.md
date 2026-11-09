# Somasekhar V - Portfolio

Personal portfolio site for Somasekhar V, Senior QA Automation Engineer.

Live site: https://somasreddy.github.io/

## What is in this repo

| Path | Purpose |
| --- | --- |
| `index.html` | Main portfolio page (hero, about, experience, skills, projects, contact) |
| `resume.html` | Printable web resume, with a Download PDF button |
| `Somasekhar_V_Resume.pdf` | Resume PDF linked from the site |
| `style.css` | Styles for the main page and resume page |
| `script.js` | Smooth-scroll navigation and active-link highlighting |
| `images/` | Photos, avatar, favicon and the link preview image (`og-image.png`) |
| `v2/` | An alternate version of the site (`QA Automation Architect` design) |
| `SOMASEKHAR_PORTFOLIO_KNOWLEDGE.md` | Working notes used when refreshing the resume and portfolio |

## Tech

Plain HTML, CSS and vanilla JavaScript. No build step and no framework.

- Fonts: Inter (Google Fonts)
- Icons: Lucide (loaded from unpkg), plus inline SVG for the GitHub and LinkedIn logos

## Run locally

```bash
git clone https://github.com/somasreddy/somasreddy.github.io.git
cd somasreddy.github.io
# open index.html in a browser, or serve the folder:
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

The site is served by GitHub Pages from the `main` branch. Merging to `main` publishes it.

## Updating content

- Text, projects and links: edit `index.html`. Add project links only where a real public page or repo exists.
- Resume: edit `resume.html`, then regenerate `Somasekhar_V_Resume.pdf` so the download matches.
- Styling: edit `style.css`.
- Link previews (WhatsApp, LinkedIn): Open Graph tags are in the `<head>` of `index.html`; the image is `images/og-image.png`.

## Contact

- LinkedIn: https://linkedin.com/in/somasreddy
- GitHub: https://github.com/somasreddy
