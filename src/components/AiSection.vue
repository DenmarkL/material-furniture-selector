<script setup>
    const props = defineProps([
    'aiSummary',
    'generating',
    'generateSummary'
    ])
</script>

<template>
  <div class="ai-section">
    <button class="ai-btn" @click="generateSummary" :disabled="generating">
      <span v-if="generating">Loading...</span>
      <span v-else>Generate AI Summary</span>
    </button>
    

    <div v-if="aiSummary" class="ai-output">
      <div class="ai-chip">FeelDX AI · Analysis</div>
    
      <div class="ai-section-title">Selected Materials</div>
      <div v-for="line in aiSummary.materials" :key="line">
        <span class="ai-bullet">— </span><span>{{ line }}</span>
      </div>

      <div class="ai-section-title">Cost Outlook</div>
      <div v-for="line in aiSummary.cost" :key="line">
        <span class="ai-bullet">— </span><span>{{ line }}</span>
      </div>

      <div v-if="aiSummary.issues.length">
        <div class="ai-section-title">Design Considerations</div>
        <div v-for="line in aiSummary.issues" :key="line">
          <span class="ai-bullet">— </span><span>{{ line }}</span>
        </div>
      </div>

      <div v-if="aiSummary.missing.length">
        <div class="ai-section-title">Missing Selections</div>
        <div v-for="line in aiSummary.missing" :key="line">
          <span class="ai-bullet">— </span><span>{{ line }}</span>
        </div>
      </div>

      <div class="ai-section-title">Recommended next steps</div>
      <div v-for="(line, i) in aiSummary.next" :key="line">
        <span class="ai-bullet">— </span><span>{{ i + 1 }}.</span><span>{{ line }}</span>
      </div>

    </div>
  </div>
</template>

