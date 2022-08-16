import { Sejui } from './lib/Sejui'
import { Router } from './lib/Router'
import { routerConfig } from './router'

const sejui = new Sejui()
sejui.router = new Router(routerConfig)

// todo 각각의 커스텀 엘리먼트에서 사용 합니다.
window.$sj = sejui
