<script setup lang="ts">

</script>

<template>
  <div class="container">

    <aside>

      <div class="course">
        <div class="avatar" />

        <div class="course-info">
          <p class="text">
            Computer Science
          </p>
          <span>
            5 Неделя
          </span>
        </div>
      </div>

      <div class="menu">
        <p @click="$router.push('/home/main')">Меню</p>

        <nav>
          <NuxtLink to="/learn/main">
            <Icon class="icon str2" size="1.4em" name="iconoir:home-alt" />
            <div>Главная</div>
          </NuxtLink>

          <NuxtLink to="/learn/lectures">
            <Icon class="icon str2" size="1.4em" name="iconoir:book" />
            <div>Лекции</div>
          </NuxtLink>

          <NuxtLink to="/learn/assignments">
            <Icon class="icon str2" size="1.4em" name="iconoir:learning" />
            <div>Задания</div>
          </NuxtLink>

          <NuxtLink to="/learn/messages">
            <Icon class="icon str2" size="1.4em" name="iconoir:message-text" />
            <div>Сообщения</div>
          </NuxtLink>

          <NuxtLink to="/learn/forum">
            <Icon class="icon str2" size="1.4em" name="iconoir:group" />
            <div>Форум</div>
          </NuxtLink>

          <NuxtLink to="/home/main">
            <Icon class="icon str2" size="1.4em" name="iconoir:arrow-left" />
            <div>Главное меню</div>
          </NuxtLink>
        </nav>

      </div>

      <div class="card">
        <div class="avatar" />
        <div class="text">
          <p>Ерсултан Г.</p>
          <span>
            Ученик
          </span>
        </div>

        <div class="more">
          <Icon class="icon str2" name="iconoir:more-horiz" size="1.5em" />
        </div>
      </div>

    </aside>

    <main>
      <nuxt-page />
    </main>

  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;

  aside {
    top: 0;
    position: fixed;
    min-height: 100dvh;
    width: 25%;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    padding: 30px 33px;

    .course {
      margin-top: 42px;
      width: 100%;
      height: 75px;
      display: flex;
      border-bottom: 1px solid var(--bg-secondary);

      .avatar {
        height: 60px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: #1d1d2f;
        border: 3px solid var(--bg-secondary);
      }

      .course-info {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 12px;

        p {
          font-size: 1.3em;
          font-weight: 800;
          color: var(--text);
          white-space: nowrap;
        }

        span {
          position: relative;
          bottom: 3px;
          font-size: .8em;
          font-weight: 700;
          color: var(--text-secondary);
        }
      }
    }

    .menu {
      margin-top: 18px;
      padding-bottom: 14px;

      p {
        color: var(--text-secondary);
        font-weight: 800;
        margin-bottom: 7px;
        margin-left: 9px;
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: 2px;

        a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 800;
          display: flex;
          align-items: center;
          padding: 12px 9px;
          border-radius: 3px;
          font-size: 1em;

          div {
            position: relative;
            top: 1.3px;
            margin-left: 6px;
          }

          &:hover, &:focus-visible {
            outline: none;
            background-color: var(--bg-secondary);
            color: var(--text);
          }
        }

        .router-link-active {
          color: var(--text);
        }
      }
    }

    .card {
      margin-top: auto;
      border-radius: 9px;
      width: 100%;
      background-color: var(--bg-secondary);
      display: flex;
      padding: 15px 12px;
      margin-bottom: 27px;

      .avatar {
        height: 45px;
        aspect-ratio: 1/1;
        background-color: #00dc82;
        border-radius: 50%;
      }

      .text {
        margin-left: 9px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          font-size: 1.1em;
          font-weight: 800;
          color: var(--text);
        }

        span {
          position: relative;
          top: -3px;
          font-size: .85em;
          color: var(--text-secondary);
        }
      }

      .more {
        display: grid;
        place-items: center;
        margin: auto 9px auto auto;
        height: 30px;
        aspect-ratio: 1/1;
        cursor: pointer;
        border-radius: 50%;
        color: var(--text);
        stroke-width: 3px;

        .icon path {

        }

        &:hover {
          color: var(--main);
        }
      }
    }
  }

  main {
    padding-left: calc(25% + 21px);
    padding-right: 21px;
    width: 100%;
    min-height: calc(100dvh - 30px);
    background-color: var(--bg-secondary);
  }
}

@media screen and (max-width: 1200px) {
  .container main {
    padding-left: calc(30% + 21px);
  }

  .container aside {
    padding: 0 9px;
    top: 10px;
    width: 30%;

    .course {
      height: 70px;

      .avatar {
        height: 50px;
      }

      .course-info {
        height: 50px;
        margin-left: 6px;
        font-size: 14px;

        p {
          font-size: 1.3em;
        }
      }
    }
  }
}
</style>