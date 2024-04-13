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
    padding: var(--content-padding);
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      display: block;
      padding: 15px;
      text-decoration: none;
      color: var(--main);
      font-weight: 700;
      box-sizing: border-box;
    }

    a:hover, .router-link-active {
      box-shadow: 0 -3px 0 var(--main) inset;
    }
  }

  @media screen and (max-width: 1000px) {
    nav {
      justify-content: center;
    }
  }
</style>