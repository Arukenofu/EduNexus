<script setup lang="ts">
const route = useRouteParams();

const {data: assignments, pending} = await useAPI(`/learning/${route.value.course}/assignments`);

const isSelectToggled = ref<boolean>(false);

const selectState = ref<number>(0);

const selectOptions = [
  'По убыванию',
  'По возрастанию',
  'Пройденные',
  'Непройденные',
];


</script>

<template>
  <div class="controls">
    <h1>Задания</h1>

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
</style>