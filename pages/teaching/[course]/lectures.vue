<script setup lang="ts">
import type { Lectures } from "~/interfaces/Lectures";
import filterLectures from "~/utils/filters/filterLectures";

const isMobile = useDevice();
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

async function createLecture() {


  const modules = await getModules(route.value.course as string);

  if (!modules) {
    return sendToast({
      type: "error",
      message: "Создайте сперва модуль для курса."
    })
  }

  if (isMobile.value) {

    sendToast({
      type: 'notification',
      message: 'Мобильная версия полностью не поддерживается.'
    })
  }

  await useRouter().push(`/editor?for=teaching&course=${route.value.course}`)
}

const filteredLectures = computed(() => {
  return filterLectures(lectures.value?.lectures!, messageState.value as string)
})

</script>

<template>
  <LearningControls name="Лекции">
    <LearningSelectModule v-model:model-value="moduleState" :options="moduleOptions" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
    <TeachingCreate @click="createLecture()" />
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




</style>