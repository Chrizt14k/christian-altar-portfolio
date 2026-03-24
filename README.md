# Portfolio — Creative Computing (Level 6)

This is a minimal, dark-themed static portfolio scaffold. It’s designed to be easy to update with your YouTube project links, photography, and resume.

How to use
- Replace `resume.pdf` in the project root with your actual PDF resume.
- Replace project cards in `index.html` with your titles, descriptions, and YouTube `embed` links (set as the `data-video` attribute).
- Put photography files in an `assets/` folder and update the photo grid markup or replace the `.photo` placeholders.

To preview locally, open `index.html` in your browser. For a simple local server (recommended), run:

```powershell
# from this folder
python -m http.server 8000
# then open http://localhost:8000
```

Deployment
- Use GitHub Pages: push this repo and set Pages to serve from `main`/`root` or use `gh-pages` branch.
- Or deploy to Netlify / Vercel – just connect the repository.

Next steps I can help with
- Wire up a JSON file to list projects and render them automatically
- Add image thumbnails and lazy-loading
- Create a simple contact form
- Configure GitHub Pages deployment
