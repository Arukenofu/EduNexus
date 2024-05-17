<script setup lang="ts">

const name = useRouteParams('name');

const {data, error} = await useAPI(`/categories/${name}`)

</script>

<template>
  <div class="layout">
    {{data}}
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding-top: 81px;
}
</style>