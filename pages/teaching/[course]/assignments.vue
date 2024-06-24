<script setup lang="ts">
import assignmentCodeConverter from "~/utils/assignmentCodeConverter";
import filterLectures from "~/utils/filters/filterLectures";

const route = useRouteParams();
const isMobile = useDevice();

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

const filteredLectures = computed(() => {
  return filterLectures(assignments.value?.assignments!, messageState.value as string)
})

async function createAssignment() {
  const modules = await getModules(route.value.course as string);

  if (!modules?.length) {
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

  useRouter().push(`/create?course=${route.value.course}`)
}

</script>

<template>
  <LearningControls name="Задания">
    <LearningSelectModule v-model:model-value="moduleState" :options="moduleOptions" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
    <TeachingCreate @click="createAssignment()" />
  </LearningControls>


  <Transition name="learn" mode="out-in" appear>
    <LearningAssignmentSkeleton v-if="pending" />



    <div class="learn-wrap" v-else-if="filteredLectures?.length" >
      <LearningAssignment
        type="Задание"
        v-for="assignment in filteredLectures"
        :name="assignment.title"
        :date="assignment.created_at"
        @click="$router.push(`/assignment/${route.course}/${assignment.id}/${assignmentCodeConverter(assignment.assignment_type_id)}`)"
      />

    </div>

    <LearningNoData v-else />
  </Transition>

</template>

<style scoped lang="scss">

</style>