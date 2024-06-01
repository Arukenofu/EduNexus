<script setup lang="ts">
import type { lecture } from "~/interfaces/lecture";
import type { exercise } from "~/interfaces/exercise";
import mixRGB from "~/utils/colors/mixRGB";

interface Props {
  type: lecture | exercise,
  name: string,
  rate: number
}

const props = defineProps<Props>();

const green = [80,255,61]
const red = [255,61,61]


</script>

<template>
  <nuxt-link to="">
    <div class="rate" :style="`background-color: ${mixRGB(green, red, rate / 100)}`">
      {{rate}}
    </div>

    <div class="text">
      <p>{{type}}: {{name}}</p>

      <span>
        {{rate}} Баллов / 100
      </span>
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
a {
  background-color: var(--ui-secondary);
  height: 65px;
  display: flex;
  align-items: center;
  border-radius: 9px;
  cursor: pointer;
  padding: 6px;

  &:hover {
    .rate {
      font-size: 1.5em;
    }
  }

  .rate {
    height: 100%;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #FFFFFF;
    font-weight: 700;
    background-color: rgb(237.5,80.4,61);
    transition: font-size .15s var(--transition-function);
  }

  .text {
    margin-left: 12px;
    line-height: 1.2;

    p {
      font-size: 1em;
      font-weight: 600;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: .8em;
      font-weight: 500;
      color: var(--text-secondary);
    }
  }
}
</style>