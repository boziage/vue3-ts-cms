import boRequest from '../../index'

import type { IDataType } from '@/service/request/types'

export function getPageListData(url: string, queryInfo: any) {
  return boRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/:id
export function deletePageData(url: string) {
  return boRequest.delete<IDataType>({
    url: url
  })
}

// url: /users
export function createPageData(url: string, newData: any) {
  return boRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return boRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
