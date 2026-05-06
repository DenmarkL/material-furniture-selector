<script setup>
// No props needed for now
</script>

<template>
  <header class="app-header">
    <div class="header-left">
      <div class="logo">
        Feel<span>DX</span>
      </div>

      <div class="tagline">
        Materials & Furniture Selector
      </div>
    </div>

    <!-- Optional right side (future use) -->
    <div class="header-right">
      <!-- You can add user menu, save button, etc -->
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: #c8d8a8;
  color: var(--char);
  padding: 28px 40px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #a8bc80;
}

.header-left {
  display: flex;   
  align-items: flex-end;
  gap: 24px;
}

/* Logo */
.logo {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 0.12em;
  line-height: 1;
}

.logo span {
  color: var(--bark);
  font-style: italic;
}

/* Tagline */
.tagline {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--bark);
  padding-bottom: 2px;
}

/* Right side placeholder */
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Responsive */
@media (max-width: 900px) {
  .app-header {
    padding: 18px 16px;
    flex-direction: row;     /* ← KEEP HORIZONTAL */
    align-items: center;
  }

  .header-left {
    gap: 12px;
  }

  .logo {
    font-size: 20px;
  }

  .tagline {
    font-size: 8px;
    letter-spacing: 0.18em;
  }
}
</style>