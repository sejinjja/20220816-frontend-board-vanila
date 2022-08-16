const history = window.history

export function Router (routerConfig) {
  return {
    push: function (path) {
      console.log('path', path)
      if (typeof path === 'string') {
        history.pushState(null, null, path)
      } else {
        history.pushState(path, null, path.path)
      }
    }
  }
}
