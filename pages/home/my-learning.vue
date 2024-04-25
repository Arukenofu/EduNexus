<script setup lang="ts">

const values = ref<object[]>([{

}])

</script>

<template>
  <article>
    <div class="main">
      <h1>Моё обучение</h1>

      <section v-if="!values.length">
        <p>У вас нет текущих курсов. Пожалуйста, выберите себе онлайн-обучение. :P</p>
      </section>

      <section v-else>

        <div class="course" v-for="course in 3">

          <div class="image" />

          <div class="text">
            <p>Machine Learning: Regression</p>
            <span>Feb 4, 2024 - Feb 18, 2024</span>
          </div>

          <div class="rate">
            <Icon name="iconoir:fire-flame" size="1.3em" color="var(--red)" />
            8.7 / 10
          </div>

          <button @click="$router.push('/learn/main')" class="current">
            Войти
          </button>

        </div>

      </section>
    </div>

    <div class="tasks-block">
      <h1>Текущие задания</h1>

      <div class="tasks-wrap">
        <div class="task" v-for="task in 5">

          <div class="image" />

          <div class="text">
            <p>Computer Science</p>
            <span>Тест: до 21 Фев. 2024</span>
          </div>

          <Icon class="enter" name="iconoir:arrow-right-circle" size="1.9em" />
        </div>
      </div>
    </div>

  </article>


</template>

<style scoped lang="scss">
article {
  margin-top: 81px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;

  h1 {
    width: 100%;
    margin-bottom: 12px;
  }

  .main {
    flex: 7;

    section {
      display: flex;
      flex-direction: column;
      gap: 9px;

      p {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
      }

      .course {
        width: 100%;
        height: 100px;
        background-color: var(--bg-secondary);
        border-radius: 9px;
        cursor: pointer;
        padding: 12px;
        display: flex;
        align-items: center;

        .image {
          height: 100%;
          aspect-ratio: 1.4/1;
          background-color: var(--bg);
          border-radius: 6px;
          cursor: default;
        }

        .text {
          height: 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 14px;

          p {
            font-size: 1.1em;
            font-weight: 800;
            cursor: text;
          }

          span {
            font-size: .8em;
            display: block;
            font-weight: 500;
            color: var(--text-secondary);
            cursor: text;
          }
        }

        .rate {
          margin-left: auto;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 3px;
          cursor: default;
          white-space: nowrap;
        }

        button {
          margin-left: 21px;
          border: none;
          height: 65%;
          border-radius: 9px;
          aspect-ratio: 16/7;
          font-weight: 800;
          font-size: .87em;
          margin-right: 7px;
          transition: scale 0.2s ease;

          &:hover {
            scale: 1.05;
          }
        }

        .current {
          background-color: var(--bg);
          color: var(--text);
        }
      }
    }
  }

  .tasks-block {
    flex: 4;
    width: 100%;

    .tasks-wrap {
      min-height: 500px;
      border-radius: 9px;

      .task {
        width: 100%;
        height: 75px;
        background-color: var(--bg-secondary);
        border-radius: 6px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        margin-bottom: 6px;

        .image {
          height: 100%;
          aspect-ratio: 1/1;
          background-color: var(--bg);
          border-radius: 5px;
        }

        .text {
          margin-left: 12px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          line-height: 1.1em;

          p {
            font-size: .95em;
            font-weight: 700;
            color: var(--text);
          }

          span {
            font-size: .75em;
            color: var(--text-secondary);
          }
        }

        .enter {
          margin-left: auto;
          margin-right: 12px;
          cursor: pointer;
          transition: color 0.2s ease;
          color: var(--text-secondary);

          &:hover {
            color: var(--text);
          }
        }
      }
    }
  }
}
</style>