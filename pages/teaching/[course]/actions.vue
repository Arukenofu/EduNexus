<script setup lang="ts">

const daysOption = [
  'За всё время',
  'За месяц',
  'За неделю',
  'Сегодня',
]

const daysState = ref(useRoute()?.query.days || daysOption[0]);

</script>

<template>
  <div class="controls">
    <h1>Действия</h1>

    <div class="select-wrap">
      <LearningSelectDays v-model:state="daysState" :options="daysOption" />
    </div>
  </div>

  <Transition name="learn" mode="out-in" appear>

    <div class="learn-wrap" >
      <TeachingAction
        text="Создание модуля &#34;Продвинутый уровень&#34; преподавателем Ersultan"
        date="5 Мая"
      />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.controls {
  width: 100%;
  margin-bottom: 21px;
  display: flex;
  align-items: center;

  .select-wrap {
    display: flex;
    gap: 6px;
    margin-left: auto;


  }
}
</style>