<template>
  <div class="article-container">
    <span v-if="post.pinned" class="article-tag">
      <b>
        <svg-icon icon-class="pin" />
        {{ t('settings.pinned') }}
      </b>
    </span>
    <span v-else-if="post.feature" class="article-tag">
      <b>
        <svg-icon icon-class="hot" />
        {{ t('settings.featured') }}
      </b>
    </span>
    <div class="feature-article">
      <div class="feature-thumbnail">
        <img v-if="post.cover" class="ob-hz-thumbnail" v-lazy="post.cover" />
        <img v-else class="ob-hz-thumbnail" src="@/assets/default-cover.jpg" />
        <span class="thumbnail-screen" :style="bannerHoverGradient" />
      </div>
      <div class="feature-content">
        <span>
          <b v-if="post.categories && post.categories.length > 0">
            {{ post.categories[0].name }}
          </b>
          <b v-else-if="post.categories && post.categories.length <= 0">
            {{ t('settings.default-category') }}
          </b>
          <ob-skeleton v-else tag="b" height="20px" width="35px" />

          <ul>
            <template v-if="post.tags && post.tags.length > 0">
              <li v-for="tag in post.tags" :key="tag.slug">
                <em># {{ tag.name }}</em>
              </li>
            </template>
            <template v-else-if="post.tags && post.tags.length <= 0">
              <li>
                <em># {{ t('settings.default-tag') }}