<script setup lang="ts">
import axios, { type AxiosResponse } from "axios";
import decimalToHex from "~/utils/colors/decimalToHex";

interface Categories {
  categories: {
    name: string,
    color: number
  }[]
}

let response: Categories;

try {
  const {data}: AxiosResponse<Categories> = await axios.get('http://16.171.182.88/api/categories/')

  response = data;
} catch {}


</script>

<template>

 <div class="categories-wrap" v-if="response">
   <div
     class="category"
     v-for="category in response.categories"
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