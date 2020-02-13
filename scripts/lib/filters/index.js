const QUOTE_REGEX = /<p>:{3}([a-zA-Z0-9]+)\s?([\s\S]*?)(?:<\/p>\n|<br>)([\s\S]*?)(?:<p>|<br>):{3}<\/p>/gm
const QUOTE_TYPES = ['tip', 'warning', 'danger', 'details']
const TAG_REGEX = /^<\/?([ul|ol|p]+)>/g
const BLOCKQUOTE_REGEX = /<blockquote>\n([\s\S]*?)\n<\/blockquote>/gm
const QUOTE_LANG = {
  en: {
    tip: 'TIP',
    warning: 'WARNING',
    danger: 'WARNING',
    details: 'Details'
  },
  cn: {
    tip: '提示',
    warning: '注意',
    danger: '特别注意',
    details: '隐藏内容'
  }
}
const SVG = {
  tip: `<svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
<path fill="" d="M20.86 14.13C20 14.7 19.56 15.74 19.77 16.76C20.13 18.55 18.55 20.13 16.76 19.77C15.74 19.57 14.7 20 14.13 20.86C13.12 22.38 10.89 22.38 9.88 20.86C9.3 20 8.26 19.56 7.24 19.77C5.45 20.13 3.87 18.55 4.23 16.76C4.43 15.74 4 14.7 3.14 14.13C1.62 13.12 1.62 10.89 3.14 9.88C4 9.3 4.44 8.26 4.23 7.24C3.87 5.45 5.45 3.87 7.24 4.23C8.26 4.44 9.3 4 9.87 3.14C10.88 1.62 13.11 1.62 14.12 3.14C14.7 4 15.74 4.44 16.76 4.23C18.55 3.87 20.13 5.45 19.77 7.24C19.56 8.26 20 9.3 20.86 9.87C22.38 10.88 22.38 13.12 20.86 14.13Z" undefined="1"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="" d="M12.01 15C12.01 14.5 12.01 14.5 12.01 14.5C12.04 13.75 13 13.46 14.04 12.2C14.41 11.74 14.69 11.41 14.86 10.85C15.15 9.95 14.92 9.18 14.86 9.02C14.8 8.79 14.52 8 13.72 7.46C13.06 7.02 12.42 7 12.14 7C11.9 7 11.36 7 10.78 7.3C10.28 7.56 9.98 7.9 9.83 8.1C9.24 8.82 9.06 9.63 9 10.06"></path>
<path stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="" d="M11.99 18H12.01"></path>
</svg>`,
  warning: `<svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
<path fill="" d="M20.86 14.13C20 14.7 19.56 15.74 19.77 16.76C20.13 18.55 18.55 20.13 16.76 19.77C15.74 19.57 14.7 20 14.13 20.86C13.12 22.38 10.89 22.38 9.88 20.86C9.3 20 8.26 19.56 7.24 19.77C5.45 20.13 3.87 18.55 4.23 16.76C4.43 15.74 4 14.7 3.14 14.13C1.62 13.12 1.62 10.89 3.14 9.88C4 9.3 4.44 8.26 4.23 7.24C3.87 5.45 5.45 3.87 7.24 4.23C8.26 4.44 9.3 4 9.87 3.14C10.88 1.62 13.11 1.62 14.12 3.14C14.7 4 15.74 4.44 16.76 4.23C18.55 3.87 20.13 5.45 19.77 7.24C19.56 8.26 20 9.3 20.86 9.87C22.38 10.88 22.38 13.12 20.86 14.13Z" undefined="1"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="" d="M12 8V13"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="" d="M12 15.99V16.01"></path>
</svg>
`,
  danger: `<svg width="24" hei