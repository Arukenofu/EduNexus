<script setup lang="ts">
import type { Courses } from "~/interfaces/Courses";

const name = useRouteParams('name');

const {data: courses} = await useAPI<Courses>(`/categories/${name}?perPage=4&page=1`)

</script>

<template>
  <div class="layout">
    <Grid :columns="4">
      <CourseCard
        v-for="course in courses?.courses"
        :key="course.title"
        :title="course.title"
        :organization_name="course.organization_name"
        :organization_logo="course.organization_logo"
        :image="course.image"
      />
    </Grid>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding-top: 81px;
}
</style>