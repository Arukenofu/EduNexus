<script setup lang="ts">
const route = useRouteParams();

const {data: assignments, pending} = await useAPI(`/learning/${route.value.course}/assignments`, {
  lazy: true
});

const moduleOptions = [
  'Все модули',
  'Модуль 1',
  'Модуль 2'
];
const moduleState = ref(useRoute()?.query?.module || moduleOptions[0]);

const messageOptions = [
  'По убыванию',
  'По возрастанию',
  'Выполненные',
  'Невыполенные',
];
const messageState = ref(useRoute()?.query?.message || messageOptions[0]);

</script>

<template>
  <LearningControls name="Задания">
    <LearningSelectModule v-model:model-value="moduleState" :options="moduleOptions" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
    <TeachingCreate />
  </LearningControls>


  <Transition name="learn" mode="out-in" appear>
    <LearningAssignmentSkeleton v-if="pending" />

    <div class="learn-wrap" v-else-if="assignments?.assignments" >
      <LearningAssignment
        v-for="assignment in assignments?.lectures"
        :key="assignment.assignment_id"
        type="Лекция"
        :name="assignment.title"
        @click="$router.push(`/lecture/${route.course}/${assignment.assignment_id}`)"
      />
    </div>

    <LearningNoData v-else />
  </Transition>

</template>

<style scoped lang="scss">

</style>