<script setup lang="ts">
import AssignmentComponent from "~/components/Assignments/AssignmentComponent.vue";
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";
import Button1x1 from "~/components/Buttons/Button1x1.vue";

const buttonState = ref<number>(0);


const {course, module} = useRouteParams();


</script>

<template>
  <LearnHeaderLayout text="Задания">
    <template v-slot:first>
      <ButtonsSort v-model:state="buttonState" />
    </template>
  </LearnHeaderLayout>

  <div class="content-wrapper">

    <AssignmentComponent
      type="Задание"
      name="Создание собственного приложения JavaScript"
      date="1 Апреля"
      @click="$router.push(`/assignment/${course}/${module}/preview`)"
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

.content-wrapper {
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .content-wrapper .lesson {
    width: 100%;
  }
}
</style>