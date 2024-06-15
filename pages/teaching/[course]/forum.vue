<script setup lang="ts">
const moduleState = ref(useRoute()?.query?.module)

const messageOptions = [
  'По убыванию',
  'По возрастанию',
  'Прочитанные',
  'Непрочитанные',
];
const messageState = ref(useRoute()?.query?.message || messageOptions[0]);
</script>

<template>
  <LearningControls name="Форум">
    <LearningSelectModule v-model:model-value="moduleState" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
  </LearningControls>
</template>

<style scoped lang="scss">

</style>