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
   <nuxt-link
     :to="`/home/courses?category=${category.name}&page=1`"
     class="category"
     v-for="category in response!.categories"
     :style="`background-color: #${decimalToHex(category.color)}`"
   >
     <div class="category-text">
       {{category.name}}
     </div>
   </nuxt-link>
 </div>
</template>

<style scoped lang="scss">
.categories-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 12px;

  .category {
    min-height: 220px;
    max-height: 30vh;
    background-color: var(--bg-secondary);
    border-radius: 6px;
    text-decoration: none;

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
      font-weight: 800;
      text-transform: capitalize;

      &:hover {
        font-size: 1.6rem;
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .categories-wrap {
    grid-template-columns: 1fr;
  }

  .category {
    min-height: 60px !important;
    max-height: none;
    border-radius: 20px !important;
  }
}
</style>