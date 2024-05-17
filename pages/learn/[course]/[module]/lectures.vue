<script setup lang="ts">
import AssignmentComponent from "~/components/Assignments/AssignmentComponent.vue";
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";
import getRemovedParameters from "~/utils/router/getRemovedRouteParam";
import getRemovedRouteParam from "~/utils/router/getRemovedRouteParam";
import { useRouteParams } from "~/composables/getRouteParams";

const buttonState = ref<number>(0);

const course = useRouteParams('course')
interface Lectures {
  lectures: {
    id: number,
    module_id: number,
    description: string,
    content: string,
    days: string,
    assignment_type_id: number,
    title: string
  }[]
}

const {data, error} = await useAPI<Lectures>(`/learning/${course}`);


</script>

<template>

  <LearnHeaderLayout text="Лекции">
    <template v-slot:first>
      <ButtonsSort v-model:state="buttonState" />
    </template>
  </LearnHeaderLayout>

  <div class="content-wrapper">
    <AssignmentComponent
      v-for="assignment in data!.lectures"
      :key="assignment.id"
      type="Лекция"
      :name="assignment.title"
      :date="assignment.days ?? ''"
      @click="$router.push(`${getRemovedRouteParam(1)}/lecture/${assignment.id}`)"
    />
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  height: 90px;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
  }

  .options {
    margin-left: auto;

    .control {
      margin-left: 9px;
      background-color: var(--bg);
      border: none;
      cursor: pointer;
      height: 40px;
      aspect-ratio: 1/1;
      border-radius: 6px;

      .icon {
        color: var(--text);
      }
    }

    .menu {
      display: none;
    }
  }
}


</style>