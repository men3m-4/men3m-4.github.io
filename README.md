# Hi, this is my personal website!

My name is Mohamed Abdelmonem, I am a Mechatronics and Robotics Engineer with hands-on expertise in robotics, autonomous vehicles, and marine engineering.

This repo contains the source code to my personal website.

Checkout my site at: https://men3m-4.github.io/

## Development

To install dependencies:

```bash
npm install
```

To run it locally:

```bash
npm start
```

To build for production:

```bash
npm run build
```

## Deployment

This site is automatically deployed using GitHub Actions. When you push to the `production` branch, it will:

1. Build the Gatsby site
2. Deploy to GitHub Pages
3. Update your live site

## Quality Assurance

### Pull Request Checks

Every Pull Request automatically triggers a build check to ensure:

- Dependencies install correctly
- Gatsby builds successfully
- No breaking changes are introduced

## Manual Deployment

Running this command in your local terminal will deploy your current branch to "main" branch and update gh pages. There is no checks, and forces update immediately

```bash
npm run deploy
```
