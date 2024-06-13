<script setup lang="ts">
import type { Module } from "~/interfaces/Module";
import type { CourseDetailed } from "~/interfaces/CourseDetailed";

const route = useRouteParams();
const baseURL = useRuntimeConfig().public.apiBase

const {data} = await useAsyncData<CourseDetailed>('courseInfo', () => {
  return $fetch(`/courses/${route.value.course}`, {
    baseURL: baseURL,
    headers: {
       Authorization: "Bearer " + getToken() || '',
    }
  })
}, {
  watch: [route]
})

const {data: modules} = await useAsyncData<CourseDetailed>('modules', async () => {
  return $fetch(`/courses/${route.value.course}/` , {
    baseURL: baseURL,
    headers: {
       Authorization: "Bearer " + getToken() || '',
    }
  })
});


const isCreateModalOpen = ref(false);
const moduleTitle = ref<string>('');

const createModule = async () => {
  if (moduleTitle.value?.trim().length < 4) {
    return sendToast({
      type: "error",
      message: "Название модуля должно иметь хотя бы 4 символа"
    })
  }
  const {error} = await useAPI(`/teaching/${route.value.course}/modules`, {
    method: 'POST',
    body: {
      title: moduleTitle.value.trim()
    }
  });

  if (error.value) {
    return sendToast({
      type: "error",
      message: "Ошибка при создании модуля"
    })
  }

  sendToast({
    type: "notification",
    message: "Модуль создан успешно"
  });

  if (modules.value?.modules === null) {
    modules.value.modules = []
  }

  modules.value?.modules.push(moduleTitle.value.trim())
}

const nuxtApp = useNuxtApp();
const isLoading = ref<boolean>(false);

nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});

</script>

<template>
  <Transition name="course" appear>
    <div class="layout" v-if="!isLoading">
      <div class="about-course">
        <div
          class="image"
          :style="setAvatar(data?.details.image)"
        />
        <div class="information">
          <h1>{{route.course}}</h1>

          <div class="teachers">
            <div class="teacher" v-for="teacher in data?.teachers">
              <div class="avatar" :style="setAvatar(teacher?.profile)" />
              <span>{{teacher.firstname}}</span>
            </div>
          </div>
        </div>
      </div>
      <p class="course-description">
        {{data.details.description}}
      </p>

      <LearningBlock class="modules-block" text="Все Модули">
        <div class="modules">
          <div class="module" v-for="module in modules.modules">
            {{module}}
          </div>

          <button class="addModule" @click="isCreateModalOpen = true">
            <Icon name="material-symbols:add-circle" size="3em" />
            <div>Добавить модуль</div>
          </button>
        </div>
      </LearningBlock>

      <Modal v-model:is-open="isCreateModalOpen" >
        <div class="modal-content">
          <h3>Вы хотите создать модуль?</h3>

          <p></p>

          <label>
            Название модуля
          </label>
          <input type="text" v-model="moduleTitle" />

          <div class="buttons">
            <button class="exit" @click="isCreateModalOpen = false">
              Выйти
            </button>

            <button class="continue" @click="createModule()">
              Продолжить
            </button>
          </div>
        </div>
      </Modal>
    </div>

    <div class="loading" v-else>
      <Loading />
    </div>
  </Transition>


</template>

<style scoped lang="scss">

.about-course {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 21px;

  .image {
    height: 180px;
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    border: 1px solid var(--ui-secondary);
    border-radius: 12px;
  }

  .information {
    height: 90%;

    h1 {
      font-size: 2.5em;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: 1.2px;
      margin-bottom: 6px;
    }

    p {
      color: var(--text-secondary);
      font-size: .9em;
      margin-bottom: 6px;
    }

    .teachers {
      display: flex;
      align-items: center;

      .teacher {
        display: flex;
        align-items: center;

        .avatar {
          height: 20px;
          aspect-ratio: 1/1;
          background-color: var(--bg-secondary);
          border-radius: 50%;
          background-size: cover;
          background-position: center;
        }

        span {
          margin-left: 6px;
        }
      }
    }
  }
}

.course-description {
  line-height: 1.6;
  font-size: .98em;
  font-weight: 500;
  margin-bottom: 15px;
  color: var(--text-soft);
}

.last-rates {

  h5 {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 9px;
  }

  .rates-wrap {

    .rates-enter-active {
      transition: all 0.4s ease-out;
    }

    .rates-leave-active {
      transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .rates-enter-from,
    .rates-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }


  }
}

.course-enter-active {
  transition: all 0.4s ease-out;
}

.modules-block {
  width: 100%;

  .modules {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;

    .module {
      height: 120px;
      background-color: var(--ui-secondary);
      display: grid;
      place-items: center;
      border: none;
      transition: font-size .5s var(--transition-function);
      color: var(--text-secondary);
      font-weight: 700;
      border-radius: 12px;
      font-size: 1.2em;
      cursor: pointer;

      &:hover {
        font-size: 1.4em;
      }
    }

    .addModule {
      height: 120px;
      background-color: var(--ui-secondary);
      border-radius: 12px;
      cursor: pointer;
      transition: transform .5s var(--transition-function);
      border: none;
      color: var(--text-secondary);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;

      div {
        font-size: 1.1em;
        font-weight: 700;
      }
    }
  }
}

.modal-content {
  width: 550px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  padding: 32px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6em;
    margin-bottom: 9px;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 21px;
    font-size: .9em;
  }

  label {
    margin-bottom: 6px;
    font-size: 1em;
  }

  input {
    width: 100%;
    background-color: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    height: 35px;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 42px;
  }

  .buttons {
    margin-top: auto;
    display: flex;
    justify-content: space-between;

    button {
      padding: 9px 21px;
      font-size: .9em;
      font-weight: 600;
      background-color: var(--text);
      color: var(--bg);
      border: none;
      border-radius: 4px;
    }
  }
}

.course-enter-from {
  opacity: 0;
}

.loading {
  display: grid;
  place-items: center;
  height: 70vh;
}

@media screen and (max-width: 590px){
  .about-course {
    flex-direction: column;
    margin-bottom: 12px !important;
  }


  .information {
    margin: 0 auto;
    text-align: center;

    h1 {
      max-width: unset !important;
      width: 100%;
    }
  }

  .teachers {
    justify-content: center;
  }

  .course-description {
    text-align: center;
  }
}

@media screen and (max-width: 768px){
  .loading {
    display: block;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%, -50%);
  }
}

@media screen and (max-width: 400px) {
  .modules {
    grid-template-columns: 1fr !important;
  }
}

</style>