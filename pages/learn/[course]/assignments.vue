<script setup lang="ts">
const route = useRouteParams();

const {data: assignments, pending} = await useAPI(`/learning/${route.value.course}/assignments`);

const moduleOptions = [
  'Все модули',
  'Модуль 1',
  'Модуль 2'
];
const moduleState = ref(useRoute()?.query?.module || moduleOptions[0]);

const messageOptions = [
  'По убыванию',
  'По возрастанию',
  'Прочитанные',
  'Непрочитанные',
];
const messageState = ref(useRoute()?.query?.message || messageOptions[0]);

</script>

<template>
  <div class="controls">
    <h1>Задания</h1>

    <div class="select-wrap">
      <LearningSelectModule v-model:model-value="moduleState" :options="moduleOptions" />
      <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
    </div>
  </div>

  <LearningAssignmentSkeleton v-if="pending" />

  <Transition name="learn" mode="out-in" v-else-if="assignments?.assignments" appear>
    <div class="learn-wrap" >
      <LearningAssignment
        v-for="assignment in assignments?.lectures"
        :key="assignment.assignment_id"
        type="Лекция"
        :name="assignment.title"
        @click="$router.push(`/lecture/${route.course}/${assignment.assignment_id}`)"
      />
    </div>
  </Transition>

  <LearningNoData v-else />
</template>

<style scoped lang="scss">
.controls {
  width: 100%;
  margin-bottom: 21px;
  display: flex;
  align-items: center;

  .select-wrap {
    display: flex;
    gap: 6px;
    margin-left: auto;

    .select {
      width: min-content;

      .content {
        background-color: var(--ui-secondary);
        border: none;
      }

      .group {
        background-color: var(--ui-secondary);
        padding: 6px !important;
        height: auto;
      }

      .option {
        background-color: var(--ui-secondary);
        padding: 6px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;

        &:hover {
          background-color: var(--bg-secondary);
        }
      }
    }
  }
}
</style>