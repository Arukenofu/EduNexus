<script setup lang="ts">
import type { Lectures } from "~/interfaces/Lectures";

const route = useRouteParams();

const {data: lectures, loading} = await useAPI<Lectures>(`/learning/${route.value.course}/lectures`);

const isSelectToggled = ref<boolean>(false);

const selectState = ref<number>(0);

const selectOptions = [
  'По убыванию',
  'По возрастанию',
  'Прочитанные',
  'Непрочитанные',
];


</script>

<template>
  <div class="controls">
    <h1>Лекции</h1>

    <Select class="select" @click="isSelectToggled =! isSelectToggled">
      <SelectContent class="content">
        {{selectOptions[selectState]}}
      </SelectContent>
      <Transition name="select">
        <SelectGroup v-if="isSelectToggled" class="group">
          <SelectOption
            v-for="(option, index) in selectOptions"
            @click="selectState = index"
          >
            {{option}}
          </SelectOption>
        </SelectGroup>
      </Transition>

    </Select>
  </div>

  <LearningAssignmentSkeleton v-if="loading" />

  <Transition name="learn" mode="out-in" v-else-if="lectures?.lectures" appear>

    <div class="learn-wrap" >
      <LearningAssignment
        v-for="lecture in lectures?.lectures"
        :key="lecture.assignment_id"
        type="Лекция"
        :name="lecture.title"
        @click="$router.push(`/lecture/${route.course}/${lecture.assignment_id}`)"
      />
    </div>
  </Transition>


  <LearningNoData />
</template>

<style scoped lang="scss">

.controls {
  width: 80%;
  margin-bottom: 21px;
  display: flex;
  align-items: center;

  .select {
    margin-left: auto;
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

      &:hover {
        background-color: var(--bg-secondary);
      }
    }
  }
}


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