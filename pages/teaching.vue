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

const {data: myProjects, refresh} = await useAPI<MyCourses>('/teaching')

const route = useRouteParams();

const isCreateCourseModalOpen = ref<boolean>(false);

const isMobile = useDevice();

</script>

<template>
  <div class="layout">
    <LearningHead type="Teaching" />
    <section v-if="myProjects!.courses">
      <LearningSideBar class="aside" v-if="!isMobile">
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

      <LearningMobileNavigator v-if="isMobile" />
    </section>

    <div class="noProjects" v-else>
      <h2>У вас нет преподаваемых курсов</h2>
      <button @click="isCreateCourseModalOpen = true">
        Создать
      </button>
    </div>

    <CreateCourseModal v-model:state="isCreateCourseModalOpen" @refresh="refresh" />
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding: var(--teaching-padding);
  margin-bottom: 72px;

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
}


@media screen and (max-width: 768px) {
  main {
    padding-top: 50px;
  }
}

</style>