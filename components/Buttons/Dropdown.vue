<script setup lang="ts">

const state = ref<boolean>(false);
const currentChoose = defineModel<number>('state');
const menuItems = defineModel<string[]>('items');

const closeDropdownMenu = () => {
  state.value = false;
}

interface Props {
  icon: string,
  size?: string,
  background?: string,
  color?: string,
  hoverColor?: string,
  width?: string,
  height?: string,
  border?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '1.4em',
  background: 'var(--bg)',
  color: 'var(--text)',
  hoverColor: 'var(--bg-secondary)',
  width: '100%',
  height: '33px',
  border: 'var(--border)'
})

</script>

<template>
  <div class="dropdown" v-click-outside="() => closeDropdownMenu()">
    <ButtonsButton1x1
      class="dropdown-btn"
      :icon-name="icon"
      title="По дате..."
      :left-side-text="menuItems![currentChoose!]"
      :color="background"
      :size="size"
      @click="state =! state"
    />


    <div class="dropdown-content" :class="state && 'show'">
      <ul>
        <li @click="currentChoose = index; closeDropdownMenu()" v-for="(time, index) in menuItems">
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
  display: inline-block !important;
  border: 1px solid v-bind(border);
  border-radius: 8px;

  .dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
    background-color: v-bind(background);
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 4px;
    border: 1px solid var(--border);
    text-align: center !important;

    ul {
      list-style: none;
      display: inline-block;
    }

    li {
      button {
        text-align: left;
        background: none;
        color: v-bind(color);
        border: none;
        border-bottom: 1px solid var(--border);
        height: v-bind(height);
        width: v-bind(width);
        padding: 0 12px;
        min-width: 180px;

        &:hover {
          background-color: v-bind(hoverColor);
        }
      }

      &:last-child button {
        border: none;
      }
    }
  }

  .show {
    display: inline-block;
  }
}
</style>