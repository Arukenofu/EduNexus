<script setup lang="ts">

import CategoriesMainView from "~/components/CategoriesMainView.vue";
</script>

<template>
  <article>

    <section>
      <h2>Оффлайн обучение</h2>
      <CourseCard />
    </section>

    <section>
      <h2>Индивидуальные занятия</h2>
      <IndividualLessons />
    </section>

    <section>
      <h2>Популярное</h2>
      <CourseCard />
    </section>

    <section>
      <h2>Основываясь на ваших предпочтениях</h2>
      <CourseCard />
    </section>

    <section>
      <h2>Категории</h2>
      <CategoriesMainView />
    </section>

    <section>
      <h2>Программирование</h2>
      <CourseCard />
    </section>

  </article>
</template>

<style scoped lang="scss">
article {
  margin-top: 21px;

  section {
    margin-bottom: 42px;

    h2 {
      margin-bottom: 12px;
    }
  }
}
</style>