<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="controls">
    <h1>{{name}}</h1>

    <div class="select-wrap">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.controls {
  width: 100%;
  margin-bottom: 21px;
  display: flex;
  align-items: center;

  .select-wrap {
    display: flex;
    gap: 6px;
    margin-left: auto;

    .select {
      width: min-content;

      .content {
        background-color: var(--ui-secondary);
        border: none;
      }

      .group {
        background-color: var(--ui-secondary);
        padding: 6px !important;
        height: auto;
      }

      .option {
        background-color: var(--ui-secondary);
        padding: 6px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;

        &:hover {
          background-color: var(--bg-secondary);
        }
      }
    }
  }
}


@media screen and (max-width: 768px) {
  .controls {
    h1 {
      display: none;
    }

    .select-wrap {
    }
  }
}
</style>