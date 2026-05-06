<script setup>
import Summary from './Summary.vue'
import AiSection from './AiSection.vue'

defineProps([
  'selectedRoom',
  'hasSelections',
  'selectionsFor',
  'costLabel',
  'aiSummary',
  'generating',
  'generateSummary'
])
</script>

<template>
  <aside class="right-panel">
    <Summary
      :selectedRoom="selectedRoom"
      :hasSelections="hasSelections"
      :selectionsFor="selectionsFor"
      :costLabel="costLabel"
    />

    <AiSection
      :aiSummary="aiSummary"
      :generating="generating"
      :generateSummary="generateSummary"
    />
  </aside>
</template>