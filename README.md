# AWK Labs Personal Site

A responsive single-page site that highlights resume experience, portfolio projects, and recent writing via a Substack embed. The layout includes persistent social links and a hero section for quick navigation.

## Features
- **Hero intro** with quick calls-to-action and experience stats.
- **Resume snapshot** cards for roles, skills, and download/request options.
- **Portfolio grid** with tagged projects across frontend, data, automation, and full-stack work.
- **Blog section** embedding a Substack newsletter feed.
- **Global social links** (LinkedIn, GitHub, Twitter, email) in header and footer.

## Project structure
- `index.html` — Page markup and section anchors for resume, portfolio, and blog.
- `styles.css` — Typography, layout, responsive grid, and component styling.
- `script.js` — Handles mobile navigation toggle behavior.

## Local development
1. Clone the repository.
2. Open `index.html` directly in your browser, or serve the folder locally:
   ```sh
   npx serve .
   # or
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000` to view the site.

## Customization
- Update resume content, project details, and social URLs in `index.html`.
- Adjust colors, spacing, and typography tokens in `styles.css`.
- Expand navigation or interactive behaviors in `script.js`.
