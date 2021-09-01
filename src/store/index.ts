import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'boziage',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentlist } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: rolelist } = roleResult.data
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menulist } = menuResult.data

      // 2.保存数据
      commit('changeEntireDepartment', departmentlist)
      commit('changeEntireRole', rolelist)
      commit('changeEntireMenu', menulist)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
