<script setup lang="ts">

const route = useRouteParams()

const routes = computed(() => {
  const path = useRoute().matched[0].path;

  if (path === '/learn') {
    return [
      {
        to: `/learn/${route.value.course}`,
        icon: 'material-symbols:other-houses',
        text: 'Главная'
      },
      {
        to: `/learn/${route.value.course}/lectures`,
        icon: 'material-symbols:book-2',
        text: 'Лекции'
      },
      {
        to: `/learn/${route.value.course}/assignments`,
        icon: 'material-symbols:assignment',
        text: 'Задания'
      },
      {
        to: `/learn/${route.value.course}/forum`,
        icon: 'material-symbols:forum',
        text: 'Форумы'
      },
    ]
  }

  return [
    {
      to: `/teaching/${route.value.course}`,
      icon: 'material-symbols:other-houses',
      text: 'Главная'
    },
    {
      to: `/teaching/${route.value.course}/lectures`,
      icon: 'material-symbols:book-2',
      text: 'Лекции'
    },
    {
      to: `/teaching/${route.value.course}/assignments`,
      icon: 'material-symbols:assignment',
      text: 'Задания'
    },
    {
      to: `/teaching/${route.value.course}/actions`,
      icon: 'material-symbols:action-key',
      text: 'Действия'
    },
    {
      to: `/teaching/${route.value.course}/forum`,
      icon: 'material-symbols:forum',
      text: 'Форумы'
    },
  ]

})


</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes">
        <nuxt-link :to="route.to">
          <Icon :name="route.icon" size="1.85em" />
          <span>
            {{route.text}}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--bg-third);

  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    height: 100%;

    li {
      height: 100%;
      flex: 1;

      a {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--text-secondary);
        text-decoration: none;

        span {
          font-size: .75em;
        }
      }

      .router-link-active {
        color: var(--text);
      }

    }
  }
}
</style>