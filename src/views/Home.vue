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
          </template>

          <template v-else-if="!themeConfig.theme.feature">
            <template v-for="(post, key) in posts.data" :key="post.slug">
              <li v-if="key !== 0">
                <Article :data="post" />
              </li>
            </template>
          </template>

          <template v-else>
            <li v-for="post in posts.data" :key="post.slug">
              <Article :data="post" />
            </li>
          </template>
        </ul>

        <Paginator
          :pageSize="pagination.pageSize"
          :pageTotal="pagination.pageTotal"
          :page="pagination.page"
          @pageChange="pageChangeHanlder"
        />
      </div>
      <div>
        <Sidebar>
          <Profile :author="mainAuthor" />
          <RecentComment v-if="recentCommentEnable" />
          <TagBox />
        </Sidebar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Feature, FeatureList } from '@/components/Feature'
import { Article, HorizontalArticle } from '@/components/ArticleCard'
import { Title } from '@/components/Title'
import { Sidebar, TagBox, RecentComment, Profile } from '@/components/Sidebar'
import { usePostStore } from '@/stores/post'
import { FeaturePosts, PostList } from '@/models/Post.class'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import { useCategoryStore } from '@/stores/category'
import Paginator from '@/components/Paginator.vue'
import { useMetaStore } from '@/stores/meta'

export default defineComponent({
  name: 'Home',
  components: {
    Feature,
    FeatureList,
    Article,
    HorizontalArticle,
    T