<script setup lang="ts">
import type { User } from "~/interfaces/User";

const isOpen = defineModel<boolean>('isOpen');

const user = defineModel<User>('user');

const getBase64 = (event: Event) => {
  const input = event.target as HTMLInputElement;

  if (input!.files) {
    let reader = new FileReader();

    reader.onload = (e) => {
      user.value!.avatar = e.target?.result as string;
    }

    reader.readAsDataURL(input.files[0]);
  }
}

</script>

<template>
  <div class="modal">
    <div class="control">

      <button @click="isOpen = false">
        Закрыть
        <Icon class="icon" name="ic:baseline-close" size="1.4em" />
      </button>
    </div>

    <div class="content">
      <h1 class="head">Личные Данные</h1>

      <p class="paragraph">
        Добавьте информацию о себе в той форме, в которой она должна отображаться в профиле.
      </p>

      <div class="avatar" :style="`background-image: url('${user!.avatar}')`">
        <div class="table">
          <label class="input-file">
            <input type="file" accept="image/*" @input="getBase64">
            <span>
                Выбрать файл...
            </span>
          </label>
        </div>
      </div>

      <dl class="user-main">
        <dt>Ваше имя</dt>
        <dd>
          <input />
        </dd>
      </dl>

      <dl class="user-main">
        <dt>Описание</dt>
        <dd>
          <textarea />
        </dd>
      </dl>
    </div>
  </div>
</template>

<style scoped lang="scss">

.modal {
  width: 525px;
  height: 70dvh;
  border-radius: 8px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  padding: 16px;
  overflow-y: hidden;

  .control {
    width: 100%;
    height: 40px;
    background-color: var(--bg);

    button {
      display: block;
      margin-left: auto;
      height: 90%;
      padding: 0 12px;
      background: none;
      border: none;
      color: var(--text);
      font-size: .8em;
      font-weight: 600;

      .icon {
        position: relative;
        bottom: 1px;
      }

      &:hover {
        text-decoration: underline;
        background-color: var(--border);
        border-radius: 4px;
      }
    }
  }

  .content {
    overflow-y: scroll;
    height: calc(70dvh - 40px - 20px);
    padding: 0 24px 24px;

    .head {
      font-size: 1.7em;
      font-weight: 700;
      margin-bottom: 21px;
    }

    .paragraph {
      font-size: .95em;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 21px;
    }

    .avatar {
      background-color: var(--bg);
      width: 225px;
      border-radius: 50%;
      aspect-ratio: 1/1;
      background-position: center;
      background-size: cover;
      border: 3px solid var(--border);
      cursor: pointer;
      position: relative;
      clip-path: circle(50% at center);
      margin-bottom: 12px;

      &:hover .table {
        opacity: 0.8;
      }

      .table {
        opacity: 0;
        position: absolute;
        bottom: -4px;
        height: 40px;
        width: 100%;
        background-color: #000000;
        transition: 0.1s;
        z-index: 1;
      }

      .input-file {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        & > span {
          margin-top: 3px;
          position: relative;
          width: 90%;
          height: 28px;
          border-radius: 3px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: .7em;

          &:active {
            opacity: 0.9;
          }

          span {
            margin-right: 5px;
            margin-bottom: 1px;
            font-size: 1.1rem;
          }
        }

        input {
          position: absolute;
          z-index: -1;
          opacity: 0;
          width: 0;
          height: 0;
        }
      }
    }

    dl {
      margin-top: 21px;

      dt {
        font-size: 1.05em;
        font-weight: 700;
        margin-bottom: 5px;
      }

      dd input, dd textarea {
        width: 240px;
        padding: 5px 12px;
        border-radius: 5px;
        background-color: var(--bg);
        outline: 1px solid var(--border);
        border: none;
        color: var(--text);
        font-size: .9em;
        font-weight: 400;
        transition: background-color, outline var(--transition-function) .15s;

        &:focus {
          outline: 1  px solid var(--text);
          background-color: var(--bg);
        }

        &:hover {
          background-color: var(--bg);
        }
      }

      dd textarea {
        padding: 9px;
        width: 350px;
        max-width: 350px;
        min-width: 350px;
        height: 90px;
        max-height: 120px;
      }
    }
  }
}

</style>