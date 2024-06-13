<script setup lang="ts">

defineProps<{
  title: string,
  description: string
}>()

defineEmits(['onStart'])

</script>

<template>
  <div class="cont">
    <h1>{{title}}</h1>

    <p>{{description}}</p>

    <button class="start" @click="$emit('onStart')">
      Начать викторину
    </button>

  </div>
</template>

<style lang="scss">

.cont {

  h1 {
    font-size: 2.1em;
    font-weight: 700;
    margin-bottom: 21px;
  }

  p {
    font-size: .95em;
    line-height: 1.7;
    max-width: 70%;
    color: var(--text-soft);
    margin-bottom: 21px;
  }

  .start {
    height: 60px;
    font-size: .95em;
    font-weight: 600;
    padding: 0 42px;
    border: none;
    border-radius: 26px;
    background-color: var(--text);
    color: var(--bg);
    transition: all var(--transition-function) .15s;
  }
}

@media screen and (max-width: 850px) {
  .cont p {
    max-width: unset;
  }
}
</style>