 <script setup lang="ts">
import type { Courses } from "~/interfaces/Courses";

const {data: courses} = await useAPI<Courses>('/courses?perPage=4&page=1');
const {data: mathematics} = await useAPI<Courses>('/categories/Математика?perPage=4&page=1');
const {data: psychology} = await useAPI<Courses>('/categories/Психология?perPage=4&page=1')

</script>

<template>
  <article>
    <section>
      <h2>Рекомендации</h2>
      <Grid :columns="4" :rows="1" gap="15px">
        <CourseCard
          v-for="course in courses?.courses"
          :key="course.title"
          :title="course.title"
          :image="course.image"
          :organization_name="course.organization_name"
          :organization_logo="course.organization_logo"
        />
      </Grid>
    </section>

    <section>
      <h2>Категории</h2>
      <CategoriesMainView />
    </section>

    <section>
      <h2>Математика</h2>
      <Grid :columns="4" :rows="1" gap="15px">
        <CourseCard
          v-for="course in mathematics?.courses"
          :key="course.title"
          :title="course.title"
          :image="course.image"
          :organization_name="course.organization_name"
          :organization_logo="course.organization_logo"
        />
      </Grid>
    </section>

    <section>
      <h2>Психология</h2>
      <Grid :columns="4" :rows="1" gap="15px">
        <CourseCard
          v-for="course in psychology?.courses"
          :key="course.title"
          :title="course.title"
          :image="course.image"
          :organization_name="course.organization_name"
          :organization_logo="course.organization_logo"
        />
      </Grid>
    </section>


  </article>
</template>

<style scoped lang="scss">
article {
  padding-top: 81px;

  section {
    margin-bottom: 42px;

    h2 {
      margin-bottom: 12px;
    }
  }
}
</style>