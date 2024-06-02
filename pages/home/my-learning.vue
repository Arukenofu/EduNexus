<script setup lang="ts">


const {data: response} = await useAPI<MyCourses>('/learning');

const toLearnPage = (param1: string): void => {
  useRouter().push(`/learn/${param1}`)
}

</script>

<template>
  <article>
    <div class="main">
      <h1>Моё обучение</h1>

      <section v-if="!response?.courses?.length">
        <p>У вас нет текущих курсов. Пожалуйста, выберите себе онлайн-обучение. :P</p>
      </section>

      <section v-else>

        <div class="course" v-for="course in response!.courses">

          <div class="image" :style="`background-image: url('${course.image}')`" />

          <div class="text">
            <p>{{ course.title }}</p>
            <span>{Period of study}</span>
          </div>

          <div class="rate">
            <Icon name="iconoir:fire-flame" size="1.3em" color="var(--red)" />
            8.7 / 10
          </div>

          <button @click="toLearnPage(course.title)" class="current">
            Войти
          </button>

        </div>

      </section>
    </div>

    <div class="tasks-block">
      <h1>Текущие задания</h1>

      <div class="tasks-wrap" v-if="false">
        <div class="task" v-for="task in 5">

          <div class="image" />

          <div class="text">
            <p>Computer Science</p>
            <span>Тест: до 21 Фев. 2024</span>
          </div>

          <Icon class="enter" name="iconoir:arrow-right-circle" size="1.9em" />
        </div>
      </div>

      <p>

      </p>
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
          background-position: center;
          background-size: cover;
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