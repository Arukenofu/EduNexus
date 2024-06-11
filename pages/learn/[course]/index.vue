<script setup lang="ts">
import type { Module } from "~/interfaces/Module";
import type { CourseDetailed } from "~/interfaces/CourseDetailed";

const route = useRouteParams();
const baseURL = useRuntimeConfig().public.apiBase

const {data} = await useAsyncData<CourseDetailed>('courseInfo', () => {
  return $fetch(`/courses/${route.value.course}`, {
    baseURL: baseURL,
    headers: {
      Authorization: "Bearer " + getToken() || '',
    }
  })
}, {
  watch: [route]
})

const {data: modules} = await useAsyncData('modules', async () => {
  return $fetch(`/learning/${route.value.course}/modules/Переменные и базовые типы` , {
    baseURL: baseURL,
    headers: {
      Authorization: "Bearer " + getToken() || '',
    }
  })
})

console.log(modules.value);

</script>

<template>
  <Transition name="course" appear>
    <div class="layout">
      <div class="about-course">
        <div
          class="image"
          :style="setAvatar(data?.details.image)"
        />
        <div class="information">
          <h1>{{route.course}}</h1>

          <div class="teachers">
            <div class="teacher" v-for="teacher in data?.teachers">
              <div class="avatar" :style="setAvatar(teacher?.profile)" />
              <span>{{teacher.firstname}}</span>
            </div>
          </div>
        </div>
      </div>
      <p class="course-description">
        {{data.details.description}}
      </p>

      <LearningBlock class="modules-block" text="Все Модули">
        <div class="modules">
<!--          <LearningModule-->
<!--            class="module"-->
<!--            v-for="(module, index) in modules"-->
<!--            :key="index"-->
<!--            :index="index+1"-->
<!--            :name="module.name"-->
<!--            :lectures="module.lectures"-->
<!--            :assignments="module.assignments"-->
<!--          />-->
        </div>
      </LearningBlock>

      <LearningBlock text="Последние Оценки">
        <Grid
          class="rates-wrap"
          :columns="2"
          gap="6px"
        >
          <TransitionGroup name="rates" appear>
            <LearningRate
              v-for="(a, index) in 5"
              :key="index"
              name="Создание приложения Javacript"
              type="Задание"
              :rate="70"
            />
          </TransitionGroup>
        </Grid>

      </LearningBlock>
    </div>
  </Transition>


</template>

<style scoped lang="scss">

.about-course {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 21px;

  .image {
    height: 180px;
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    border: 1px solid var(--ui-secondary);
    border-radius: 12px;
  }

  .information {
    height: 90%;

    h1 {
      font-size: 2.5em;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: 1.2px;
      margin-bottom: 6px;
    }

    p {
      color: var(--text-secondary);
      font-size: .9em;
      margin-bottom: 6px;
    }

    .teachers {
      display: flex;
      align-items: center;

      .teacher {
        display: flex;
        align-items: center;

        .avatar {
          height: 20px;
          aspect-ratio: 1/1;
          background-color: var(--bg-secondary);
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          background-image: url("https://lh6.googleusercontent.com/proxy/i_uutN4ej1swLhAv6_pVESK3ApNo94yhIUYso9qb3tRBuTwAmFO2V4E4CfaolYATg69RxY92_tObigL4Z1AdrPyNUW1GqjYxel4dLEG_SzFtB55yEjTD5MXJ6x5cagy7a8qr4A");
        }

        span {
          margin-left: 6px;
        }
      }
    }
  }
}

.course-description {
  line-height: 1.6;
  font-size: .98em;
  font-weight: 500;
  margin-bottom: 15px;
  color: var(--text-soft);
}

.last-rates {

  h5 {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 9px;
  }

  .rates-wrap {

    .rates-enter-active {
      transition: all 0.4s ease-out;
    }

    .rates-leave-active {
      transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .rates-enter-from,
    .rates-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }


  }
}

.course-enter-active {
  transition: all 0.4s ease-out;
}

.modules-block {
  width: 100%;

  .modules {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;

    .module {
      flex: 1;
    }
  }
}

.course-enter-from {
  opacity: 0;
}

@media screen and (max-width: 520px){
  .about-course {
    flex-direction: column;
    margin-bottom: 12px !important;
  }


  .information {
    margin: 0 auto;
    text-align: center;

    h1 {
      max-width: unset !important;
      width: 100%;
    }
  }

  .teachers {
    justify-content: center;
  }

  .course-description {
    text-align: center;
  }
}

</style>