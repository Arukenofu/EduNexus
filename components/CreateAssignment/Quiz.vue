<script setup lang="ts">
import type { Quiz } from "~/interfaces/Quiz";

const title = defineModel<string>('title');
const description = defineModel<string>('description');
const module = defineModel<string>('module');
const query = useRouteQuery()

interface Tree {
  title: string,
  variants: {value: string}[],
  answer: null | string
}

const tree = ref<Tree[]>([
  {
    title: '',
    variants: [
      {value: ''}
    ],
    answer: null
  }
]);

function addVariant(index: number) {
  tree.value[index].variants.push({
    value: ''
  })
}

function removeVariant(parent: number, child: number) {
  const root = tree.value[parent]
  const variants = root.variants

  if (parent === 0 && variants.length === 1) {
    return;
  }

  variants.splice(child, 1);

  if (variants.length === 0) {
    tree.value.splice(parent, 1);
  }
}
function addForm() {
  tree.value.push({
    title: '',
    variants: [
      {value: ''}
    ],
    answer: null
  })
}

function setVariantAnswer(parent: number, value: string) {
  if (value === '') {
    return;
  }

  tree.value[parent].answer = value
}

async function submitTree() {
  if (title.value!?.trim()?.length < 6) {
    return sendToast({
      type: "error",
      message: "Название задания меньше 6 символов"
    })
  }

  if (description.value!?.trim()?.length < 10) {
    return sendToast({
      type: "error",
      message: "Описание задания меньше 10 символов"
    })
  }

  const result: Quiz = {
    answers: [],
    variants: [],
    questions: []
  };

  tree.value.forEach((item, index) => {
    if (!item.answer || item.answer.trim() === '') {
      return sendToast({
        type: "error",
        message: `Отсутствует ответ для формы ${index+1}`
      })
    }

    const validVariants = item.variants
      .map(variant => variant.value.trim())
      .filter(value => value !== '');

    if (validVariants.length < 2) {
      return sendToast({
        type: "error",
        message: `Количество вариантов для формы ${index + 1} меньше чем 2`
      })
    }

    if (item.title.trim() === '') {
      return sendToast({
        type: "error",
        message: `Отсутствует вопрос для формы ${index + 1}`
      })
    }

    result.answers.push(item.answer.trim());
    result.variants.push(validVariants);
    result.questions.push(`${index + 1}. ${item.title.trim()}`);
  });


  const {data, error} = await useAPI(`/teachings/${query.value.course}/assignments`, {
    method: 'POST',
    body: {
      module_name: module.value,
      title: title.value,
      description: description.value,
      content: JSON.stringify(result),
      assignment_type_id: 2
    }
  });

  if (error.value) {
    return sendToast({
      type: "error",
      message: "Правильно заполните форму"
    })
  }

  sendToast({
    type: "notification",
    message: "Задание создано"
  });

  console.log(data.value);
}

</script>

<template>
  <div class="quiz">
    <div class="head">
      <input type="text" class="title" placeholder="Название задания" v-model="title" />
      <input type="text" class="description" placeholder="Описание" v-model="description" />
    </div>

    <div class="question" v-for="(q, pIndex) in tree" :key="pIndex">
      <input type="text" class="title" placeholder="Вопрос" v-model="q.title" />

      <div class="variant" v-for="(v, cIndex) in q.variants" :key="cIndex">
        <input
          type="text"
          class="variant"
          :placeholder="`Вариант ${cIndex+1}`"
          v-model="v.value"
        />
        <button @click="removeVariant(pIndex, cIndex)">
          <Icon name="material-symbols:delete" size="1.6em" />
        </button>
        <button
          :class="q.answer === v.value && 'check'"
          @click="setVariantAnswer(pIndex, v.value)"
        >
          <Icon
            :name="q.answer === v.value ? 'material-symbols:check-small-rounded' : 'material-symbols:close-small'"
            size="2em"
          />
        </button>
      </div>


      <button class="add" @click="addVariant(pIndex)">
        Добавить вариант
      </button>
    </div>

    <button class="addQuestion" @click="addForm()">
      <Icon name="material-symbols:add-circle" size="2.5em" />

      Добавить форму
    </button>

    <div class="send">
      <button @click="submitTree()">
        Отправить
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz {
  display: flex;
  flex-direction: column;
  gap: 21px;

  input {
    background: none;
    border: none;
    color: var(--text);
    width: 100%;
    transition: all .15s var(--transition-function);
    border-bottom: 1px solid var(--border);
    padding-bottom: 3px;
  }

  .head {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    background-color: var(--bg-third);
    padding: 30px 24px;
    border-radius: 12px;

    & > input {
      background: none;
      border: none;
      color: var(--text);
      width: 100%;
      transition: all .15s var(--transition-function);
      border-bottom: 1px solid var(--border);
      padding-bottom: 3px;
    }

    .title {
      font-size: 2em;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .description {
      font-weight: 400;
      font-size: 1em;
    }
  }

  .question {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    background-color: var(--bg-third);
    padding: 30px 24px;
    border-radius: 12px;

    .title {
      font-size: 1.1em;
      padding: 12px 12px;
      margin-bottom: 21px;
    }

    .variant {
      display: flex;
      gap: 9px;

      input {
        height: 40px;
        font-size: .9em;
        padding: 9px 12px;
        border: 1px solid var(--border);
        margin-bottom: 12px;
        border-radius: 4px;
      }

      button {
        height: 40px;
        aspect-ratio: 1/1;
        background: none;
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--red);
      }

      .check {
        color: var(--green);
      }
    }

    .add {
      background-color: var(--text-soft);
      border: none;
      display: block;
      width: 150px;
      padding: 12px 0;
      border-radius: 4px;
    }
  }

  .addQuestion {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-secondary);
    gap: 3px;
    width: 100%;
    max-width: 700px;
    background-color: var(--bg-third);
    padding: 30px 24px;
    border-radius: 12px;
    border: none;
    font-size: 1em;
  }

  .send {
    max-width: 700px;
    margin-bottom: 144px;

    button {
      display: flex;
      background-color: var(--text);
      border: none;
      color: var(--bg);
      font-size: 1em;
      padding: 9px 12px;
      border-radius: 4px;
      margin-left: auto;
    }
  }
}
</style>