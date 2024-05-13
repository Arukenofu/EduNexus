<script setup lang="ts">
import decimalToHex from "~/utils/colors/decimalToHex";
import { useAPI } from "~/composables/useAPI";

interface Categories {
  categories: {
    name: string,
    color: number
  }[]
}

const {data: response, error} = await useAPI<Categories>('/categories/');

</script>

<template>
 <div class="categories-wrap" v-if="!error">
   <div
     class="category"
     v-for="category in response!.categories"
     :style="`background-color: #${decimalToHex(category.color)}`"
   >
     <div class="category-text">
       {{category.name}}
     </div>
   </div>
 </div>
</template>

<style scoped lang="scss">
.categories-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;

  .category {
    min-height: 220px;
    max-height: 30vh;
    background-color: var(--bg-secondary);
    border-radius: 6px;

    .category-text {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      user-select: none;
      transition: font-size 0.2s ease;
      cursor: pointer;
      color: var(--text);
      text-transform: capitalize;

      &:hover {
        font-size: 1.6rem;
      }
    }
  }
}
</style>