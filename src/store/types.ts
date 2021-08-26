export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}
export type IStoreType = IRootState & IRootWithModule

export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
}
