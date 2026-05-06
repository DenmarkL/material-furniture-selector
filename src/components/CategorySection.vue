<script setup>
import OptionCard from './OptionCard.vue'

defineProps(['category', 'isSelected', 'toggleOption', 'costLabel'])
</script>

<template>
  <div class="category-section">
    <div class="cat-label">{{ category.label }}</div>

    <div class="options-grid">
      <OptionCard
        v-for="opt in category.options"
        :key="opt.id"
        :opt="opt"
        :categoryId="category.id"
        :isSelected="isSelected"
        :toggleOption="toggleOption"
        :costLabel="costLabel"
      />
    </div>
  </div>
</template>