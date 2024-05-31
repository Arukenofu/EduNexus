<script setup lang="ts">

const currentQuizId = ref<number>(0);
const questsLength = ref<number>(5)

const userAnswer = ref<number[][]>([

])

const selectedFirstColumnItem = ref<number | null>(null);
const selectedSecondColumnItem = ref<number | null>(null);
const clearSelected = () => {
  selectedFirstColumnItem.value = null;
  selectedSecondColumnItem.value = null;
}

const firstColumn = ref([
  'Cобака',
  'Кошка',
  'Бурундук',
  'Свинья'
]);
const secondColumn = ref([
  'Cat',
  'Pig',
  'Dog',
  'Squirrel',
]);

const onRowClick = (columnIndex: 0 | 1, index: number) => {
  let column = columnIndex === 0 ? selectedFirstColumnItem : selectedSecondColumnItem

  for (let i = 0; i < userAnswer.value.length; i++) {
    if (userAnswer.value[i][columnIndex] === index) {
      userAnswer.value.splice(i, 1);

      clearSelected();
    }
  }

  if (column.value === index) {
    column.value = null;

    console.log('Stopped by index');

    return;
  }


  column.value = index;

}

const findIndex = (columnIndex: 0 | 1, index: number) => {
  for (let i = 0; i < userAnswer.value.length; i++) {
    if (userAnswer.value[i][columnIndex] === index) {
      const target = userAnswer.value[i];

      return userAnswer.value.findIndex(el => el[0] === target[0] && el[1] === target[1])
    }
  }

}

const getColor = (columnIndex: 0 | 1, index: number) => {
  const colorHEX = [
    '#ff6666',
    '#25f52f',
    '#ff9900',
    '#667fff',
    '#66faff',
    '#ab66ff',
    '#ff66fc',
    '#ffab66',
  ]

  const color: number = findIndex(columnIndex, index)!;

  return colorHEX[color]
}

watchEffect(() => {
  if (selectedFirstColumnItem.value !== null && selectedSecondColumnItem.value !== null) {
    userAnswer.value.push([
      selectedFirstColumnItem.value,
      selectedSecondColumnItem.value
    ])

    clearSelected()
  }
});
</script>

<template>
  <section>
    {{ userAnswer }}
    <div class="option">
      <span>
        Вопросы: {{ currentQuizId! + 1 }}/{{ questsLength! }}
      </span>
    </div>

    <h1>
      Сопоставьте правильные ответы
    </h1>

    <div class="columns">

      <Grid :columns="1" :rows="4" class="wrap">
        <button
          class="item"
          v-for="(item, index) in firstColumn"
          :key="index"
          @click="onRowClick(0, index)"
          :class="selectedFirstColumnItem === index && 'selected'"
          :style="`background-color: ${getColor(0, index)}`"
        >
          {{item}}
        </button>
      </Grid>

      <Grid :columns="1" :rows="4" class="wrap">
        <button
          class="item"
          v-for="(item, index) in secondColumn"
          :key="index"
          @click="onRowClick(1, index)"
          :class="selectedSecondColumnItem === index && 'selected'"
          :style="`background-color: ${getColor(1, index)}`"
        >
          {{item}}
        </button>
      </Grid>

    </div>

    <button class="next" :disabled="firstColumn.length !== userAnswer.length">
      Далее
    </button>
  </section>
</template>

<style scoped lang="scss">

section {
  width: min-content;

  .option {
    margin-bottom: 6px;

    span {
      font-size: .95em;
      font-weight: 600;
      transition: color var(--transition-function) .15s;
      color: var(--text-secondary);
    }
  }

  h1 {
    font-size: 2.25em;
    font-weight: 700;
    margin-bottom: 28px;
    transition: color var(--transition-function) .15s;
    white-space: nowrap;
  }

  .columns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 21px;

    .wrap {

      .item {
        background-color: var(--bg);
        color: var(--text);
        border: 1px solid var(--border);
        padding: 12px 15px;
        font-size: 1.05em;
        font-weight: 700;
        border-radius: 6px;
        transition: all var(--transition-function) .15s;
      }

      .selected {
        background-color: var(--text);
        color: var(--bg);
      }

    }
  }

  .next {
    height: 60px;
    font-size: .95em;
    font-weight: 700;
    padding: 0 42px;
    border: none;
    border-radius: 12px;
    background-color: var(--text);
    color: var(--bg);
    transition: all var(--transition-function) .15s;

    &:disabled {
      opacity: .6;
    }
  }
}



</style>