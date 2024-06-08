<script setup lang="ts">

const state = defineModel<number>('state');
const length = defineModel<number>('length');
const limit = defineModel<number>('limit')

const increment = () => {
  if (state.value !== length.value) {
    state.value!++
  }
}

const decrement = () => {
  if (state.value !== 1) {
    state.value!--
  }
}

const paginationLimitation = computed(() => {
  const result: number[][] = [];

  for (let i = 1; i <= length.value!; i += limit.value!) {
    const chunk = [];
    for (let j = i; j < i + limit.value! && j <= length.value!; j++) {
      chunk.push(j);
    }
    result.push(chunk);
  }

  if (result.length > 1 && result[result.length - 1].length < limit.value!) {
    const lastChunk = result.pop();
    const lastNumber = lastChunk![lastChunk!.length - 1];
    const newLastChunk = Array.from({ length: limit.value! },
      (_, i) => lastNumber - limit.value! + i + 1);
    result.push(newLastChunk);
  }

  return result
})

const paginationIndex = computed(() => {
  let index = -1;
  for (let i = 0; i < paginationLimitation.value.length; i++) {
    if (paginationLimitation.value[i].indexOf(state.value!) !== -1) {
      index = i;
      break;
    }
  }

  return index
})

</script>

<template>
  <div class="pagination">
    <ButtonsText @click="decrement()" icon="iconoir:nav-arrow-left" side="left" class="button">
      Назад
    </ButtonsText>

    <PaginationContent>
      <PaginationItem
        v-for="pagination in paginationLimitation[paginationIndex]"
        :class="pagination === state && 'chose'"
        @click="state = pagination"
      >
        {{pagination}}
      </PaginationItem>

      <PaginationEllipsis v-if="paginationIndex !== paginationLimitation.length-1" />

    </PaginationContent>

    <ButtonsText @click="increment()" icon="iconoir:nav-arrow-right" side="right" class="button">
      Далее
    </ButtonsText>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  height: 40px;
  display: flex;
  gap: 3px;
  justify-content: center;
}

.chose {
  background-color: var(--bg-secondary);
}

.button {
  border: none;
  border-radius: 4px;
}
</style>