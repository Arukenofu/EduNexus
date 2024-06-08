<script setup lang="ts">

import type { User } from "~/interfaces/User";

const isModalOpen = ref<boolean>(false);

const {data: user} = await useAPI<User>('/profile')!;

const updateUserValue = (newValue: User) => {

  user.value = newValue;

  isModalOpen.value = false;

}

</script>

<template>
  <div class="layout">
    <section class="profile-panel">
      <div class="profile-card">
        <h2>Личные Данные</h2>

        <div class="profile-avatar" :style="`background-image: url('${user?.profile_info.profile}')`" />

        <h1>{{user?.profile_info.firstname}}</h1>

        <p>{{user?.profile_info.description}}</p>

        <button class="edit" @click="isModalOpen =! isModalOpen">
          <Icon class="icon" name="iconoir:edit" size="1.2em" />
        </button>

      </div>

      <button @click="$router.push('/teaching')">
        Перейти в режим преподавателя
      </button>
    </section>

    <section class="main-info-panel">
      <h1>Опыт</h1>
    </section>
  </div>


  <Modal v-model:is-open="isModalOpen">
    <ProfileModal v-model:is-open="isModalOpen" v-model:user="user" @update-profile="updateUserValue" />
  </Modal>
</template>

<style scoped lang="scss">
.layout {
  margin-top: 101px;
  display: flex;
  gap: 21px;

  .profile-panel {



    .profile-card {
      width: 350px;
      border-radius: 8px;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      padding: 20px 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 7px;

      h2 {
        font-size: 1.05em;
        text-align: center;
        margin-bottom: 21px;
      }

      .profile-avatar {
        background-color: var(--bg);
        width: 150px;
        border-radius: 50%;
        aspect-ratio: 1/1;
        margin: 0 auto 7px;
        background-position: center;
        background-size: cover;
        border: 5px solid var(--border);
      }

      h1 {
        text-align: center;
        margin-bottom: 9px;
      }

      p {
        text-align: center;
        font-size: .85em;
        padding: 0 16px;
        color: var(--text-secondary);
        margin-bottom: 21px;
      }

      .edit {
        --positioning: 15px;
        position: absolute;
        top: var(--positioning);
        right: var(--positioning);
        border: none;
        color: var(--text);
        aspect-ratio: 1/1;
        padding: 6px;
        border-radius: 4px;
        background-color: initial;

        &:hover {
          backdrop-filter: brightness(.6);
        }

        .icon {
          position: relative;
          bottom: 2px;
        }
      }

    }


    & > button {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      background-color: var(--bg-third);
      border: 1px solid var(--border);
      color: var(--text);

      &:hover {
        background-color: var(--border);
        transition: background-color 0.15s var(--transition-function);
      }
    }
  }

  .main-info-panel {
    flex: 1;

    h1 {
      display: block;
      width: 100%;
      font-size: 1.75em;
      margin-bottom: 7px;
    }
  }
}


</style>