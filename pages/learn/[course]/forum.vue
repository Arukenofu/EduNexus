<script setup lang="ts">
import type { Forum } from "~/interfaces/Forum";
import type { User } from "~/interfaces/User";

const moduleState = ref(useRoute()?.query?.module )

const messageOptions = [
  'По убыванию',
  'По возрастанию',
  'Прочитанные',
  'Непрочитанные',
];
const messageState = ref(useRoute()?.query?.message || messageOptions[0]);

const filteredForums = computed<Forum[]>(() => {
  return [
    {
      title: 'Что делать с этим?',
      rating: 9,
      date: '15.06.24',
      user: {
        profile_info: {
          profile: 'http://13.60.55.49/file/storage/1718089036312840105.png',
          firstname: 'John',
          description: ''
        }
      }
    },

  ]
})

</script>

<template>

  <LearningControls name="Форум">
    <LearningSelectModule v-model:model-value="moduleState" />
    <LearningSelectMessage v-model:model-value="messageState" :options="messageOptions" />
    <TeachingCreate />
  </LearningControls>

  <Transition name="learn" mode="out-in" appear>
    <div class="learn-wrap" v-if="filteredForums?.length">
      <ForumPreview
        v-for="forum in filteredForums"
        :key="forum.title"
        :title="forum.title"
        :user="forum.user"
        :rating="forum.rating"
        :date="forum.date"
      />
    </div>

    <LearningNoData v-else />
  </Transition>
</template>

<style scoped lang="scss">

</style>