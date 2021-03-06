import { posix as path } from 'path'

function find (arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key])
}

function isUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

function joinUrl (...args) {
  return path.join(...args).replace(':/', '://')
}

function getRouteParams (options) {
  // routerBase
  const routerBase = options.router.base

  // publicPath
  let publicPath
  if (isUrl(options.build.publicPath)) {
    publicPath = options.build.publicPath
  } else {
    publicPath = joinUrl(routerBase, options.build.publicPath)
  }

  return {
    routerBase,
    publicPath
  }
}

function startCase (str) {
  return str[0].toUpperCase() + str.substr(1)
}

module.exports = {
  find,
  isUrl,
  joinUrl,
  getRouteParams,
  startCase
}
