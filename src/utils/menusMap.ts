import { RouteRecordRaw } from 'vue-router'
import { IBreakcrumb } from '@/base-ui/breadcrumb/types'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // webpack的函数，作用是加载目标文件夹
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // 因为取出路径第一个是.,需要去除
    const route = require('../router/main' + key.slice(1))
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // usermenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function mapPathToBreakcrumbs(
  userMenus: any[],
  currentPath: string
): IBreakcrumb[] {
  const breakcrumb: IBreakcrumb[] = []
  mapPathToMenus(userMenus, currentPath, breakcrumb)
  return breakcrumb
}

export function mapPathToMenus(
  userMenus: any[],
  currentPath: string,
  breakcrumb?: IBreakcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = mapPathToMenus(menu.children ?? [], currentPath)
      if (findMenu) {
        breakcrumb?.push({ name: menu.name })
        breakcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenusToPermission(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetRoute(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return permissions
}

export { firstMenu }
