<script setup lang="ts">

interface Login {
  login: string,
  password: string
}

const form = ref<Login>({
  login: '',
  password: ''
})

const isNotSession = ref<boolean>(true);

const response = ref<string>('');

const submit = async () => {
  const setToken = (value: any): void => {

    if (isNotSession.value) {
      useCookie('token', {
        expires: new Date(new Date().getTime() + 1000*60*60*24*14)
      }).value = value;
    } else {
      useCookie('token').value = value;
    }

  }

  if (!(form.value.password && form.value.login)) {
    sendToast({
      type: 'error',
      message: 'Заполните все поля'
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
    return;
  }

  if (form.value.login?.length > 32) {
    sendToast({
      type: 'error',
      message: 'Длина email больше 32'
    })
    return;
  }

  const {data, error} = await useAPI<{token: string}>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `login=${form.value.login}&password=${form.value.password}`
  })

  if (error.value) {
    sendToast({
      type: 'error',
      message: 'Ошибка аутентификации'
    })
    return;
  }

  setToken(data.value.token);

  sendToast({
    type: 'notification',
    message: 'Успешно вошли в систему!'
  })

  await useRouter().push('/home/main')
}


</script>

<template>
  <form method="post" @submit.prevent="submit()">
    <input type="text" name="email" placeholder="Ваш Никнейм" v-model="form.login">

    <input type="password" name="password" placeholder="Ваш Пароль" v-model="form.password">

    <div class="parameters">
      <div class="keep-login" @click="isNotSession =! isNotSession">
        <input type="checkbox" v-model="isNotSession">

        <button type="button">
          Не выходить из системы
        </button>

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