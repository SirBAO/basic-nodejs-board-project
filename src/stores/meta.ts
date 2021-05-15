import { defineStore } from 'pinia'
import { i18n } from '@/locales/index'
import { useAppStore } from './app'

interface StateData {
  title: string
  description: string
  links: string[]
  scripts: string[]
  meta: string[]
}

export const useMetaStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'metaStore',
  state: (): StateData => ({
    title: '',
    description: '',
    links: [],
    scripts: [],
    meta: []
  }),
  getters: {
    /**
     * Returns the title of the current page
     *
     * @remarks
     * Will be combining the current page title and the website title with a `-`.
     * For article detail page, the title will just be the title of the article.
     *
     * @return `"[page-title]` - `[website-title]"`
     */
    getTitle(): string {
      const appStore = useAppS