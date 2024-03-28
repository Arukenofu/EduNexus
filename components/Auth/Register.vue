<script setup lang="ts">

const registrationStep = defineModel<number>('registrationStep');

const isFemale = ref<boolean | null>(null);

</script>

<template>
  <form @submit.prevent="registrationStep!++" v-if="registrationStep === 0">
    <input type="text" name="email" placeholder="Ваша Почта">

    <input type="password" name="password" placeholder="Ваш Пароль">

    <input type="password" name="password" placeholder="Подтвердить Пароль">

    <button type="submit">
      Далее
    </button>
  </form>

  <form @submit.prevent="$router.push('/home/main')" v-else>
    <input type="text" name="firstname" placeholder="Имя">

    <input type="text" name="lastname" placeholder="Фамилия">

    <input type="text" name="father-name" placeholder="Отчество">

      <input type="number" name="age" placeholder="Возраст">

    <div class="select-gender">

      <div class="slider" :style="isFemale && 'right: 0'" />

      <div class="gender" :class="!isFemale && 'active'" @click="isFemale = false">
        Мужчина
      </div>

      <div class="gender" :class="isFemale && 'active'" @click="isFemale = true">
        Женщина
      </div>

    </div>

    <button type="submit">
      Подтвердить
    </button>

    <button type="submit" class="skip">
      Пропустить
    </button>
  </form>
</template>

<style scoped lang="scss">

.skip {
  background: none;
  color: #a1a1a1;
  padding: 0;
}

  .select-gender {
    width: 100%;
    display: flex;
    border: #bbbbbb solid 1px;
    border-radius: 3px;
    height: 40px;
    margin-bottom: 9px;
    position: relative;

    .gender {
      flex: 1 ;
      text-align: center;
      display: grid;
      place-items: center;
      font-size: .8em;
      cursor: pointer;
      font-weight: 700;
      color: #858585;
      z-index: 2;
      user-select: none;
      transition: color 0.2s ease;

      &:first-child {
        border-right: 1px solid #bbbbbb;
      }
    }

    .slider {
      right: 50%;
      position: absolute;
      width: 50%;
      height: 100%;
      background-color: var(--main);
      color: #FFFFFF;
      transition: right 0.2s ease-out;
    }

    .active {
      color: #FFFFFF;
    }

  }

  form p {
    margin-top: 3px;
    font-size: .8em;
    text-align: center;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }


</style>