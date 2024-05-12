<script setup lang="ts">

const {module, course} = useRoute().params;

</script>

<template>
  <nav>
    <NuxtLink :to="`/learn/${course}/${module}/main`">
      <Icon class="icon str2" size="1.4em" name="iconoir:home-alt" />
      <div>Главная</div>
    </NuxtLink>

    <NuxtLink :to="`/learn/${course}/${module}/lectures`">
      <Icon class="icon str2" size="1.4em" name="iconoir:book" />
      <div>Лекции</div>
    </NuxtLink>

    <NuxtLink :to="`/learn/${course}/${module}/assignments`">
      <Icon class="icon str2" size="1.4em" name="iconoir:learning" />
      <div>Задания</div>
    </NuxtLink>

    <NuxtLink :to="`/learn/${course}/${module}/messages`">
      <Icon class="icon str2" size="1.4em" name="iconoir:message-text" />
      <div>Сообщения</div>
    </NuxtLink>

    <NuxtLink :to="`/learn/${course}/${module}/forum`">
      <Icon class="icon str2" size="1.4em" name="iconoir:group" />
      <div>Форум</div>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  gap: 2px;

  a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 12px 9px;
    border-radius: 3px;
    font-size: 1em;

    div {
      position: relative;
      top: 1.3px;
      margin-left: 9px;
    }

    &:hover, &:focus-visible {
      outline: none;
      background-color: var(--bg-secondary);
      color: var(--text);
    }
  }

  .router-link-active {
    color: var(--text);
  }
}
</style>