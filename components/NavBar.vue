<script setup lang="ts">

</script>

<template>
 <nav>

   <nuxt-link to="/home/main">
     Главная
   </nuxt-link>

   <nuxt-link to="/home/my-learning">
     Моё обучение
   </nuxt-link>

   <nuxt-link to="/home/courses">
     Онлайн курсы
   </nuxt-link>

   <nuxt-link to="/home/certificate">
     Мои Сертификаты
   </nuxt-link>

 </nav>
</template>

<style scoped lang="scss">
  nav {
    display: flex;
    align-items: center;
    margin-left: 15px;

    a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 600;
      box-sizing: border-box;
      transition: color .2s ease;
      margin-left: 21px;
      font-size: .9em;

      &:focus-visible {
        color: var(--text);
        outline: var(--text) 2px solid;
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