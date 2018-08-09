/* jshint esversion: 6 */
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const _config = require('./components/Config')

const dev = _config.env !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()


// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: _config.cacheTime
})




app.prepare().then(() => {

  const server = express()

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/post/:slug', (req, res) => {
    const queryParams = { slug: req.params.slug }
    renderAndCache(req, res, '/post', queryParams)
  })

  server.get('/search/*', (req, res) => {
    renderAndCache(req, res, '/search')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })




    server.listen(_config.port, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:' + _config.port)
    })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}