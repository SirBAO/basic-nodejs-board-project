const symbolsCountTime = require('./symbols-count-time')
const truncateHTML = require('./truncate-html')
const toc = require('./toc')
const { generateUid, fetchCovers, filterHTMLCharacters } = require('./utils')

/**
 * Post Mappers
 */
function postMapper(post, configs) {
