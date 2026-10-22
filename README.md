# Kamran Ali Memon — Developer Portfolio

Responsive black-and-violet portfolio built with Next.js, React and custom CSS.

## Run locally
1. Install Node.js LTS.
2. Extract this ZIP and open the folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Visit http://localhost:3000

## Before publishing
- Your uploaded portrait is included at `public/images/profile.jpg`.
- A generated CV is included at `public/resume.pdf`. Review its details and replace it with a verified final version if needed.
- Email and GitHub links are filled in from the details available. Add your exact LinkedIn profile URL in `src/components/Portfolio.jsx` if you want it displayed.
- Confirm that the featured project URLs still work before sharing the portfolio.

## Contact form
The form validates fields and prepares a message in the visitor's email app using `mailto:`. It does not send a message automatically. For direct delivery without opening an email app, connect a backend email endpoint or form service before production.

## Deploy
Push to GitHub and import the repository into Vercel. Ensure `public/resume.pdf` is present before deployment.
