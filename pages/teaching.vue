<script setup lang="ts">

</script>

<template>
  <div class="layout">
    <TeachingHead />

    <main>
      <aside>
        <div class="my-projects card">
          <nuxt-link
            class="project"
            activeClass="active"
            to="/teaching"
          >
            <Icon
              name="material-symbols:event-note-outline-rounded"
              class="icon"
              size="1.2em"
            />
            <span>Мой Проект</span>
          </nuxt-link>

          <button class="create">
            <Icon
              name="material-symbols:add"
              class="icon"
              size="1.2em"
            />
            <span>Создать</span>
          </button>
        </div>

        <div class="dailies card">
          <nuxt-link
            class="project"
            activeClass="active"
            to="/teaching/lectures"
          >
            <Icon
              name="material-symbols:book-2"
              class="icon"
              size="1.2em"
            />
            <span>Лекции</span>
          </nuxt-link>
          <nuxt-link
            class="project"
            activeClass="active"
            to="/teaching/assignments"
          >
            <Icon
              name="material-symbols:assignment"
              class="icon"
              size="1.2em"
            />
            <span>Задания</span>
          </nuxt-link>
          <nuxt-link
            class="project"
            activeClass="active"
            to="/teaching/actions"
          >
            <Icon
              name="material-symbols:action-key"
              class="icon"
              size="1.2em"
            />
            <span>Действия</span>
          </nuxt-link>
          <nuxt-link
            class="project"
            activeClass="active"
            to="/teaching/forum"
          >
            <Icon
              name="material-symbols:forum"
              class="icon"
              size="1.2em"
            />
            <span>Форумы</span>
          </nuxt-link>
        </div>
      </aside>

      <div class="content">
        <nuxt-page />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding: var(--teaching-padding );

  main {
    display: flex;
    gap: 21px;

    aside {
      width: 300px;

      .my-projects {
        margin-bottom: 9px;
      }

      .card {
        width: 100%;
        border-radius: 14px;
        background-color: var(--bg-fourth);
        padding: 16px 16px;

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

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          width: 100%;
          background: var(--bg-fourth);
          border: none;
          color: var(--text-secondary);

          .icon {
            margin-left: 12px;
          }

          span {
            margin-left: 12px;
            font-weight: 600;
            font-size: .9em;
          }
        }

        .active {
          box-shadow: -2px 0px 0px 0px #6161cc;
          color: var(--text);
        }
      }
    }

    .content {
      flex: 1;
    }
  }
}
</style>