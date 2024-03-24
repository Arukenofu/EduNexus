<script setup lang="ts">

</script>

<template>
 <div class="categories-wrap">
   <div class="category" v-for="category in 8">
     <div class="category-image">
       Математика
     </div>
   </div>
 </div>
</template>

<style scoped lang="scss">
.categories-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  .category {
    flex: 1 20%;
    max-width: 25%;
    height: 250px;
    max-height: 30vh;
    background-color: var(--bg-secondary);
    border-radius: 6px;

    .category-image {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: #4b6259;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      user-select: none;
      transition: font-size 0.2s ease;
      cursor: pointer;
      color: var(--bg);

      &:hover {
        font-size: 1.6rem;
      }
    }
  }
}
</style>