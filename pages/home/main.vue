<script setup lang="ts">

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