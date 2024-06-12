<script setup lang="ts">


const {data: response} = await useAPI<MyCourses>('/learning');

console.log(response.value);

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

          <div class="image" :style="setAvatar(course.image)" />

          <div class="text">
            <p>{{ course.title }}</p>
            <span>{{course.organization_name}}</span>
          </div>

          <button @click="toLearnPage(course.title)" class="current">
            Войти
          </button>

        </div>

      </section>
    </div>

  </article>
</template>

<style scoped lang="scss">
article {
  padding-top: 81px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;

  h1 {
    width: 100%;
    margin-bottom: 12px;
  }

  .main {
    flex: 1;

    section {
      display: flex;
      flex-direction: column;
      gap: 9px;
      margin-bottom: 72px;

      p {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
      }

      .course {
        width: 100%;
        max-width: 75%;
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
          margin-left: auto;
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
}


@media screen and (max-width: 1300px) {
  .course {
    max-width: unset !important;
  }
}

@media screen and (max-width: 850px) {
  .course {
    height: 80px !important;

    .image {
      display: none;
    }

    button {
      margin-right: 0 !important;
      height: 85% !important;
    }
  }
}
</style>