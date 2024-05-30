<script setup lang="ts">

const {module, course} = useRouteParams();

</script>

<template>
  <div class="layout">
    <h1>Решить алгоритмы с сортировкой</h1>
    <div class="assignment-data">
      <span>
        Ерсултан Гей,
      </span>

      <span>
        15 Мая
      </span>
    </div>

    <div class="divider" />

    <p class="description">
      На этом этапе имеется необходимость в изменении функционала разработанного сайта.
      <br>
      Задание 1. Требуется добавить на сайт возможность зарегистрированным пользователям сохранять тикеты в избранное (favorite, cart) с последующим просмотром списка тикетов и удаления из избраного.
      <br>
      Задание 2. Необходимо добавить автора к каждому тикету (дата, время, пользователь и тд). Должна быть возможность просматривать и добавлять авторов из админки.
      <br>
      Бонус Задание 3. Необходимо добавить возможность зарегистрированным пользователям оценивать (соотношение лайков и дизлайков) отзывы других пользователей. Пользователь не может оценивать свои отзывы. Пользователь может оставить только одну оценку к каждому отзыву. Администратор может видеть количество положительных и отрицательных оценок каждого отзыва в админке. На сайте пользователи видят соотношение положительных и отрицательных оценок каждого отзыва.
    </p>
  </div>

  <div class="go">
    <button @click="$router.push(`/assignment/${course}/${module}/code`)">
      <Icon name="iconoir:nav-arrow-right" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding-top: 72px;
  margin-bottom: 72px;
  margin-left: 45px;
  width: 75%;
  height: calc(100dvh - 72px - var(--electron));

  h1 {
    color: var(--text-soft);
  }

  .assignment-data {
    display: flex;
    color: var(--text-secondary);

    span {
      display: block;
      margin-right: 6px;
      font-size: .9em;
    }
  }

  .divider {
    width: 100%;
    height: 2px;
    background-color: var(--border);
    margin: 15px 0;
  }

  .description {
    line-height: 1.4;
    color: var(--text-soft);
    font-size: .95em;
  }
}

.go {
  height: 100%;
  width: 15%;
  position: absolute;
  right: 0;
  top: 0;
  display: grid;

  button {
    background: var(--bg);
    border: none;
    color: var(--text);
    font-size: 2em;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(1.25);
    }
  }
}
</style>