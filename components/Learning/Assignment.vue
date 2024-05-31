<script setup lang="ts">
import type { lecture } from "~/interfaces/lecture";
import type { exercise } from "~/interfaces/exercise";

interface Props {
  type: lecture | exercise,
  name: string,
}

const props = defineProps<Props>();

const isLecture = computed(() => {
  return props.type === 'Лекция' || props.type === 'Видеолекция';
})

</script>

<template>

  <nuxt-link to="/lecture">

    <div class="text">
      <p>{{type}}: {{name}}</p>

      <span>
        Дата: 12 Ноября
      </span>
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
  width: 80%;
  height: 70px;
  background-color: var(--ui-secondary);
  margin-bottom: 9px;
  padding: 0 12px;
  border-radius: 14px;
  color: var(--text);
  text-decoration: none;

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
      font-size: 1.05em;
      font-weight: 600;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: .8em;
      font-weight: 500;
      color: var(--text-secondary);
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