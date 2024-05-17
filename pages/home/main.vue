<script setup lang="ts">
import CategoriesMainView from "~/components/CategoriesMainView.vue";
import type { Courses } from "~/interfaces/Courses";

const {data: courses, error: coursesError} = await useAPI<Courses>('/courses?perPage=4&page=1');

</script>

<template>

  <article>

    <section v-if="!coursesError">
      <h2>Базовые Курсы</h2>
      <CourseCard :courses="courses?.courses" />
    </section>

    <section>
      <h2>Категории</h2>
      <CategoriesMainView />
    </section>


  </article>
</template>

<style scoped lang="scss">
article {
  margin-top: 81px;

  section {
    margin-bottom: 42px;

    h2 {
      margin-bottom: 12px;
    }
  }
}
</style>