<script setup lang="ts">

const myProjects = [
  'Python with database',
];

const route = useRouteParams();

const isCreateCourseModalOpen = ref<boolean>(true);

const createCourseForm = ref({
  course_name: '',
  description: '',
  category: '',
  company: '',
  avatar: ''
});

const onCourseCreateSubmit = () => {
  sendToast({
    type: 'notification',
    message: 'Курс успешно создан!'
  })
}

</script>

<template>
  <div class="layout">
    <LearningHead type="Teaching" />
    <section>
      <aside>
        <LearningCard class="my-projects">
          <LearningLink
            v-for="(project, index) in myProjects"
            :key="index"
            :class="project === route.course && 'active'"
            icon="material-symbols:event-note-outline-rounded"
            :text="project"
            :to="`/teaching/${project}`"
          />

          <button class="create" @click="isCreateCourseModalOpen =! isCreateCourseModalOpen">
            <Icon
              name="material-symbols:add"
              class="icon"
              size="1.2em"
            />
            <span>Создать</span>
          </button>
        </LearningCard>

        <LearningCard class="dailies">
          <LearningLink
            :to="`/teaching/${route.course}/lectures`"
            icon="material-symbols:book-2"
            text="Лекции"
          />

          <LearningLink
            :to="`/teaching/${route.course}/assignments`"
            icon="material-symbols:assignment"
            text="Задания"
          />

          <LearningLink
            :to="`/teaching/${route.course}/actions`"
            icon="material-symbols:action-key"
            text="Действия"
          />

          <LearningLink
            :to="`/teaching/${route.course}/forum`"
            icon="material-symbols:forum"
            text="Форумы"
          />
        </LearningCard>
      </aside>

      <main>
        <nuxt-page />
      </main>
    </section>

    <Modal v-model:is-open="isCreateCourseModalOpen">
      <div class="createCourse">
        <div class="control">
          <h1>Создание вашего курса</h1>

          <button>
            Закрыть
            <Icon class="icon" name="ic:baseline-close" size="1.4em" />
          </button>
        </div>

        <div class="content">


          <div class="main-form">
            <div class="avatar-section">
              <div class="avatar" />
            </div>
            <div class="main-info">

              <div class="course-name">
                <span>Название</span>
                <input type="text" placeholder="Название курса" v-model="createCourseForm.course_name" />
              </div>

              <div class="course-description">
                <span>Описание</span>
                <textarea  placeholder="В этом курсе вы обучитесь..." v-model="createCourseForm.description" />
              </div>


            </div>
          </div>

          <div class="bottom-form">

            <div class="categories">
              <div class="category">
                <span>Категория</span>
                <input type="text" placeholder="Программирование" v-model="createCourseForm.category" />
              </div>

              <div class="category">
                <span>Компания</span>
                <input type="text" placeholder="University of..." v-model="createCourseForm.company" />
              </div>
            </div>

            <div class="controls">
              <button @click="onCourseCreateSubmit()">Создать</button>
            </div>

          </div>

        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding: var(--teaching-padding );

  section {
    display: flex;
    gap: 21px;

    aside {
      width: 300px;

      .my-projects, .dailies {
        margin-bottom: 9px;

        .create {
          width: 100%;
          background: var(--bg-fourth);
          border: none;
          display: flex;
          align-items: center;
          color: var(--text-secondary);
          font-size: 1em;

          .icon {
            margin-left: 12px;
          }

          span {
            margin-left: 12px;
            font-weight: 600;
            font-size: .9em;
          }
        }

        a, .create {
          height: 35px;

          &:focus-visible {
            outline: 2px solid var(--text);
          }

          &:hover {
            color: var(--text);
          }

          &:not(:last-child) {
            margin-bottom: 6px;
          }
        }

      }


    }

    main {
      flex: 1;
    }
  }

  .createCourse {
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    max-width: 550px;
    width: 550px;
    aspect-ratio: 1/.85;
    overflow-y: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .control {
    width: 100%;
    height: 40px;
    background-color: var(--bg);
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    padding: 0 16px;
    margin-top: 21px;

    h1 {
      padding: 0 12px;
      font-size: 1.2em;
      font-weight: 700;
      width: 80%;
    }

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
    position: relative;
    padding: 0 31px;
    display: flex;
    flex-direction: column;
    height: 100%;

    .main-form {
      display: flex;

      .avatar-section {
        width: 90px;

        .avatar {
          width: 100%;
          aspect-ratio: 1/1;
          background-color: var(--bg);
          border: 1px solid var(--border);
          border-radius: 6px;
        }
      }

      .main-info {
        margin-left: 18px;
        color: var(--text-secondary);
        flex: 1;

        .course-name {
          display: flex;
          flex-direction: column;
          margin-bottom: 35px;

          span {
            text-transform: uppercase;
            font-size: .65em;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }

          input {
            background: none;
            border: none;
            color: var(--text);
            font-size: 1.5em;
            font-weight: 700;
          }
        }

        .course-description {
          display: flex;
          flex-direction: column;

          span {
            text-transform: uppercase;
            font-size: .65em;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }

          textarea {
            border: none;
            resize: none;
            outline: none;
            background: none;
            color: var(--text);
            font-size: .95em;
          }

        }

      }


    }

    .bottom-form {
      padding: 8px 31px 24px;
      position: absolute;
      height: 150px;
      width: 100%;
      background-color: var(--border);
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;

      .categories {
        display: flex;
        justify-content: space-between;

        .category {
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          color: var(--text-secondary);

          span {
            text-transform: uppercase;
            font-size: .7em;
            letter-spacing: 1px;
            margin-bottom: 6px;
          }

          input {
            background-color: var(--bg);
            color: var(--text);
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
          }
        }
      }

      .controls {
        margin-top: auto;
        width: 100%;
        position: relative;

        button {
          position: absolute;
          margin-left: auto;
          right: 0;
          bottom: 0;
          padding: 9px 24px;
          color: var(--bg);
          background-color: var(--text);
          border: none;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>