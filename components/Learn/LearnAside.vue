<script setup lang="ts">

</script>

<template>
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

      <LearnNav />
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
        <Icon class="icon str3" name="iconoir:more-horiz" size="1.5em" />
      </div>
    </div>

  </aside>
</template>

<style scoped lang="scss">
  aside {
    position: fixed;
    min-height: 100dvh;
    width: 25%;
    background-color: var(--bg-third);
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--border);

    .course {
      height: 90px;
      width: 100%;
      display: flex;
      align-items: center;
      box-shadow: 0 -2px 0 var(--border) inset;

      .avatar {
        margin-left: 33px;
        height: 50px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: #1d1d2f;
        border: 3px solid var(--bg-secondary);
      }

      .course-info {
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 12px;

        p {
          font-size: 1.3em;
          font-weight: 700;
          color: var(--text);
          white-space: nowrap;
        }

        span {
          font-size: .8em;
          font-weight: 600;
          color: var(--text-secondary);
        }
      }
    }

    .menu {
      margin-top: 18px;
      padding: 0 33px 14px;

      p {
        color: var(--text-secondary);
        font-weight: 600;
        margin-bottom: 7px;
        margin-left: 9px;
      }
    }

    .card {
      border-radius: 9px;
      width: 90%;
      margin: auto auto 50px;
      background-color: var(--bg-secondary);
      display: flex;
      padding: 18px 12px;
      cursor: pointer;
      user-select: none;
      transition: box-shadow .1s;

      &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.02);
      }

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
          font-weight: 700;
          color: var(--text);
        }

        span {
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

        &:hover {
          color: var(--main);
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    aside {
      top: 30px;
      width: 30%;

      .course {

        .avatar {
          margin-left: 24px;
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

      .menu {
        padding: 0 24px 14px;
      }
    }
  }
</style>