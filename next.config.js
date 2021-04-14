const withImages = require('next-images')
// When exporting this config with 'next-images' package as seen here
// Ensure to specify "Output" directory on vercel dashboard
// with the same value in "distDir" in the config below
// Otherwise the deployment will fail on vercel with error 'routes-manifest.json couldn't be found'
module.exports = withImages({
  distDir: 'build',
  target: 'serverless',
})
