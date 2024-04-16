<script setup lang="ts">

const timeLines: string[] = [
  'За последний час',
  'Сегодня',
  'За эту неделю',
  'За этот месяц',
  'За этот год',
  'За всё время'
]

const state = ref<boolean>(false);
const currentChoose = defineModel<number>('state');

const closeDropdownMenu = () => {
  state.value = false;
}

</script>

<template>
  <div class="dropdown" v-click-outside="() => closeDropdownMenu()">
    <ButtonsButton1x1
      class="dropdown-btn"
      icon-name="iconoir:calendar"
      title="По дате..."
      :left-side-text="timeLines[currentChoose!]"
      @click="state =! state"
    />

    <div class="dropdown-content" :class="state && 'show'">
      <ul>
        <li @click="currentChoose = index; closeDropdownMenu()" v-for="(time, index) in timeLines">
          <button>
            {{time}}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 170px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
    background-color: var(--bg);
    left: 53%;
    transform: translate(-50%, 0);
    border-radius: 4px;
    border: 1px solid var(--border);
    text-align: center !important;

    ul {
      list-style: none;
    }

    li {

      button {
        width: 100%;
        text-align: left;
        background: none;
        color: var(--text);
        border: none;
        border-bottom: 1px solid var(--border);
        height: 33px;
        padding: 0 12px;

        &:hover {
          background-color: var(--bg-secondary);
        }
      }

      &:last-child button {
        border: none;
      }
    }
  }

  .show {
    display: block;
  }
}
</style>