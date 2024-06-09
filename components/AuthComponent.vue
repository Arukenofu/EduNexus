<script setup lang="ts">
import Login from "~/components/Auth/Login.vue";
import Register from "~/components/Auth/Register.vue";

const isLogin = ref<boolean>(true);

const toggleLogin = () => {
  isLogin.value =! isLogin.value;
}


</script>

<template>
  <div class="login-form">

    <div class="icon">
      <nuxt-img
        src="/icon-black.png"
        width="28px"
        preload />
      <span>EduNexus</span>
    </div>

    <p>{{isLogin ? 'Добро пожаловать' : 'Регистрация'}}</p>

    <Login v-if="isLogin" />

    <Register v-model:state="isLogin" v-else />

    <div class="no-account" v-if="isLogin">
      Нету аккаунта? <button @click="toggleLogin()">Зарегестрироваться</button>
    </div>

    <div class="no-account" v-else>
      Уже есть аккаунт? <button @click="toggleLogin()">Войти</button>
    </div>

  </div>
</template>

<style lang="scss">
.login-form {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    color: #0f0f0f;
    font-size: 1.2em;
    font-weight: 900;
    user-select: none;
    display: flex;
    align-items: center;

    span {
      margin-left: 3px;
    }
  }

  p {
    color: #1d1d2f;
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;

    input[type='text'], input[type='password'], input[type='number'] {
      width: 100%;
      padding: 9px 12px;
      margin-bottom: 9px;
      outline: none;
      border: #bbbbbb solid 1px;
      border-radius: 3px;
      color: #0f0f0f;
      font-weight: 700;

      &::selection {
        background-color: #0f0f0f;
        color: #FFFFFF !important;
      }

      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        display: none;
      }

      &::placeholder {
        font-weight: 700;
        color: #858585;
      }
    }

    .parameters {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 7px;
      margin-bottom: 14px;

      .keep-login {
        display: flex;
        align-items: center;

        button {
          margin-left: 3px;
          font-size: .8em;
          color: #0f0f0f;
          height: auto;
          background: none;
          font-weight: 600;
        }
      }

      .forgot {
        margin-left: auto;
        font-size: .8em;

        span {
          color: var(--main);
          font-weight: 700;
          text-underline-offset: 3px;
          cursor: pointer;
          background: none;

          &:hover {
            text-decoration: underline solid var(--main);
          }
        }
      }
    }

    button {
      background-color: var(--main);
      border: none;
      height: 40px;
      color: #FFFFFF;
      font-weight: 700;
      border-radius: 3px;
    }
  }



  .no-account {
    top: 9px;
    position: relative;
    font-size: .8em;
    opacity: .8;
    font-weight: 800;
    color: #0f0f0f;

    button {
      background: none;
      border: none;
      color: var(--main);
      text-underline-offset: 3px;
      cursor: pointer;
      text-decoration: underline solid var(--main);
      font-weight: 800;
    }
  }
}

@media screen and (max-width: 900px) {
  .login-form {
    width: 100%;
  }
}
</style>