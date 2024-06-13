<script setup lang="ts">


const route = useRouteParams()

const routes = computed(() => {
  const path = useRoute().matched[0].path;

  if (path === '/learn') {
    return [
      {
        to: `${path}/${route.value.course}/lectures`,
        text: 'Лекции'
      },
      {
        to: `${path}/${route.value.course}/assignments`,
        text: 'Задания'
      },
      {
        to: `${path}/${route.value.course}/forum`,
        text: 'Форум'
      },
    ]
  } else {
    return [
      {
        to: `${path}/${route.value.course}/lectures`,
        text: 'Лекции'
      },
      {
        to: `${path}/${route.value.course}/assignments`,
        text: 'Задания'
      },
      {
        to: `${path}/${route.value.course}/actions`,
        text: 'Действия'
      },
      {
        to: `${path}/${route.value.course}/forum`,
        text: 'Форум'
      },
    ]
  }
})

</script>

<template>
  <aside>
    <slot />
  </aside>


</template>

<style scoped lang="scss">
aside {
  align-self: flex-start;
  position: sticky;
  top: 14px;
  width: 300px;
}

nav {
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 600;
    box-sizing: border-box;
    transition: color .2s ease;
    font-size: 1.25em;

    &:focus-visible {
      color: var(--text);
      outline: none;
    }
  }

  a:hover, .router-link-active {
    color: var(--text);
  }
}


@media screen and (max-width: 950px) {
  aside {
    width: 250px !important;
  }
}

</style>