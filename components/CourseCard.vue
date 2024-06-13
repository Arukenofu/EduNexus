<script setup lang="ts">
import type { Course } from "~/interfaces/Courses";

defineProps<Course>();

</script>

<template>
    <nuxt-link
      class="card"
      :to="`/home/course/${title}`"
    >
      <div
        class="image"
        :style="setAvatar(image)"
        @load="console.log('adsa')"
      />

      <div class="info">
        <div class="info-image" :style="setAvatar(organization_logo)" />
        <span class="info-text">
          {{organization_name}}
        </span>
      </div>

      <p>
        {{ title }}
      </p>

      <span class="type">
        Курс
      </span>
    </nuxt-link>
</template>

<style scoped lang="scss">

.card {
  border-radius: 15px;
  border: 2px solid var(--border);
  aspect-ratio: 1/1.1;
  padding: 9px;
  transition: transform 0.3s cubic-bezier(0, 0, 0.5, 1), border .15s var(--transition-function), color .15s var(--transition-function);;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  --card-padding: 0 6px;

  &:focus-visible {
    outline: 3px solid var(--text);
  }

  .image {
    background-color: var(--bg-secondary);
    background-position: center;
    background-size: cover;
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 12px;
    margin-bottom: 9px;
    text-indent: 100vw;
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
      border-radius: 4px;
      cursor: default;
      background-position: center;
      background-size: cover;
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


@media screen and (max-width: 550px) {
  .card {
    aspect-ratio: 1/1.1;

    .info {
      font-size: 1.15rem;
      height: 35px;
    }

    p {
      font-size: 1.2em;
    }
  }
}
</style>