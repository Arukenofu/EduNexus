<script setup lang="ts">
import { useAPI } from "~/composables/useAPI";
import type { Courses } from "~/interfaces/Courses";
import type { LocationQueryValue } from "vue-router";

interface Categories {
  categories: {
    name: string,
    color: number
  }[]
}

const search = ref<string>('');

const {data: response} = await useAPI<Categories>('/categories/');

const options = response.value?.categories.map(item => item.name);
options?.unshift('Все');

const category = ref({
  state: false,
  options: options
})

const categoryState = ref<string | LocationQueryValue[]>(useRoute().query.category || '');

const paginationState = ref<number>(Number(useRoute().query.page) || 1);

watch(categoryState, (value) => {
  useRouter().replace({
    query: {
      ...useRoute().query,
      category: value
    }
  })

  paginationState.value = 1;
});

watch(paginationState, (value) => {
  useRouter().replace({
    query: {
      ...useRoute().query,
      page: value
    }
  })

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

const {data: courses} = await useAsyncData<Courses>('courses',
  () => {
    const config = useRuntimeConfig().public.apiBase

    if (search.value?.length) {
      return $fetch(`/filter`, {
        method: 'POST',
        baseURL: config,
        body: {
          title: search.value,
          categories: categoryState.value === 'Все' || !categoryState.value ? null : [categoryState.value]
        }
      })
    }

    if (categoryState.value && categoryState.value !== 'Все') {
      return $fetch(`/categories/${categoryState.value}?perPage=8&page=${paginationState.value}`, {
        baseURL: config
      })
    }

    return $fetch(`/courses?perPage=8&page=${paginationState.value}`, {
      baseURL: config
    })
  },
  {
    watch: [paginationState, categoryState, search]
  }
)

</script>

<template>

  <article>
    <h1>Найдите подходящую программу</h1>

    <div class="filters">

      <Select @click="category.state =! category.state">
        <SelectContent class="select-content">
          {{categoryState || 'Все'}}
        </SelectContent>

        <Transition name="select">
          <SelectGroup
            v-if="category.state"
            class="select-group"
          >
            <SelectOption
              v-for="option in category.options"
              class="select-item"
              @click="categoryState = option"
            >
              {{option}}
            </SelectOption>
          </SelectGroup>
        </Transition>
      </Select>

      <div class="input-outer">
        <Icon name="iconoir:search" class="search" size="1.1em" />
        <input
          type="text"
          id="search"
          placeholder="Введите текст..."
          v-model="search"
        />
      </div>

    </div>

    <Grid :columns="4" gap="12px" v-if="courses?.courses">
      <CourseCard
        v-for="course in courses?.courses"
        :title="course.title"
        :organization_name="course.organization_name"
        :image="course.image"
        :organization_logo="course.organization_logo"
      />
      <div v-if="courses.courses?.length < 3" />
      <div v-if="courses.courses?.length < 4" />
    </Grid>

    <div class="no-course" v-else>
      ¯\_(ツ)_/¯

      <span>
        К сожалению пусто.
      </span>
    </div>

    <Pagination
      v-if="courses?.courses"
      class="pag"
      v-model:state="paginationState"
      :length="courses?.pages"
      :limit="5"
    />

  </article>
</template>

<style scoped lang="scss">
article {
  padding-top: 81px;

  h1 {
    width: 100%;
    margin-bottom: 7px;
  }

  .filters {
    display: flex;
    gap: 15px;
    margin-bottom: 21px;

    .select-group {
      width: 210px;
      height: 210px;

      .select-item {
        padding: 9px 12px;
      }
    }

    .input-outer {
      padding: 0 9px;
      width: 250px;
      height: 40px;
      border: var(--border) 1px solid;
      border-radius: 8px;
      display: flex;
      align-items: center;
      transition: background-color 0.2s ease;
      cursor: pointer;
      background-color: var(--bg);

      &:hover {
        background-color: var(--border);

        input {
          color: var(--text);

          &::placeholder {
            color: var(--text);
          }
        }
      }

      .search {
        color: var(--text-secondary);
      }

      input {
        padding-left: 9px;
        height: 100%;
        width: 100%;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        color: var(--text);
      }

      span {
        font-size: .85em;
        margin-left: 9px;
        color: var(--text-secondary);
        user-select: none;
      }
    }
  }

  .courses {
    margin-bottom: 21px;
  }

  .no-course {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 340px;
    font-size: 1.35em;
    user-select: none;
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