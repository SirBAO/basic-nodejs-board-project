const symbolsCountTime = require('./symbols-count-time')
const truncateHTML = require('./truncate-html')
const toc = require('./toc')
const { generateUid, fetchCovers, filterHTMLCharacters } = require('./utils')

/**
 * Post Mappers
 */
function postMapper(post, configs) {
  return {
    title: post.title,
    uid: generateUid('post_uid___' + post.title),
    slug: post.slug,
    date: post.date,
    updated: post.updated,
    comments: post.comments,
    path: 'api/articles/' + post.slug + '.json',
    keywords: configs.keywords,
    cover: post.cover || fetchCovers(post.content),
    content: post.content,
    feature: post.feature,
    pinned: post.pinned,
    text: truncateHTML(post.content, post.preview || 140),
    link: post.link,
    photos: post.photos,
    count_time: symbolsCountTime(post.content),
    categories: post.categories ? postCategoryMapper(post) : [],
    tags: post.tags ? postTagMapper(post) : [],
    toc: toc(post.content),
    author: authorMapper(post.author, configs),
    mapped: true
  }
}

function authorMapper(author, configs) {
  const configAuthors = configs.theme_config.authors

  if (typeof author === 'string' && configAuthors[author]) {
    return authorAttributes(configAuthors[author])
  } else if (typeof author === 'object') {
    return authorAttributes(author)
  } else {
    return authorAttributes({
      name: configs.theme_config.site.author,
      avatar:
        configs.theme_config.site.avatar || configs.theme_config.site.logo,
      link: configs.theme_config.site.link || '/',
      description: configs.theme_config.site.description,
      socials: configs.theme_config.socials
    })
  }
}

function authorAttributes(author) {
  return {
    name: author.name,
    slug: String(author.name).toLocaleLowerCase().replace(/[\s]+/g, '-'),
    avatar: author.avatar || '',
    link: author.link || '',
    description: author.description || '',
    socials: author.socials ? socialMapper(author.socials) : {}
  }
}

function socialMapper(socials) {
  return {
    github: socials.github || '',
    twitter: socials.twitter || '',
    stackoverflow: socials.stackoverflow || '',
    wechat: socials.wechat || '',
    qq: socials.qq || '',
    weibo: socials.weibo || '',
    zhihu: socials.zhihu || '',
    csdn: socials.csdn || '',
    juejin: socials.juejin || '',
    customs: socials.customs || {}
  }
}

function postListMapper(post, configs) {
  if (!post.mapped) post = postMapper(post, configs)
  return {
    title: post.title,
    uid: post.uid,
    slug: post.slug,
    date: post.date,
    updated: post.updated,
    comments: post.comments,
    path: post.path,
    keywords: configs.keywords,
    cover: post.cover,
    text: post.text,
    link: post.link,
    photos: post.photos,
    count_time: post.count_time,
    categories: post.categories,
    tags: post.tags,
    author: post.author,
    feature: post.feature,
    pinned: post.pinned
  }
}

function postCategoryMapper(post) {
  return post.categories.map(function (cat) {
    return {
      name: cat.name,
      slug: cat.slug,
      count: cat.posts.length,
      path: 'api/categories/' + cat.slug + '.json'
    }
  })
}

function postTagMapper(post) {
  return post.tags.map(function (tag) {
    return {
      name: tag.name,
      slug: tag.slug,
      count: tag.posts.length,
      path: 'api/tags/' + tag.slug + '.json'
    }
  })
}

/**
 * Category mappers.
 */

function categoryMapper(category) {
  const data = !category['data'] ? category : category.data
  return {
    name: data.name,
    path: data.path,
    slug: data.slug,
    count: data.count
  }
}

f