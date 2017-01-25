module.exports = {
  directories: {
    models: 'server/models',
    routes: 'server/routes',
    reducers: 'client/reducers',
    components: 'client/components'
  },
  exclude: [
    'Jokes.jsx',
    'Jokes.test.jsx',
    'auth.js',
    'out.js',
  ],
  reduxStore: 'client/store.js',
  dbInstance: 'server/models/db.js',
}
