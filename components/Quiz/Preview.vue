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

    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

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
</style>