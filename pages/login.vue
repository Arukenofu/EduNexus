<script setup lang="ts">

</script>

<template>
  <div class="bg">

  </div>

  <div class="container">

    <div class="login-form">

      <ProjectIcon class="icon" />

      <p>Добро пожаловать</p>

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

      <div class="divider" />

      <div class="no-account">
        Нету аккаунта? <span>Зарегестрироваться</span>
      </div>

    </div>

    <div class="image-section">

      <nuxt-img src="/login-page.png" preload="preload" />

    </div>

  </div>
</template>

<style scoped lang="scss">

.bg {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #cce4ff 50%, #1e1f6f 50%);
}

.container {
  width: 1000px;
  height: 650px;
  border-radius: 15px;
  background: linear-gradient(to right, #ffffff 50%, #e6f2ff 50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

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

      input[type='text'], input[type='password'] {
        width: 100%;
        padding: 9px 12px;
        margin-bottom: 9px;
        outline: none;
        border: #bbbbbb solid 1px;
        border-radius: 3px;
        color: #0f0f0f;
        font-weight: 700;

        &::placeholder {
          font-weight: 700;
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

          span {
            margin-left: 3px;
            font-size: .8em;
            color: #0f0f0f;
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

      span {
        color: var(--main);
        text-underline-offset: 3px;
        cursor: pointer;
        text-decoration: underline solid var(--main);
      }
    }

  }

  .image-section {
    width: 50%;
    height: 100%;
    position: relative;

    img {
      width: 135%;
      background: none;
      position: absolute;
      top: 47%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

}

@media screen and (max-width: 1100px) {
  .container {
    width: 100dvw;
    height: 100dvh;
    border-radius: 0;
  }
}

</style>