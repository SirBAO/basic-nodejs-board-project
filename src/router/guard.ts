import router from '@/router'
// import getPageTitle from '@/utils/get-page-title'
import { useAppStore } from '@/stores/app'
import { i18n } from '@/locales/index'
import { useMetaStore } from '@/stores/meta'

router.beforeEach(async (to, from, next) => {
  const appStore = useAppStore()
  const metaStore = useMetaStore()
  // start progress bar
  appStore.startLoading()

  // set page title
  const title = i18n.global.te(`menu.${String(to.name)}`)
    ? i18n.