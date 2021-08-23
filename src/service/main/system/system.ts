import boRequest from '../../index'

import type { IDataType } from '@/service/request/types'

export function getPageListData(url: string, queryInfo: any) {
  return boRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
