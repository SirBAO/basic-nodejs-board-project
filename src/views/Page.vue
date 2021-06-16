<template>
  <div>
    <Breadcrumbs :current="pageTitle" />
    <PageContainer :post="pageData" :title="pageTitle">
      <div id="comments">
        <Comment
          :title="pageData.title"
          :body="pageData.text"
          :uid="pageData.uid"
        />
      </div>
    </PageContainer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from 'vue'
import { useArticleStore } from '@/stores/article'
import { Page } from '@/models/Article.class'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useMetaStore } from '@/stores/meta'
import PageContainer from '@/components/PageContainer.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Comment from '@/components/Comment.vue'

export default defineComponent({
  name: 'Page',
  components: { PageContainer, Breadcrumbs, Comment },
  setup() {
    const art