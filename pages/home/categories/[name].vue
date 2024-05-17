<script setup lang="ts">
import type { Courses } from "~/interfaces/Courses";

const name = useRouteParams('name');

const {data: courses} = await useAPI<Courses>(`/categories/${name}`)


</script>

<template>
  <div class="layout">
    {{courses}}
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding-top: 81px;
}
</style>