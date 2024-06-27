<script setup lang="ts">

import type { Success } from "~/interfaces/Success";

const loginState = defineModel<boolean>('state')

interface Registration {
  login: string,
  password: string,
  confirmPassword: string
}

const form = ref<Registration>({
  login: '',
  password: '',
  confirmPassword: ''
});

const response = ref<string>('');

const submit = async () => {
  if (!(form.value.password && form.value.login && form.value.confirmPassword)) {
    sendToast({
      type: 'error',
      message: 'Заполните все поля'
    })
    return;
  }

  if (form.value.password !== form.value.confirmPassword) {
    sendToast({
      type: 'error',
      message: 'Введённые пароли не совпадают'
    })
    return
  }

  if (form.value.password?.length < 8) {
    sendToast({
      type: 'error',
      message: 'Длина пароля меньше 8'
    })
    return
  }

  if (form.value.login?.length < 8) {
    sendToast({
      type: 'error',
      message: 'Длина email меньше 8'
    })
    return
  }

  if (form.value.password?.length > 16) {
    sendToast({
      type: 'error',
      message: 'Длина пароля больше 16'
    })
    return
  }

  if (form.value.login?.length > 32) {
    sendToast({
      type: 'error',
      message: 'Длина email больше 32'
    })
    return
  }

  await useAPI<Success>('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `login=${form.value.login}&password=${form.value.password}`
  }).then(res => {
    if (res.data.value!.status === 'success') {
      sendToast({
        type: 'notification',
        message: 'Успешно зарегестрировано'
      })

      loginState.value = true;
    } else {
      sendToast({
        type: 'error',
        message: 'Ошибка при регистрации'
      })
    }
  })

}

</script>

<template>
  <form method="post" @submit.prevent="submit()">
    <input type="text" name="email" placeholder="Ваш Никнейм" v-model="form.login">

    <input type="password" name="password" placeholder="Ваш Пароль" v-model="form.password">

    <input type="password" name="password" placeholder="Подтвердить Пароль" v-model="form.confirmPassword">


    <button type="submit">
      Далее
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