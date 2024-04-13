<script setup lang="ts">

type lecture = 'Лекция' | 'Видеолекция';
type exercise = 'Задание' | 'Quiz' | 'Кодинг' | 'Эссе';

interface Props {
  type: lecture | exercise,
  name: string,
  date: string
}

const props = defineProps<Props>();

const isLecture = computed(() => {
  return props.type === 'Лекция' || props.type === 'Видеолекция';
})

</script>

<template>
  <div class="lesson">
    <div class="head">
      <div class="logo">
        <Icon :name="isLecture ? 'iconoir:book' : 'iconoir:notes'" size="1.8em" />
      </div>

      <div class="text">
        <p>{{type}}: {{name}}</p>

        <span v-if="isLecture">
          Дата: {{date}}
        </span>

        <span v-else>
          Срок Сдачи: {{date}}
        </span>


      </div>

      <div class="control">
        <Icon name="iconoir:nav-arrow-right" size="1.2em" class="str2" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lesson {
  width: 80%;
  max-width: 80%;
  margin-bottom: 12px;
  background-color: var(--ui-secondary);
  border-radius: 6px;
  border: 2px solid var(--border);
  padding: 9px 24px;
  display: grid;

  &:hover .control {
    transform: translateX(6px);
  }

  .head {
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;

    .logo {
      height: 90%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: var(--bg-third);
      display: grid;
      place-items: center;
    }

    .text {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;

      p {
        font-size: 1.05em;
        font-weight: 600;
        max-width: 80%;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      span {
        font-size: .8em;
        font-weight: 500;
        color: var(--text-secondary);
      }
    }

    .control {
      margin-left: auto;
      height: 80%;
      aspect-ratio: 1/1;
      display: grid;
      place-items: center;
      transition: transform 0.3s ease-in;
    }
  }
}

@media screen and (max-width: 1200px) {
  .lesson {
    width: 100%;
    max-width: 100%;
  }
}
</style>