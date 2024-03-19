<script setup lang="ts">

</script>

<template>
  <div class="teacher-wrap">

    <div class="teacher" v-for="teacher in 3">

      <div class="teacher-image" />

      <div class="teacher-info">

      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">

.teacher-wrap {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  .teacher {
    flex: 1;
    border-radius: 6px;
    border: 1px solid var(--bg-secondary);
    aspect-ratio: 1/0.7;
    padding: 9px;
    transition: transform 0.3s cubic-bezier(0, 0, 0.5, 1);
    cursor: pointer;

  }
}

</style>