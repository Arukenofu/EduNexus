<script setup lang="ts">
import type { Module } from "~/interfaces/Module";
import type { CourseDetailed } from "~/interfaces/CourseDetailed";

interface Progress {
  lecture_progres: [
    {
      module_id: number,
      module_name: string,
      assignment_id: number,
      assignment_type_id: number,
      read: boolean
    }
  ]
}

interface Grade {
  grades: {
    title: string,
    info: string,
    score?: number
  }[]
}

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
  let result = [];

  const modules = await getModules(route.value.course as string);

  for (const module of modules!) {
    const data = await $fetch<Progress>(`/learning/${route.value.course}/modules/${module}` , {
      baseURL: baseURL,
      headers: {
        Authorization: "Bearer " + getToken() || '',
      }
    })
    result.push({
      name: module,
      lectures: data.lecture_progres.length
    })
  }

  return result
});

const {data: grades} = await useAsyncData<Grade>('grades', async () => {
  const {grades} = await $fetch<Grade>(`/learning/${route.value.course}/last_grades`, {
    baseURL: baseURL,
    headers: {
      Authorization: "Bearer " + getToken() || '',
    }
  })

  grades.forEach(item => {
    const [numerator, denominator] = item.info.split('/').map(Number);
    if (denominator === 0) {
      item['score'] = 0;
    } else {
      item['score'] = (numerator / denominator) * 100;
    }
  })

  return grades

});


const nuxtApp = useNuxtApp();
const isLoading = ref<boolean>(false);

nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});

</script>

<template>
  <Transition name="select" appear>
    <div class="layout" v-if="!isLoading">
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
          <LearningModule
            class="module"
            v-for="(module, index) in modules"
            :key="index"
            :index="index+1"
            :name="module.name"
            :lectures="module.lectures"
            :max="2"
          />
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
              v-for="(grade, index) in grades"
              :key="index"
              :name="grade.title"
              type="Задание"
              :rate="grade.score"
            />
          </TransitionGroup>
        </Grid>

      </LearningBlock>
    </div>

    <div class="loading" v-else>
      <Loading />
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

.loading {
  display: grid;
  place-items: center;
  height: 70vh;
}


@keyframes l16 {
  100%{transform: rotate(1turn)}
}

@keyframes l1 {
  to {
    transform: rotate(.5turn)
  }
}

@media screen and (max-width: 590px){
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

@media screen and (max-width: 768px){
  .loading {
    display: block;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%, -50%);
  }
}

.rates-wrap {
  grid-template-columns: 1fr 1fr !important;

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

</style>