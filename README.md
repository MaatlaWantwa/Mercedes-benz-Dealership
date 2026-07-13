[README.md](https://github.com/user-attachments/files/29983580/README.md)
# Mercedes-benz-Dealership# Mercedes-Benz Gaborone — Dealership Website

A responsive, interactive single-page website for a Mercedes-Benz dealership in Gaborone, Botswana. Built with **Bootstrap 5**, custom **CSS**, and vanilla **JavaScript** — no build tools or frameworks required.

> This is a demo/template site with placeholder content, prices, and images. Swap in real inventory, photography, and contact details before using it for an actual business.

## Features

- Full range of Mercedes-Benz classes (Sedan, SUV, Coupe, AMG, Electric/EQ) rendered from a single JS data array
- Live category filter buttons (no page reload)
- Bootstrap modal with per-model specs, triggered from each car card
- Book-a-test-drive form with client-side validation
- Newsletter signup, testimonial carousel, animated stat counters
- Embedded Google Map pointed at Gaborone
- Fully responsive (mobile, tablet, desktop) with visible keyboard focus states and `prefers-reduced-motion` support

## Project Structure

```
mercedes-benz-gaborone/
├── index.html          # Main page markup
├── css/
│   └── style.css       # Design system + custom styling
├── js/
│   └── script.js       # Car data, filters, modal, form logic
├── images/              # Put your own model/showroom photos here
├── package.json         # Optional — only needed for the npm/live-server option below
├── .vscode/              # VS Code workspace settings (Live Server config + extension prompt)
└── README.md
```

## Running Locally

No build step needed — it's plain HTML/CSS/JS. Pick whichever option is easiest:

### Option A — VS Code + Live Server (recommended)

1. Open the `mercedes-benz-gaborone` folder in VS Code (`File → Open Folder…`).
2. VS Code will prompt "This workspace has extension recommendations" — click **Install** to add the **Live Server** extension (by Ritwick Dey). If it doesn't prompt, install it manually from the Extensions panel (search "Live Server").
3. Right-click `index.html` in the file explorer and choose **Open with Live Server**, or click **Go Live** in the bottom-right status bar.
4. Your default browser opens automatically at `http://127.0.0.1:5500` with live reload — the page refreshes whenever you save a file.

### Option B — VS Code integrated terminal + npm

Use this if you'd rather not install a VS Code extension.

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Open the folder in VS Code, then open a terminal (`` Ctrl+` `` / `` Cmd+` ``).
3. Run:
   ```bash
   npm install
   npm start
   ```
4. This launches `live-server` and opens the site at `http://127.0.0.1:5500` with live reload.

### Option C — No editor, just a browser

1. Double-click `index.html` to open it directly in a browser, **or** serve it so relative paths behave exactly as they would in production:
   ```bash
   # Python 3
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## Putting This on GitHub

```bash
cd mercedes-benz-gaborone
git init
git add .
git commit -m "Initial commit: Mercedes-Benz Gaborone dealership site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## Deploying with GitHub Pages (free hosting)

1. Push the repo to GitHub (steps above).
2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder, then **Save**.
4. Your site will be published at:
   `https://<your-username>.github.io/<your-repo-name>/`

## Customizing

- **Cars & prices**: edit the `CARS` array at the top of `js/script.js` — each entry auto-generates a card, modal content, and a test-drive dropdown option.
- **Images**: the site currently uses neutral placeholder images (`picsum.photos`) so it runs out of the box. Replace each `img` URL in `js/script.js` with your own licensed photography in `images/`.
- **Colors & fonts**: all design tokens (colors, spacing, radius) are declared as CSS custom properties at the top of `css/style.css` under `:root`.
- **Map & address**: update the `iframe` `src` and the contact list in the "Visit" section of `index.html`.
- **Dealership name/branding**: update the `.brand-text` in the navbar/footer and the page `<title>`.

## Tech Stack

- [Bootstrap 5.3](https://getbootstrap.com/) (via CDN)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (via CDN)
- Google Fonts: Marcellus (display), Inter (body)
- Vanilla JavaScript (ES6+, no dependencies)

## License

Free to use and adapt for your own project.
