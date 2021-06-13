<template>
  <div class="block">
    <Feature v-if="themeConfig.theme.feature" :data="topFeature">
      <FeatureList :data="featurePosts" />
    </Feature>
    <template v-else>
      <horizontal-article class="mb-8" :data="posts.data[0] || {}" />
    </template>
    <span v-if="themeConfig.theme.feature">
      <Title id="article-list" :title="'titles.articles'" icon="article" />
    </span>
    <div class="main-grid">
      <div class="flex flex-col relative">
        <ul :class="tabClass">
          <li
            :class="{ active: activeTab === '' }"
            @click="handleTabChange('')"
          >
            <span class="first-tab" :style="activeTabStyle('')">
              {{ t('settings.button-all') }}
            </span>
          </li>
          <template v-if="categories && categories.length > 0">
            <li
              v-for="category in categories"
              :key="category.slug"
              :class="{ active: activeTab === category.slug }"
              @click="handleTabChange(category.slug)"
            >
              <span :style="activeTabStyle(category.slug)">
                {{ category.name }}
              </span>
              <b>
                {{ category.count }}
              </b>
            </li>
          </template>
          <template v-else-if="categories !== null">
            <li v-for="i in 6" :key="i" style="position: relative; top: -4px">
              <ob-skeleton tag="span" width="60px" height="33px" />
            </li>
          </template>
        </ul>

        <span :class="expanderClass" @click="expandHandler">
          <svg-icon icon-class="chevron" />
        </span>

        <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <template v-if="posts.data.length === 0">
            <li v-for="n in 6" :key="n">
              <Article :data="{}" />
            </li>
       