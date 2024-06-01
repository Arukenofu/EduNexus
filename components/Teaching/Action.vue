<script setup lang="ts">

interface Props {
  text: string,
  date: string
}

const props = defineProps<Props>();

</script>

<template>
  <nuxt-link to="">
    <div class="text">
      <p>{{text}}</p>

      <span>
        Дата: {{date}}
      </span>
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: var(--ui-secondary);
  margin-bottom: 9px;
  padding: 0 12px;
  border-radius: 14px;
  color: var(--text);
  text-decoration: none;

  .text {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    p {
      font-size: 1em;
      font-weight: 600;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: .8em;
      font-weight: 500;
      color: var(--text-secondary);
    }
  }
}
</style>