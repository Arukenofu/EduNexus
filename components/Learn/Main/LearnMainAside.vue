<script setup lang="ts">
import getWeek from "~/utils/getWeek";

const tests = ref([
  {
    id: 0,
    type: 'Тест',
    name: 'Точки вхождения',
    time: '13:30 PM',
    description: 'Пройдите тест по точкам вхождения. Перечитайте все лекции связанные с этой темой.'
  },
  {
    id: 1,
    type: 'Видеолекция',
    name: 'Основы C++',
    time: '15:20 PM',
    description: 'Разбор основ языка программирования C++. Переменные, синтаксис, основные конструкции.'
  },
  {
    id: 3,
    type: 'Задание',
    name: 'Блочная видимость',
    time: '17:20 PM',
    description: 'Выполнить задание на блочную облать в JavaScript. '
  },
]);

const isTestListExpanded = ref(false);

const currentDate = new Date();

const months: string[] = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь",
  "Октябрь", "Ноябрь", "Декабрь"];
const currentMonth: string = months[currentDate.getMonth()];

const userDaySelection = ref<number>(currentDate.getDay() - 1);

const toggleExpandableTestList = computed(() => {
  if (isTestListExpanded.value) {
    return tests.value;
  }

  return tests.value.slice(0, 2)
})
</script>

<template>
  <div class="date">
    <p>{{`${currentMonth} ${currentDate.getFullYear()}`}}</p>

    <div class="days-wrap">

      <div class="day"
           v-for="(value, index) in getWeek()"
           @click="userDaySelection = index"
           :class="userDaySelection === index && 'picked'"
      >
            <span>
              {{value.week}}
            </span>
        <p>
          {{value.day}}
        </p>
      </div>

    </div>

    <div class="work-wrap" :style="isTestListExpanded ? 'max-height: 500px;' : 'max-height: 250px;'">

      <transition-group name="work">
        <div class="work" v-for="test in toggleExpandableTestList" :key="test.id">
          <div class="head">
            <p>{{`${test.type}: ${test.name}`}}</p>
            <span>{{test.time}}</span>
          </div>
          <p>{{test.description}}</p>
        </div>
      </transition-group>

    </div>

    <div class="more str2"
         @click="isTestListExpanded =! isTestListExpanded"
         v-if="tests.length >= 3">

      <Icon class="icon" :class="isTestListExpanded && 'rotated'" name="iconoir:nav-arrow-down" size="1.1rem" />
    </div>
  </div>

  <div class="card">
    <div class="course">
      <div class="head">
        <span>
          Основной курс
        </span>
        <span >
          Неделя 5 из 23
        </span>
      </div>
      <div class="progress">
        <div class="bar" style="width: 24%;" />
      </div>
    </div>
    <div class="course">
      <div class="head">
          <span>
            Курс: Введение
          </span>
        <span >
            Неделя 11 из 11
          </span>
      </div>
      <div class="progress">
        <div class="bar" style="width: 100%;" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.date {
  width: 100%;
  aspect-ratio: 1/1.2;
  background-color: var(--bg);
  padding: 18px 12px;
  border-radius: 12px;
  user-select: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  & > p {
    text-align: center;
    font-weight: 700;
    font-size: 1.1em;
  }

  .days-wrap {
    margin-top: 21px;
    display: flex;
    gap: 4px;
    border-bottom: 2px solid var(--border);
    padding-bottom: 14px;

    .day {
      background: linear-gradient(to top, var(--bg-secondary), var(--bg-secondary));
      height: 100px;
      flex: 1;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      transition: transform 0.2s ease-in-out;

      span {
        font-size: .9em;
        color: #838383;
      }

      p {
        font-weight: 600;
        color: var(--text);
      }

      &:hover {
        transform: translateY(-3px);
      }
    }

    .picked {
      background: linear-gradient(to top, var(--main-secondary), #585ad2);

      span, p {
        color: #FFFFFF;
      }
    }
  }

  .work-wrap {
    transition: max-height 0.4s ease-out;

    .work {
      margin-top: 14px;
      width: 100%;
      min-height: 110px;
      background-color: var(--bg-secondary);
      border-radius: 6px;
      padding: 12px 18px;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 1.05em;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
        }

        span {
          font-size: .8em;
          font-weight: 400;
        }
      }

      & > p {
        font-size: .9em;
        font-weight: 400;
        color: var(--text-secondary);
      }
    }
  }

  .more {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.1s;

    .icon {
      rotate: 0deg;
      transition: rotate .1s ease;
    }

    .rotated {
      rotate: 180deg;
    }
  }
}

.card {
  background-color: var(--bg);
  width: 100%;
  border-radius: 12px;
  padding: 18px 12px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;

    span:first-child {
      font-size: 1.1rem;
      color: var(--text);
    }

    span:last-child {
      font-size: .75rem;
      color: var(--text-secondary);
    }
  }

  .course {
    margin-bottom: 14px;
    padding: 0 6px;
  }

  .progress {
    background-color: var(--bg-secondary);
    height: 3px;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 7px;

    .bar {
      height: 3px;
      border-radius: 3px;
      background-color: var(--text);
    }
  }
}



</style>