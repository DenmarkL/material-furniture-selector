<script setup>
defineProps([
  'selectedRoom',
  'hasSelections',
  'selectionsFor',
  'costLabel'
])
</script>

<template>
  <div class="summary-body">
    <div class="summary-room">
      <span class="icon">{{ selectedRoom.icon }}</span>
      <span>{{ selectedRoom.label }}</span>
    </div>

    <template v-if="hasSelections">
      <div
        v-for="cat in selectedRoom.categories"
        :key="cat.id"
        class="sel-group"
      >
        <template v-if="selectionsFor(cat.id).length">
          <div class="sel-group-name">{{ cat.label }}</div>

          <div
            class="sel-item"
            v-for="opt in selectionsFor(cat.id)"
            :key="opt.id"
          >
            <div
              class="sel-swatch-sm"
              :style="{ background: opt.swatch }"
            ></div>

            <span class="sel-name">{{ opt.name }}</span>
            <span class="sel-cost">{{ costLabel(opt.cost) }}</span>
          </div>
        </template>
      </div>
    </template>

    <div v-else class="empty-state">
      <span class="icon">🪴</span>
      No selections yet.<br />
      Pick materials above.
    </div>
  </div>
</template>