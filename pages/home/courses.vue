<script setup lang="ts">
import { useAPI } from "~/composables/useAPI";
import type { Courses } from "~/interfaces/Courses";

const levelProgram = {
  state: 1,
  options: [
    'Бакалавр',
    'Магистратура',
    'Аспирантура'
  ]
};

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

const {data: courses} = await useAPI<Courses>('/courses/');

const paginationState = ref<number>(1);

</script>

<template>

  <article>
    <h1>Найдите подходящую программу </h1>

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

    <CourseCard class="courses" :courses="courses?.courses" />

    <Pagination :state="paginationState" :length="18" :limit="5" />
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
}

</style>