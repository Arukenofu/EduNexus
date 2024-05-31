<script setup lang="ts">

const myProjects = [
  'Python with database',
];

const route = useRouteParams();

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

          <button class="create">
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
}
</style>