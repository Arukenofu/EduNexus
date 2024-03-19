<script setup lang="ts">

</script>

<template>
  <div class="teacher-wrap">

    <div class="teacher" v-for="teacher in 3">

      <div class="teacher-image" />

      <div class="teacher-info">
        <p class="teacher-name">
          О. И. Димашева

          <span>

          </span>
        </p>
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
    transition: transform 0.3s cubic-bezier(0, 0, 0.5, 1);
    cursor: pointer;
    display: flex;

    .teacher-image {
      height: 100%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      background-color: var(--bg-secondary);
      width: 45%;
    }

    .teacher-info {
      padding: 24px 12px;

      .teacher-name {
        font-weight: 700;
      }

    }

  }
}

</style>