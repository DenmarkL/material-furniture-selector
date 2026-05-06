<script setup>
const props = defineProps([
  'opt',
  'categoryId',
  'isSelected',
  'toggleOption',
  'costLabel'
])
</script>

<template>
  <div
    class="opt-card"
    :class="{ selected: isSelected(categoryId, opt.id) }"
    @click="toggleOption(categoryId, opt)"
  >
    <div class="opt-swatch" :style="{ background: opt.swatch }"></div>

    <div class="opt-name">{{ opt.name }}</div>

    <div class="opt-meta">
      <span class="cost-dot" :class="'cost-' + opt.cost"></span>
      {{ costLabel(opt.cost) }}
    </div>
  </div>
</template>