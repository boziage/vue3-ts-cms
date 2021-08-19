export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}
export type IStoreType = IRootState & IRootWithModule

export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
