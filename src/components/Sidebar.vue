<script setup>
defineProps(['rooms', 'selectedRoom'])
defineEmits(['selectRoom'])
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-title">Select Room</div>

    <div class="room-btn-group">
      <button
        v-for="room in rooms"
        :key="room.id"
        class="room-btn"
        :class="{ active: selectedRoom.id === room.id }"
        @click="$emit('selectRoom', room)"
      >
        <span class="room-icon">{{ room.icon }}</span>
        <span class="room-label">{{ room.label }}</span>
      </button>
    </div>
  </aside>
</template>