interface ThemeRaw {
  /** Hexo config data */
  theme_config: {
    menu: GeneralOptions
    custom_menu: GeneralOptions
    avatar: GeneralOptions
    theme: GeneralOptions
    site: StringConfig
    socials: StringConfig
    custom_socials: GeneralOptions
    site_meta: GeneralOptions
    plugins: GeneralOptions
    version: string
  }
}

interface SwitchConfig {
  [key: string]: boolean
}

interface StringConfig {
  [key: string]: string
}

interface GeneralOptions {
  [key: string]: any
}

export class ThemeConfig {
  /** Menu config data */
  menu: ThemeMenu = new ThemeMenu()
  /** Avatar config data */
  avatar: Avatar = new Avatar()
  /** Theme config data */
  theme: Theme = new Theme()
  /** Site config data */
  site: Site = new Site()
  /** Socials config data */
  socials: Social = new Social()
  /** Meta data for the site */
  site_meta: SiteMeta = new SiteMeta()
  /** Plugin configs */
  plugins: Plugins = new Plugins()
  /** Theme version */
  version = ''

  /**
   * Model class for Hexo theme config
   *
   * @param raw Config data generated from Hexo
   */
  constructor(raw?: ThemeRaw) {
    const rawConfig = raw && raw['theme_config']
    if (rawConfig) {
      this.menu = new ThemeMenu(rawConfig.menu)
      this.avatar = new Avatar(rawConfig.avatar)
      this.theme = new Theme(rawConfig.theme)
      this.site = new Site(rawConfig.site)
      this.socials = new Social(rawConfig.socials)
      this.plugins = new Plugins(rawConfig)
      this.site_meta = new SiteMeta(rawConfig.site_meta)
      this.version = rawConfig.version
    }
  }
}

interface ObMenu {
  menus: { [pathName: string]: Menu }
}

export class ThemeMenu implements ObMenu {
  menus: { [pathName: string]: Menu } = {
    Home: new Menu({
      name: 'Home',
      path: '/',
      i18n: {
        cn: '首页',
        en: 'Home'
      }
    })
  }

  /**
   * Model class for Hexo theme's menu set
   *
   * @param raw Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    const extract: GeneralOptions = {
      About: {
        name: 'About',
        path: '/about',
        i18n: {
          cn: '关于',
          en: 'About'
        }
      },
      Archives: {
        name: 'Archives',
        path: '/archives',
        i18n: {
          cn: '归档',
          en: 'Archives'
        }
      },
      Tags: {
        name: 'Tags',
        path: '/tags',
        i18n: {
          cn: '标签',
          en: 'Tags'
        }
      }
    }

    const defaultMenus = Object.keys(extract)
    if (raw) {
      // Theme default menus
      for (const menu of defaultMenus) {
        if (typeof raw[menu] === 'boolean' && raw[menu]) {
          Object.assign(this.menus, { [menu]: new Menu(extract[menu]) })
        }
      }
      // Theme custom