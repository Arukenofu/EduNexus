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

const route = useRouteParams();

const {data: lecture} = await useAPI<Lecture>(`/learning/${route.value.course}/lectures/${route.value.id}`);
let h1Content = lecture.value!?.content?.content.match(/<h1[^>]*>(.*?)<\/h1>/i)![0].replace(/<\/?h1>/gi, '')

const {data: next, error} = await useAPI<Lecture>(`/learning/${route.value.course}/lectures/${Number(route.value.id) + 1}`)

</script>

<template>
  <div class="outer">
    <div class="content">
      <p>
        <span @click="$router.push(`/learn/${route.course}/lectures`)">
          {{route.course}}</span>&nbsp; /&nbsp;
        <span>
          {{h1Content}}
        </span>
      </p>
      <div class="layout" v-html="lecture?.content?.content" />

      <div class="controls">

        <button @click="$router.push(`/learn/${route.course}/lectures`)">
          Домой
          <span>
            Перейти домой
          </span>
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/style/lecture-classes";
.outer {
  width: 95%;
  margin: 0 auto;

  .content {
    padding-top: 72px;
    margin: 0 auto;
    width: 55%;

    p {
      font-size: .9em;
      color: var(--text-secondary);
      margin-bottom: 6px;

      span {
        cursor: pointer;
        color: var(--text);
        user-select: none;
      }
    }


    .layout {
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
          margin-bottom: 12px;
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
  }

  .controls {
    margin-top: 90px;
    margin-bottom: 90px;
    display: flex;
    justify-content: center;

    button {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 1em;
      font-weight: 600;
      background-color: var(--ui-secondary);
      color: var(--text);
      border: 1px solid var(--border);
      padding: 12px 21px;
      border-radius: 12px;
      line-height: 1;

      span {
        margin-top: 3px;
        color: var(--text-secondary);
        font-size: .75em;
      }
    }
  }
}






</style>