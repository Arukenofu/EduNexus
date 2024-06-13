<script setup lang="ts">

withDefaults(defineProps<{
  direction?: 'column' | 'row',
  align?: 'inherit' | 'center',
  gap?: string,
  fontSize?: string
}>(), {
  direction: 'row',
  align: 'center',
  gap: '21px',
  fontSize: '.9em'
})

const routes = [
  {
    to: '/home/main',
    text: 'Главная'
  },
  {
    to: '/home/my-learning',
    text: 'Моё обучение'
  },
  {
    to: '/home/courses',
    text: 'Онлайн курсы'
  },
  {
    to: '/home/completed',
    text: 'Завершённые курсы'
  },

];


defineEmits(['onRouteClick']);

</script>

<template>
 <nav>

   <nuxt-link
     v-for="route in routes"
     :to="route.to"
     @click="$emit('onRouteClick')"
   >
     {{route.text}}
   </nuxt-link>

 </nav>
</template>

<style scoped lang="scss">
  nav {
    display: flex;
    align-items: v-bind(align);
    flex-direction: v-bind(direction);
    gap: v-bind(gap);

    a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 600;
      box-sizing: border-box;
      transition: color .2s ease;
      font-size: v-bind(fontSize);

      &:focus-visible {
        color: var(--text);
        outline: none;
      }
    }

    a:hover, .router-link-active {
      color: var(--text);
    }
  }

  @media screen and (max-width: 1000px) {
    nav {
      justify-content: center;
    }
  }
</style>