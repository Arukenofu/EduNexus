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
      localStorage.setItem('token', value)
    } else {
      sessionStorage.setItem('token', value)
    }

  }

  if (!(form.value.password && form.value.login)) {
    return response.value = 'Заполните все поля'
  }

  if (form.value.password?.length < 8) {
    return response.value = 'Длина пароля меньше 8'
  }

  if (form.value.login?.length < 8) {
    return response.value = 'Длина email меньше 8'
  }

  if (form.value.password?.length > 16) {
    return response.value = 'Длина пароля больше 16'
  }

  if (form.value.login?.length > 32) {
    return response.value = 'Длина email больше 32'
  }

  const {data} = await useAPI<{token: string}>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `login=${form.value.login}&password=${form.value.password}`
  })

  if (!data.value) {
    return response.value = 'Ошибка сервера';
  }

  setToken(data.value.token);

  await useRouter().push('/home/main')
}


</script>

<template>
  <form @submit.prevent="submit()">
    <input type="text" name="email" placeholder="Ваша Почта" v-model="form.login">

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