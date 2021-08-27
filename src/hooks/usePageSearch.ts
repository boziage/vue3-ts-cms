import { ref } from 'vue'
import type PageContent from '@/components/page-content'

export function usePageSearch() {
  const PageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    PageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    PageContentRef.value?.getPageData(queryInfo)
  }
  return [PageContentRef, handleResetClick, handleQueryClick]
}
