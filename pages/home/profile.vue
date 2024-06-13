<script setup lang="ts">
import type { User } from "~/interfaces/User";

const isModalOpen = ref<boolean>(false);

const {data: user} = await useAPI<User>('/profile')!;

const updateUserValue = (newValue: User) => {

  user.value = newValue;

  isModalOpen.value = false;

}

const {data: myProjects} = await useAPI<MyCourses>('/teaching')
const isMobile = useDevice()

</script>

<template>
  <div class="layout">
    <section class="profile-panel">
      <div class="profile-card">
        <h2>Личные Данные</h2>

        <div class="profile-avatar" :style="setAvatar(user?.profile_info?.profile)" />

        <h1>{{user?.profile_info.firstname}}</h1>

        <p>{{user?.profile_info.description}}</p>

        <button class="edit" @click="isModalOpen =! isModalOpen">
          <Icon class="icon" name="iconoir:edit" size="1.2em" />
        </button>

      </div>

      <button @click="$router.push('/teaching')" v-if="!isMobile">
        Перейти в режим преподавателя
      </button>
    </section>

    <section class="main-info-panel">
      <h1>Преподаваемые курсы</h1>
      <div class="assigning">
        <nuxt-link
          class="course"
          v-for="course in myProjects!.courses"
          :to="`/teaching/${course.title}`"
        >
          <div class="image" :style="setAvatar(course.image)" />
          <div class="text">
            <h6>{{course.title}}</h6>
            <p>{{course.description}}</p>
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>


  <Modal v-model:is-open="isModalOpen">
    <ProfileModal v-model:is-open="isModalOpen" v-model:user="user" @update-profile="updateUserValue" />
  </Modal>
</template>

<style scoped lang="scss">
.layout {
  padding-top: 101px;
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  .profile-panel {

    .profile-card {
      position: relative;
      width: 350px;
      border-radius: 8px;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      padding: 20px 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 7px;
      transition: color .15s var(--transition-function), border .15s var(--transition-function), background-color .15s var(--transition-function);

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
      transition: color .15s var(--transition-function), border .15s var(--transition-function), background-color .15s var(--transition-function);


      &:hover {
        background-color: var(--border);
        transition: background-color 0.15s var(--transition-function);
      }
    }
  }

  .main-info-panel {
    flex: 1;
    margin-bottom: 63px;

    h1 {
      display: block;
      width: 100%;
      font-size: 1.75em;
      margin-bottom: 7px;
    }

    .assigning {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;

      .course {
        border-radius: 8px;
        background-color: var(--bg-secondary);
        padding: 9px;
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        line-height: 1;
        display: flex;
        align-items: center;
        transition: color .15s var(--transition-function), border .15s var(--transition-function), background-color .15s var(--transition-function);


        .image {
          border-radius: 6px;
          height: 80px;
          aspect-ratio: 16/10;
          background-color: var(--bg);
          background-position: center;
          background-size: cover;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 9px;
          margin-right: 12px;
          gap: 2px;

          h6 {
            font-size: 1.2em;
          }

          p {
            font-size: .9em;
            color: var(--text-secondary);
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
}


@media screen and (max-width: 1100px) {
  .layout {
    display: grid;
  }

  .profile-card {
    width: 100% !important;
  }
}

@media screen and (max-width: 768px) {
    .main-info-panel {
      h1 {
        font-size: 1.5em !important;
      }
    }

  .assigning {
    grid-template-columns: 1fr !important;
  }
}

</style>