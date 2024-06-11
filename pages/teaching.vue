<script setup lang="ts">

interface MyCourses {
  courses: {
    course_id: number;
    course_provider: number;
    description: string;
    id: number;
    image: string;
    title: string;
    user_id: number;
  }[]
}

const {data: myProjects} = await useAPI<MyCourses>('/teaching')

const route = useRouteParams();

const isCreateCourseModalOpen = ref<boolean>(false);

const createCourseForm = ref({
  course_name: '',
  description: '',
  category: '',
  avatar: ''
});

const getBase64 = (event: Event) => {
  const input = event.target as HTMLInputElement;

  if (input!.files) {
    let reader = new FileReader();

    reader.onload = (e) => {
      createCourseForm.value.avatar = e.target?.result as string;
    }

    reader.readAsDataURL(input.files[0]);
  }
}


const onCourseCreateSubmit = async () => {
  const {course_name, description, category, avatar} = createCourseForm.value;

  const categories = category.split(',').map(value => {
    return value.trim();
  });

  const {error} = await useAPI('/teachings', {
    method: 'POST',
    body: {
      title: course_name.trim(),
      description: description.trim(),
      category: categories,
      image: avatar
    }
  });
  if (error.value) {

    return sendToast({
      type: 'error',
      message: 'Проблемы с сервером'
    })

  }

  sendToast({
    type: 'notification',
    message: 'Курс успешно создан!'
  });

  isCreateCourseModalOpen.value = false;
}

const modalState = ref<boolean>(false);

</script>

<template>
  <div class="layout">
    <LearningHead type="Teaching" v-model:state="modalState" />
    <section v-if="myProjects!.courses">
      <LearningSideBar class="aside" v-model:state="modalState">
        <LearningCard class="my-projects">
          <LearningLink
            v-for="(project, index) in myProjects!.courses"
            :key="index"
            :class="project.title === route.course && 'active'"
            icon="material-symbols:event-note-outline-rounded"
            :text="project.title"
            :to="`/teaching/${project.title}`"
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
      </LearningSideBar>

      <main>
        <nuxt-page />
      </main>
    </section>

    <div class="noProjects" v-else>
      <h2>У вас нет преподаваемых курсов</h2>
      <button @click="isCreateCourseModalOpen = true">
        Создать
      </button>
    </div>

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
              <div class="avatar" v-if="!createCourseForm.avatar">
                <div class="table">
                  <label class="input-file">
                    <input type="file" accept="image/*" @input="getBase64">
                    <span>
                        Выбрать файл...
                    </span>
                  </label>
                </div>
              </div>

              <div
                class="avatar"
                :style="`background-image: url('${createCourseForm.avatar}')`"
                v-else
              >
                <div class="table">
                  <label class="input-file">
                    <input type="file" accept="image/*" @input="getBase64">
                    <span>
                        Выбрать файл...
                    </span>
                  </label>
                </div>
              </div>

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

    .aside {

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

  .noProjects {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    h2 {
      font-size: 1.8em;
    }

    button {
      font-size: 1em;
      font-weight: 500;
      background-color: var(--text);
      border: none;
      border-radius: 6px;
      height: 35px;
      width: 120px;
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
          background-size: cover;
          background-position: center;
          border: 1px solid var(--border);
          border-radius: 6px;
          display: grid;
          place-items: center;
          line-height: 1;
          cursor: pointer;
          color: var(--text-secondary);
          user-select: none;
          position: relative;

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

          input {
            position: absolute;
            z-index: -1;
            opacity: 0;
            width: 0;
            height: 0;
          }
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

          input {
            background: none;
            border: none;
            color: var(--text);
            font-size: .95em;
            font-weight: 700;
            margin-bottom: 14px;
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


@media screen and (max-width: 768px) {
  main {
    padding-top: 50px;
  }
}

</style>