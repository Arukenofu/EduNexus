<script setup lang="ts">
import { useRouteParams } from "~/composables/getRouteParams";

interface Lecture {
  content: {
    id: number,
    module_id: number,
    description: string,
    content: string,
    days: string,
    assignment_type_id: number
  }
}

const {course, id} = useRouteParams();

const {data: lecture, error} = await useAPI<Lecture>(`/learning/${course}/${id}`);

</script>

<template>
  <div class="layout" v-html="lecture?.content.content">
  </div>
</template>

<style scoped lang="scss">
@import "style/lecture-classes";


.layout {
  margin-top: 72px;
  margin-bottom: 72px;
  padding-left: 45px;
  padding-right: 240px;
  line-height: 1.5;
  color: var(--text-soft);

  :deep() {
    b {
        font-weight: 700;
    }

    h1 {
        font-size: 2.75em;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 24px;
    }

    h2 {
        font-size: 1.9em;
        font-weight: 700;
    }

    h3 {
        font-size: 1.5em;
    }

    p {
        font-size: 1.1em;
        line-height: 1.4;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    ul {

      li {
        margin-left: 15px;
      }
    }

    pre {
      background-color: #18181a;
      padding: 12px 21px;
      border-radius: 0.3em;
      border: 1px solid var(--border);
      user-select: none;

      code {
        white-space: inherit;
        font-weight: 700;
      }
    }
  }
}



</style>