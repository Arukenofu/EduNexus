<script setup lang="ts">
import type { Lectures } from "~/interfaces/Lectures";
import filterLectures from "~/utils/filters/filterLectures";

const route = useRouteParams();

const {data: lectures, pending} = await useAPI<Lectures>(`/learning/${route.value.course}/lectures`, {
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
  'Прочитанные',
  'Непрочитанные',
];
const messageState = ref(useRoute()?.query?.message || messageOptions[0]);

const filteredLectures = computed(() => {
  return filterLectures(lectures.value?.lectures!, messageState.value as string)
})

</script>

<template>
  <LearningControls name="Лекции">
    <LearningSelectModule v-model:model-value="moduleState" :options="moduleOptions" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
  </LearningControls>



  <Transition name="learn" mode="out-in" appear>
    <LearningAssignmentSkeleton v-if="pending" />

    <div class="learn-wrap" v-else-if="filteredLectures">
      <LearningAssignment
        v-for="lecture in filteredLectures"
        :key="lecture.assignment_id"
        type="Лекция"
        :name="lecture.title"
        @click="$router.push(`/lecture/${route.course}/${lecture.assignment_id}`)"
      />
    </div>

    <LearningNoData v-else />
  </Transition>



</template>

<style scoped lang="scss">


.learn-enter-active {
  transition: all 0.25s ease-out;
}

.learn-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.learn-enter-from,
.learn-leave-to {
  opacity: 0;
}


</style>