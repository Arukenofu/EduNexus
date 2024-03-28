<script setup lang="ts">

</script>

<template>
  <form @submit.prevent="$router.push('/home/main')">
    <input type="text" name="email" placeholder="Ваша Почта">

    <input type="password" name="password" placeholder="Ваш Пароль">

    <div class="parameters">
      <div class="keep-login">
        <input type="checkbox">

        <span>
          Не выходить из системы
        </span>

      </div>

      <div class="forgot">
        <span>
          Забыли пароль?
        </span>
      </div>
    </div>

    <button type="submit">
      Войти
    </button>
  </form>
</template>

<style lang="scss">

</style>