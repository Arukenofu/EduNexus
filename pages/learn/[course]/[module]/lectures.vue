<script setup lang="ts">
import AssignmentComponent from "~/components/Assignments/AssignmentComponent.vue";
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";

const buttonState = ref<number>(0);

</script>

<template>
  <LearnHeaderLayout text="Лекции">
    <template v-slot:first>
      <ButtonsSort v-model:state="buttonState" />
    </template>
  </LearnHeaderLayout>

  <div class="content-wrapper">
    <AssignmentComponent type="Лекция" name="Современное программирование" date="2 Ноября" />
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