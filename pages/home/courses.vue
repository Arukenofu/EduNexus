<script setup lang="ts">
import { useAPI } from "~/composables/useAPI";
import type { Courses } from "~/interfaces/Courses";
import { useAsyncData } from "#app";

interface Categories {
  categories: {
    name: string,
    color: number
  }[]
}

const {data: response} = await useAPI<Categories>('/categories/');

const category = ref({
  state: false,
  options: response.value?.categories.map(item => item.name)
})

const paginationState = ref<number>(1);

watch(paginationState, () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

const {data: courses} = await useAsyncData<Courses>('courses',
  () => $fetch(`/courses?perPage=8&page=${paginationState.value}`, {
    baseURL: 'http://localhost:8080/api'
  }), {
    watch: [paginationState]
  }
)

</script>

<template>
  <article>
    <h1>Найдите подходящую программу</h1>

    <div class="filters">


      <Select @click="category.state =! category.state">
        <SelectContent class="select-content">
          Категория
        </SelectContent>

        <Transition name="select">
          <SelectGroup v-if="category.state" class="select-group">
            <SelectOption v-for="option in category.options" class="select-item">
              {{option}}
            </SelectOption>
          </SelectGroup>
        </Transition>
      </Select>

    </div>

    <Grid :columns="4" :rows="2" gap="12px">
      <CourseCard
        v-for="course in courses?.courses"
        :title="course.title"
        :organization_name="course.organization_name"
        :image="course.image"
      />
    </Grid>

    <Pagination class="pag" v-model:state="paginationState" :length="courses?.pages" :limit="8" />
  </article>
</template>

<style scoped lang="scss">
article {
  margin-top: 81px;

  h1 {
    width: 100%;
    margin-bottom: 7px;
  }

  .filters {
    display: flex;
    gap: 15px;
    margin-bottom: 21px;

    .select-content {
      width: 120px;
    }

    .select-group {
      width: 210px;
      height: 210px;

      .select-item {
        padding: 9px 12px;
      }
    }
  }

  .courses {
    margin-bottom: 21px;
  }

  .dropdown {
    padding: 0 12px;
  }

  .pag {
    margin-top: 21px;
    margin-bottom: 101px;
  }
}

</style>