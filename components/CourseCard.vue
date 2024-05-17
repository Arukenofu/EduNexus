<script setup lang="ts">
import type { Courses } from "~/interfaces/Courses";

defineProps<Courses>();

</script>

<template>
  <div class="cards-wrap">
    <nuxt-link
      class="card"
      v-for="course in courses"
      :key="course.organization_name"
      :to="`/home/course/${course.title}`"
    >

      <div class="image" :style="`background-image: url('${course.image}')`" />

      <div class="info">
        <div class="info-image" />
        <span class="info-text">
          {{course.organization_name}}
        </span>
      </div>

      <p>
        {{ course.title }}
      </p>

      <span class="type">
        Степень
      </span>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.cards-wrap {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  .card {
    flex: 1;
    border-radius: 15px;
    border: 2px solid var(--border);
    aspect-ratio: 1/1.1;
    padding: 9px;
    transition: transform 0.3s cubic-bezier(0, 0, 0.5, 1);
    cursor: pointer;
    position: relative;
    text-decoration: none;
    --card-padding: 0 6px;

    &:focus-visible {
      outline: 3px solid var(--text);
    }

    .image {
      background-color: var(--bg-secondary);
      width: 100%;
      aspect-ratio: 16/10;
      border-radius: 12px;
      margin-bottom: 9px;
      background-size: cover;
      background-position: center;
    }

    .info {
      display: flex;
      align-items: center;
      gap: 6px;
      width: 100%;
      height: 30px;
      padding: var(--card-padding);
      margin-bottom: 9px;

      .info-image {
        height: 85%;
        aspect-ratio: 1/1;
        border: 2px solid var(--bg-secondary);
        border-radius: 3px;
        cursor: default;
      }

      .info-text {
        display: block;
        color: var(--text-secondary);
        font-size: .85em;
        font-weight: 600;
        cursor: text;
      }
    }

    p {
      padding: var(--card-padding);
      font-weight: 700;
      margin-bottom: 33px;
      color: var(--text);
    }

    .type {
      display: block;
      position: absolute;
      bottom: 15px;
      left: 12px;
      font-size: .8rem;
      color: var(--text-secondary);
    }

    &:hover {
      transform: matrix3d(1.03, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1.08, 0, 1.648, -4.12, 345.6, 1);
    }
  }
}
</style>