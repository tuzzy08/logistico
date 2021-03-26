module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  // this plugin removes 'ReferenceError: React is not defined' error in jest tests
  plugins: ['react-require']
}
