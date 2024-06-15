<script setup lang="ts">
import type { Forum } from "~/interfaces/Forum";

const props = defineProps<Forum>()

</script>

<template>
  <nuxt-link>
    <div class="text">
      <p>{{title}}</p>

      <div class="info">
        <span class="date">
          Дата: {{date}}
        </span>

        <span class="rating">
          {{rating}}
          <Icon class="icon" name="material-symbols:star-rounded" size="1.2em" />
        </span>
      </div>
    </div>

    <div class="control">
      <Icon name="iconoir:nav-arrow-right" size="1.2em" class="str2" />
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: var(--ui-secondary);
  margin-bottom: 9px;
  padding: 0 12px;
  border-radius: 14px;
  color: var(--text);
  text-decoration: none;
  cursor: pointer;

  &:hover .control {
    transform: translateX(6px);
  }

  .logo {
    height: 75%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .text {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    p {
      font-size: 1em;
      font-weight: 600;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .info {
      display: flex;
      gap: 9px;

      .date {
        font-size: .8em;
        font-weight: 500;
        color: var(--text-secondary);
      }

      .rating {
        display: flex;
        align-items: center;
        font-size: .8em;
        font-weight: 500;
        color: var(--text-secondary);

        .icon {
          position: relative;
          bottom: 0.75px;
        }
      }
    }
  }

  .control {
    margin-left: auto;
    height: 80%;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    transition: transform 0.3s ease-in;
  }
}
</style>