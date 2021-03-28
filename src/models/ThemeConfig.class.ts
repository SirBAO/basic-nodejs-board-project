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
   * Model class f