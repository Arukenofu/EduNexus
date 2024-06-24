<script setup lang="ts">
import assignmentCodeConverter from "~/utils/assignmentCodeConverter";
import type { Assignments } from "~/interfaces/Assignments";
import filterLectures from "~/utils/filters/filterLectures";

const route = useRouteParams();

const {data: assignments, pending} = await useAPI(`/learning/${route.value.course}/assignments`, {
  lazy: true
});

const moduleState = ref(useRoute()?.query?.module);

const messageOptions = [
  'По убыванию',
  'По возрастанию',
  'Выполненные',
  'Невыполенные',
];
const messageState = ref(useRoute()?.query?.message || messageOptions[0]);

const filteredLectures = computed(() => {
  return filterLectures(assignments.value?.assignments!, messageState.value as string)
})

</script>

<template>
  <LearningControls name="Задания">
    <LearningSelectModule v-model:model-value="moduleState" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
  </LearningControls>

  <Transition name="learn" mode="out-in" appear>
    <LearningAssignmentSkeleton v-if="pending" />

    <div class="learn-wrap" v-else-if="filteredLectures?.length" >
      <LearningAssignment
        v-for="assignment in filteredLectures"
        :key="assignment.id"
        type="Задание"
        :date="assignment.created_at"
        :name="assignment.title"
        @click="$router.push(`/assignment/${route.course}/${assignment.id}/${assignmentCodeConverter(assignment.assignment_type_id)}`)"
      />
    </div>

    <LearningNoData v-else />
  </Transition>

</template>

<style scoped lang="scss">
</style>