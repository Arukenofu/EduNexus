<script setup lang="ts">
import assignmentCodeConverter from "~/utils/assignmentCodeConverter";
import type { Assignments } from "~/interfaces/Assignments";

const route = useRouteParams();

const {data: assignments, pending} = await useAPI<{assignments: Assignments[]}>(`/learning/${route.value.course}/assignments`, {
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

</script>

<template>
  <LearningControls name="Задания">
    <LearningSelectModule v-model:model-value="moduleState" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
  </LearningControls>

  <Transition name="learn" mode="out-in" appear>
    <LearningAssignmentSkeleton v-if="pending" />

    <div class="learn-wrap" v-else-if="assignments?.assignments" >
      <LearningAssignment
        v-for="assignment in assignments.assignments"
        :key="assignment.id"
        type="Задание"
        :name="assignment.title"
        @click="$router.push(`/assignment/${route.course}/${assignment.id}/${assignmentCodeConverter(assignment.assignment_type_id)}`)"
      />
    </div>

    <LearningNoData v-else />
  </Transition>

</template>

<style scoped lang="scss">
</style>