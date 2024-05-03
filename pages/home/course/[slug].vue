<script setup lang="ts">

const route = useRoute();

interface Teacher {
  avatar: string,
  firstname: string,
  lastname: string,
  university?: string,
  numberOfStudy?: number
}


interface CourseDetailed {
  course_modules: string[]
}

const param = route.params.slug;

const {data: course} = await useAPI<CourseDetailed>(`/courses/${param}`);

const getModulesLength = () => {
  let suffix: string;

  if (course.value?.course_modules?.length! < 5) {
    suffix = 'модуля'
  } else {
    suffix = 'модулей'
  }

  return `В этом курсе ${course.value?.course_modules?.length ?? 0} ${suffix}`;
}


</script>

<template>

  <div class="layout">

    <section>
      <div class="course">

        <div class="image">
          <NuxtImg
            src="https://pngimg.com/uploads/google/google_PNG19644.png"
            alt=""
          />
        </div>

        <h1>
          Introduction to Generative AI
        </h1>

        <p>
          Курс "Введение в Разработку Искусственного Интеллекта" призван предоставить студентам фундаментальное понимание основных концепций, методов и инструментов, используемых в современной разработке искусственного интеллекта (ИИ). Этот курс сочетает в себе теоретические знания с практическими навыками, необходимыми для создания инновационных ИИ-решений.
        </p>

        <button>
          <span class="enter">Участвовать</span>
          <span class="date">Начинается 2 мая</span>
        </button>

        <div class="info">
          <strong>305 055</strong> уже зарегистрированы
        </div>
      </div>

      <div class="about">
        <div class="left">
          <h2>Курс</h2>
          <p>Ознакомьтесь с основами и узнайте важную информацию</p>

          <div class="divider" />

          <div class="teacher-info">
            <div class="avatar" />

            Преподаватели: &nbsp; <nuxt-link to="/">Алексей Шевцов</nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <div class="other-info" v-if="course?.course_modules?.length">
      <h2>{{getModulesLength()}}</h2>
      <p>Это курс микрообучения вводного уровня, целью которого является объяснение того, что такое генеративный ИИ, как он используется и чем он отличается от традиционных методов машинного обучения. В нем также рассматриваются инструменты Google, которые помогут вам разрабатывать собственные приложения Gen AI.</p>

      <div class="grid">
        <div class="chapters">
          <div class="chapter" v-for="(module, index) in course?.course_modules" :key="index">
            <h3>{{module}}</h3>

            <span>

              Модуль {{index + 1}}

            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.layout {
  margin-top: 55px;
  margin-bottom: 35px;

  section {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 63px;
    height: calc(100vh - 110px);
    align-items: center;

    .course {
      flex-grow: 0;
      flex-basis: 58%;

      .image {
        height: 55px;

        img {
          max-height: 55px;
          height: 100%;
        }
      }

      h1 {
        font-size: 2.25em;
        margin-bottom: 6px;
      }

      p {
        color: var(--text-secondary);
        font-size: .97em;
        margin-bottom: 21px;
      }

      button {
        height: 60px;
        padding: 0 42px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--text);
        color: var(--bg);
        border-radius: 4px;
        border: none;
        margin-bottom: 15px;

        span {
          width: 100%;
        }

        .enter {
          font-size: 1.4em;
          font-weight: 800;
        }

        .date {
          font-size: .9em;
          font-weight: 600;
        }
      }

      .info {
        font-size: .95em;
      }
    }

    .about {
      flex-grow: 0;
      flex-basis: 42%;
      display: flex;
      align-items: center;

      .left {
        margin-left: auto;

        h2 {
          font-size: 1.3em;
        }

        p {
          font-size: .9em;
          color: var(--text-secondary);
        }

        .divider {
          height: 2px;
          width: 100%;
          background-color: var(--border);
          margin: 12px 0;
        }

        .teacher-info {
          height: 40px;
          display: flex;
          align-items: center;
          color: var(--text);

          .avatar {
            height: 95%;
            aspect-ratio: 1/1;
            background-color: var(--bg);
            border: 1px solid var(--border);
            border-radius: 50%;
            margin-right: 6px;
          }

          a {
            color: var(--text);
            font-weight: 400;
          }
        }
      }
    }
  }

  .other-info {

    h2 {
      font-size: 1.8em;
      margin-bottom: 14px;
    }

    p {
      font-size: .95em;
      color: var(--text-secondary);
      width: 66%;
      margin-bottom: 21px;
    }

    .grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 33%;

      .chapters {
        padding: 8px 32px;
        border: 2px solid var(--border);
        border-radius: 8px;
        display: grid;

        .chapter {
          height: 80px;
          margin-bottom: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;

          h3 {
            font-size: 1.2em;
          }

          span {
            color: var(--text-secondary);
            font-size: .85em;
          }

          &:not(:first-child) {
            border-top: 2px solid var(--border);
            padding-top: 8px;
          }
        }
      }

    }
  }
}


</style>