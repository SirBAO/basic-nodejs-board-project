<script lang="ts">
import { defineComponent, h } from 'vue'

export const DEFAULT_BACKGROUND = 'var(--skeleton-bg, #eeeeee)'
export const DEFAULT_HIGHLIGHT = 'var(--skeleton-hl, #f5f5f5)'
export const SkeletonStyle = {
  backgroundColor: DEFAULT_BACKGROUND,
  backgroundImage: `linear-gradient(
    90deg,
    ${DEFAULT_BACKGROUND},
    ${DEFAULT_HIGHLIGHT},
    ${DEFAULT_BACKGROUND}
  )`,
  animation: '',
  height: 'inherit',
  width: 'inherit',
  borderRadius: '3px',
  content: '"&zwnj;"'
}

export default defineComponent({
  name: 'ObSkeletonTheme',
  props: {
    color: {
      type: String,
      default: DEFAULT_BACKGROUND
    },
    highlight: {
      type: String,
      default: DEFAULT_HIGHLIGHT
    },