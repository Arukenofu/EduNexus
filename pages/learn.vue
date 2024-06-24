<script setup lang="ts">

const route = useRouteParams();

const {data: courses} = await useAPI<MyCourses>('/learning')

const isMobile = useDevice()

</script>

<template>

  <div class="layout">
    <LearningHead type="Learning" />

    <section>
      <LearningSideBar class="aside" v-if="!isMobile">
        <LearningCard class="my-projects">
          <LearningLink
            v-for="(project, index) in courses!.courses"
            :key="index"
            :class="project.title === route.course && 'active'"
            icon="material-symbols:event-note-outline-rounded"
            :text="project.title"
            :to="`/learn/${project.title}`"
          />

        </LearningCard>

        <LearningCard class="dailies">
          <LearningLink
            :to="`/learn/${route.course}/lectures`"
            icon="material-symbols:book-2"
            text="Лекции"
          />

          <LearningLink
            :to="`/learn/${route.course}/assignments`"
            icon="material-symbols:assignment"
            text="Задания"
          />
        </LearningCard>
      </LearningSideBar>

      <main>
        <NuxtPage />
      </main>
    </section>

    <LearningMobileNavigator v-if="isMobile" />

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

        .create {
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

      .dailies {
      }

    }

    main {
      flex: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  main {
    padding-top: 50px;
  }
}


</style>