export let router
export function Sejui () {
  return {
    set router (_router) {
      if (router) {
        throw new Error('Router has already been declared')
      } else {
        router = _router
      }
    },
    get router () {
      return router
    }
  }
}
