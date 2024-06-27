<script setup lang="ts">

import Main from "~/pages/home/main.vue";

interface Code {
  assignment: {
    id: number,
    title: string,
    content: string,
    description: string,
    assignment_type_id: number
  }
}

const route = useRouteParams();

const {data} = await useAPI<Code>(`/learning/${route.value.course}/assignments/${route.value.id}`);

const model = ref();

const compileResult = ref<string | null>(null);
const isCompilePending = ref(false);

async function sendToCompile() {
  isCompilePending.value = true;
  asideState.value = true;

  const {data: result, error} = await useAPI<{test_passed: string}>(`/learning/${route.value.course}/assignments/${data.value?.assignment.id}`, {
    method: 'POST',
    body: {
      source: model.value
    },
    timeout: 60000
  })

  isCompilePending.value = false;

  if (error.value || !data.value) {
    return sendToast({
      type: "error",
      message: "Ошибка кода"
    })
  }

  compileResult.value = result.value?.test_passed!
}

const asideState = ref(false);

</script>

<template>
  <CodeHeader
    @compile="sendToCompile"
    :title="data?.assignment.title"
    v-model:state="asideState"
  />
  <NuxtLoadingIndicator style="position: absolute; top: 60px" color="var(--text)" />

  <main>
    <CodeSideBar
      v-model:state="asideState"
      :results="compileResult"
      :pending="isCompilePending"
      :instructions="data?.assignment.description || 'Нет инструкции для задания'"
    />

    <Code
      v-model:model="model"

    />
  </main>


</template>

<style scoped lang="scss">

main {
  display: flex;
}

</style>