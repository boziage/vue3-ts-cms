type IFormType = 'input' | 'password' | 'select' | 'datepicker'
type IColLayout = {
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
  span?: number
}

export interface IFormItem {
  type: IFormType
  colLayout?: IColLayout
  label?: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
}
