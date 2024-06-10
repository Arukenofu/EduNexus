<script setup lang="ts">

interface Lecture {
  content: {
    title: string,
    content: string,
  }
}

const route = useRouteParams();

await useAPI(`/learning/${route.value.course}/read/${route.value.id}`, {
  method: 'POST'
});

const {data, pending} = await useAPI<Lecture>(`/learning/${route.value.course}/lectures/${route.value.id}`);

const content = JSON.parse(data.value?.content.content as string);


</script>

<template>
  <div class="outer" v-if="!pending">
    <div class="content">
      <p>
        <span @click="$router.push(`/learn/${route.course}/lectures`)">
          {{route.course}}</span>&nbsp; /&nbsp;
        <span>
          {{data.content.title}}
        </span>
      </p>
      <div class="layout" v-html="content.content" />

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

      :deep(&) {
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
          font-size: 1em;
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
    display: flex;
    justify-content: center;
    margin-top: 21px;
    margin-bottom: 90px;

    button {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1em;
      font-weight: 600;
      background-color: var(--bg);
      color: var(--text);
      border: none;
      padding: 12px 21px;
      border-radius: 12px;
      line-height: 1;

      &:hover {
        transition: background-color .2s var(--transition-function);
        background-color: var(--ui-secondary);
      }

      span {
        margin-top: 3px;
        color: var(--text-secondary);
        font-size: .75em;
      }
    }
  }
}






</style>