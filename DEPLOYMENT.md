# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the `main` or `master` branch.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run and deploy your site

3. **Your site will be available at:**
   - `https://your-username.github.io/your-repo-name/`

## 📦 Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   cd profile_1
   npm install
   npm run build
   ```

2. **Configure base path:**
   - Edit `profile_1/vite.config.js`
   - Set `base: '/your-repo-name/'` (replace `your-repo-name` with your actual repository name)
   - Rebuild: `npm run build`

3. **Deploy the dist folder:**
   - Copy all contents from `profile_1/dist/` folder
   - Push them to the `gh-pages` branch, or
   - Upload them to the root of your repository's `gh-pages` branch

## ⚙️ Configuration

### For Repository Pages (username.github.io/repo-name/):
- The base path is automatically set by the GitHub Actions workflow
- No manual configuration needed

### For User/Organization Pages (username.github.io):
- Edit `profile_1/vite.config.js`
- Change `base: process.env.BASE_URL || '/'` to `base: '/'`
- Rebuild and deploy

## 🔧 Troubleshooting

### "File not found" error:
- Make sure the base path in `vite.config.js` matches your repository name
- Ensure `index.html` exists in the deployed folder
- Check that GitHub Pages is enabled and pointing to the correct branch/folder

### Assets not loading:
- Verify the base path is set correctly
- Check that all files in `dist/` folder are deployed
- Clear browser cache

### Routes not working:
- Ensure `basename` in `App.jsx` matches the base path
- The router automatically uses `import.meta.env.BASE_URL` from Vite config
