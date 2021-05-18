import { defineStore } from 'pinia'

export const useNavigatorStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'navigatorStore',
  state: () => ({
    openMenu: false,
    openNavigator: false
  }),
  getters: {},
  actions: {
    toggleMobileMenu() {
      const bodyEl = document.querySelector('body')
      let scrollPosition = 0
      const appEl = document.getElementById('app')
      const appWrapperEl = document.getElementById('App-Wrapper')
      const appMobileEl = document.getElementById('App-Mobile-Profile')
      if (appEl && appWrapperEl && appMobileEl && bodyEl) {
        if (this.openMenu === false) {
          scrollPosition = window.pageYOffset
          bodyEl.style.overflow = 'hidden'
