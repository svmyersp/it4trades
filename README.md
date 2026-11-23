# IT4Trades Website

A four-page static website (Home, Services, About, Contact). Plain HTML, CSS and JavaScript. No build step.

## Files

- `index.html`, `services.html`, `about.html`, `contact.html`: the pages
- `css/styles.css`: shared styles
- `js/main.js`: shared scripts (mobile menu, accordions, tabs, contact form)
- `images/`: put `logo.png` here (required), and `founder.jpg` (optional)

## Before you publish

1. Add the logo file as `images/logo.png`.
2. Add Sebastian's photo as `images/founder.jpg`.
3. Open `js/main.js` and replace the placeholder in `LINKEDIN_PROFILE_URL` with the real LinkedIn profile address.

## Publish on GitHub Pages

1. Sign in to GitHub and click **New repository**.
2. Name it `it4trades`, set it to **Public**, and click **Create repository**.
3. Click **uploading an existing file** (or **Add file > Upload files**).
4. Drag in the contents of the `it4trades` folder: the four HTML files, `css/`, `js/`, `images/` and `README.md`. Keep the folder structure as it is.
5. Click **Commit changes**.
6. Go to **Settings > Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
9. Wait one to two minutes, then refresh the Pages settings. The live address will appear, usually `https://your-username.github.io/it4trades/`.

## Updating the site

Upload changed files to the same repository, or use **Add file > Upload files** again. GitHub Pages republishes automatically.

## Contact form

The form does not send data anywhere. It checks required fields and then shows a confirmation with a link to LinkedIn. To receive messages by email, a form service would need to be connected later.
