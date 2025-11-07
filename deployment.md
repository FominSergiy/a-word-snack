# GitHub Pages Deployment Guide

This guide will help you deploy your Commute Book Recaps app to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your project files ready

## Step-by-Step Deployment

### 1. Update package.json

Open `package.json` and update the `homepage` field with your actual GitHub username and repository name:

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

**Example:**
If your GitHub username is `johndoe` and your repo is named `commute-recaps`:
```json
"homepage": "https://johndoe.github.io/commute-recaps"
```

### 2. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository (e.g., `commute-recaps`)
5. Choose **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

### 3. Initialize Git and Push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Commute Book Recaps app"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub (use main or master depending on your default branch)
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. Save the settings

### 5. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for the green checkmark (usually takes 1-3 minutes)
4. Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Troubleshooting

### Workflow Not Running?

Make sure:
- You pushed the `.github/workflows/deploy.yml` file
- You enabled GitHub Actions in your repository settings
- Your repository is public (or you have GitHub Pro for private repos)

### Build Failing?

Check the Actions tab for error messages. Common issues:
- Missing `homepage` field in `package.json`
- Node.js version incompatibility (workflow uses Node 18)
- Dependency installation issues

### Blank Page After Deployment?

This usually means the `homepage` field in `package.json` is incorrect. Make sure it matches:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

### 404 Errors for Resources?

- Clear your browser cache
- Check that the `homepage` URL is correct
- Wait a few minutes for GitHub's CDN to update

## Manual Deployment Trigger

You can manually trigger a deployment:
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select branch and click **Run workflow**

## Updating Your Site

To update your deployed site after making changes:

```bash
# Make your changes to the code

# Add and commit changes
git add .
git commit -m "Description of your changes"

# Push to GitHub
git push
```

The GitHub Action will automatically rebuild and redeploy your site!

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Follow GitHub's instructions to configure DNS

## Testing Locally Before Deployment

Always test your build locally before pushing:

```bash
# Build the project
npm run build

# Serve the build folder locally (install serve if needed)
npx serve -s build
```

Open http://localhost:3000 to test the production build.

## Workflow Details

The workflow (`.github/workflows/deploy.yml`) does the following:
1. Checks out your code
2. Sets up Node.js 18
3. Installs dependencies with `npm ci`
4. Builds the project with `npm run build`
5. Uploads the `build` folder as an artifact
6. Deploys to GitHub Pages

## Useful Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# Create a new branch for features
git checkout -b feature-name

# Switch back to main
git checkout main

# Pull latest changes
git pull origin main
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check the Actions tab for build logs and errors

---

**Your app will be live at:**
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

Happy deploying! 🚀